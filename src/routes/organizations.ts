import type { FastifyPluginAsync } from "fastify";
import { CreateLeadController } from "../controllers/leads/create-lead-controller";
import { ListLeadsController } from "../controllers/leads/list-leads-controller";
import { ValidatePermissionMiddleware } from "../middlewares/validate-permission-middleware";
import { ListOrgUsersController } from "../controllers/organizations/list-org-users-controller";
import { ListUserOrgsController } from "../controllers/organizations/list-user-orgs-controller";

export const organizationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    "/users",
    {
      onRequest: [ValidatePermissionMiddleware.verify(["ADMIN", "OWNER"])],
    },
    ListOrgUsersController.handler,
  );

  fastify.get("/", ListUserOrgsController.handler);
};
