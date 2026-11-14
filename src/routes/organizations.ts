import type { FastifyPluginAsync } from "fastify";
import { SwitchOrganizationController } from "../controllers/organizations/switch-organizations-controller.js";

export const organizationsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/:organizationId/switch", SwitchOrganizationController.handler);
};
