import type { FastifyPluginAsync } from "fastify";
import { routeAdapter } from "../adapters/route-adapter";
import { makeCreateLeadController } from "../factories/make-create-lead-controller";
import { makeListLeadsController } from "../factories/make-list-controller";
import { ValidatePermissionMiddleware } from "../middlewares/validate-permission-middleware";

export const leadsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("onRequest", ValidatePermissionMiddleware.verify());

  fastify.get("/", routeAdapter(makeListLeadsController));

  fastify.post(
    "/",
    {
      onRequest: [ValidatePermissionMiddleware.verify(["ADMIN", "OWNER"])],
    },
    routeAdapter(makeCreateLeadController),
  );
};
