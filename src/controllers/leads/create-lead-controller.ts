import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { db } from "../../lib/db";

const schema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string(),
});

export class CreateLeadController {
  static async handler(request: FastifyRequest, reply: FastifyReply) {
    const { email, name, phone } = schema.parse(request.body);
    const { organizationId } = request.organizationUser;

    if (!organizationId || typeof organizationId !== "string") {
      return reply.code(403).send({ error: "Organization is missing" });
    }

    const lead = await db.lead.create({
      data: {
        name,
        email,
        phone,
        organizationId,
      },
    });

    reply.code(201).send({ lead });
  }
}
