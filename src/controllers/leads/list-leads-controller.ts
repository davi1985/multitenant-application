import type { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../../lib/db";

export class ListLeadsController {
  static async handler(request: FastifyRequest, _: FastifyReply) {
    const { organizationId } = request.user;

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
