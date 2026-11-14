import type { FastifyPluginAsync } from "fastify";
import { ListLeadsController } from "../controllers/leads/list-leads-controller";
import { ValidatePermissionMiddleware } from "../middlewares/validate-permission-middleware";

export const leadsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("onRequest", ValidatePermissionMiddleware.verify);

  fastify.get("/", ListLeadsController.handler);
};
