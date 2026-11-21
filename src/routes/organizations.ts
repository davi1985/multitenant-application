import type { FastifyPluginAsync } from "fastify";
import { routeAdapter } from "../adapters/route-adapter";
import { ListOrgUsersController } from "../controllers/organizations/list-org-users-controller";
import { makeListUserOrgsController } from "../factories/make-list-user-orgs-controller";
import { ValidatePermissionMiddleware } from "../middlewares/validate-permission-middleware";

export const organizationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    "/users",
    {
      onRequest: [ValidatePermissionMiddleware.verify(["ADMIN", "OWNER"])],
    },
    ListOrgUsersController.handler,
  );

  fastify.get(
    "/",
    routeAdapter(makeListUserOrgsController, { orgRequired: false }),
  );
};
