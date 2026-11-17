import type { FastifyPluginAsync } from "fastify";
import { AuthenticationMiddleware } from "../middlewares/authentication-middleware";
import { authRoutes } from "./auth";
import { leadsRoutes } from "./leads";
import { organizationRoutes } from "./organizations";

export const publicRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.register(authRoutes, { prefix: "/auth" });
};

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("onRequest", AuthenticationMiddleware.verify);

  fastify.register(leadsRoutes, { prefix: "/leads" });
  fastify.register(organizationRoutes, { prefix: "/organizations" });
};

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(publicRoutes, { prefix: "/api" });
  fastify.register(privateRoutes, { prefix: "/api" });
};
