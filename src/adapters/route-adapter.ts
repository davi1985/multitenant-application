import type { FastifyReply, FastifyRequest } from "fastify";
import type { IController } from "../interfaces/IController";

type Options = {
  orgRequired: boolean;
};

export const routeAdapter =
  (
    controllerFactory: (tenantId: string) => IController,
    options: Options = { orgRequired: true },
  ) =>
  (request: FastifyRequest, reply: FastifyReply) => {
    const organizationId = request.headers["x-organ-id"] as string;
    if (
      options.orgRequired &&
      (!organizationId || typeof organizationId !== "string")
    ) {
      return reply.code(403).send({
        error: "Organization ID is missing or invalid in headers",
      });
    }

    return controllerFactory(organizationId).handler(request, reply);
  };
