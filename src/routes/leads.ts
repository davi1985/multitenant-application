import type { FastifyPluginAsync } from "fastify";
import { ListLeadsController } from "../controllers/leads/list-leads-controller";

export const leadsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", ListLeadsController.handler);
};
