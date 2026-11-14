import type { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../../lib/db";

export class ListLeadsController {
  static async handler(request: FastifyRequest, reply: FastifyReply) {
    const organizationId = request.headers["x-org-id"];

    if (!organizationId || typeof organizationId !== "string") {
      return reply.code(403).send({ error: "Organization is missing" });
    }

    const leads = await db.lead.findMany({
      where: {
        organizationId,
      },
    });

    return {
      leads,
    };
  }
}
