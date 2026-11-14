import type { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../lib/db";

export class ValidatePermissionMiddleware {
  static async verify(request: FastifyRequest, reply: FastifyReply) {
    try {
      const organizationId = request.headers["x-org-id"];

      if (!organizationId || typeof organizationId !== "string") {
        return reply.code(403).send({ error: "Organization is missing" });
      }

      const { sub } = request.user;

      const organizationUser = await db.organizationUser.findFirst({
        where: {
          userId: sub,
          organizationId,
        },
      });

      if (!organizationUser) {
        return reply
          .code(403)
          .send({ error: "You don't have access to this organization" });
      }

      request.organizationUser = organizationUser;
    } catch {
      return reply
        .code(403)
        .send({ error: "You don't have access to this organization" });
    }
  }
}
