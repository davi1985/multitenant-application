import type { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../../lib/db";

export class ListOrgUsersController {
  static async handler(request: FastifyRequest, reply: FastifyReply) {
    const { organizationId } = request.organizationUser;

    const users = await db.organizationUser.findMany({
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
      members: users,
    };
  }
}
