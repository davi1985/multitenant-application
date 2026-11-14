import "fastify";

declare module "fastify" {
  type Payload = {
    sub: string;
  };

  interface FastifyRequest {
    organizationUser: {
      role: OrganizationRole;
      userId: string;
      organizationId: string;
    };
  }
}
