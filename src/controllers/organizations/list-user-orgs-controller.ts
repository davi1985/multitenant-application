import type { FastifyReply, FastifyRequest } from "fastify";
import type { OrganizationsRepository } from "../../repositories/organizations-repository";

export class ListUserOrgsController {
  constructor(
    private readonly organizationsRepository: OrganizationsRepository,
  ) {}

  async handler(request: FastifyRequest, _: FastifyReply) {
    const { sub: userId } = request.user;

    const orgs = await this.organizationsRepository.findOrgsByUserId(userId);

    return {
      orgs,
    };
  }
}
