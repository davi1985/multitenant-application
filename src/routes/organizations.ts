import type { FastifyPluginAsync } from "fastify";
import { CreateLeadController } from "../controllers/leads/create-lead-controller";
import { ListLeadsController } from "../controllers/leads/list-leads-controller";
import { ValidatePermissionMiddleware } from "../middlewares/validate-permission-middleware";
import { ListOrgMembersController } from "../controllers/organizations/list-org-members-controller";

export const organizationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook(
    "onRequest",
    ValidatePermissionMiddleware.verify(["ADMIN", "OWNER"]),
  );

  fastify.get("/", ListOrgMembersController.handler);
};
