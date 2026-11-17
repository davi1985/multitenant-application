import type { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../../lib/db";

export class ListUserOrgsController {
  static async handler(request: FastifyRequest, reply: FastifyReply) {
    const { sub: userId } = request.user;

    const orgs = await db.organizationUser.findMany({
      where: {
        userId,
      },
      select: {
        role: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return {
      orgs,
    };
  }
}
