import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { db } from "../../lib/db.js";
import bcrypt from "bcryptjs";

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export class SignInController {
  static async handler(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = schema.parse(request.body);
    const user = await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
        organizations: {
          take: 1,
          where: {
            role: "OWNER",
          },
        },
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return reply.code(401).send({ error: "Invalid credentials" });
    }

    const [org] = user.organizations;
    if (!org) {
      return reply
        .code(403)
        .send({ error: "You do not have an organization " });
    }

    const accessToken = request.server.jwt.sign({
      sub: user.id,
      organizationId: org.organizationId,
      role: org.role,
    });

    reply.code(200).send({ accessToken });
  }
}
