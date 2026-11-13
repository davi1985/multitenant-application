import type { FastifyReply, FastifyRequest } from "fastify";
import { randomUUID } from "node:crypto";
import { db } from "../../lib/db.js";

export class ListLeadsController {
  static async handler(request: FastifyRequest, reply: FastifyReply) {
    const organizationId = randomUUID(); // Replace with actual logic to get the organization ID

    const leads = await db.leads.findMany({
      where: {
        organizationId,
      },
    });

    return {
      leads,
    };
  }
}
