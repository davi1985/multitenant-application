import type { FastifyPluginAsync } from "fastify";
import { ListLeadsController } from "../controllers/leads/list-leads-controller.js";

export const leadsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", ListLeadsController.handler);
};
