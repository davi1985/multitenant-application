import type { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../../lib/db";

export class ListOrgMembersController {
  static async handler(request: FastifyRequest, reply: FastifyReply) {
    const { organizationId } = request.organizationUser;

    const members = await db.organizationUser.findMany({
      where: {
        organizationId,
      },
      select: {
        role: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return {
      members,
    };
  }
}
