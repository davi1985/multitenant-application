import type { FastifyReply, FastifyRequest } from "fastify";
import type { IController } from "../interfaces/IController";

export const routeAdapter =
  (controllerFactory: (tenantId: string) => IController) =>
  (request: FastifyRequest, reply: FastifyReply) => {
    const organizationId = request.headers["x-organ-id"] as string;
    if (!organizationId || typeof organizationId !== "string") {
      return reply.code(403).send({
        error: "Organization ID is missing or invalid in headers",
      });
    }

    return controllerFactory(organizationId).handler(request, reply);
  };
