import type { FastifyPluginAsync } from "fastify";
import { AuthenticationMiddleware } from "../middlewares/authentication-middleware.js";
import { authRoutes } from "./auth.js";
import { leadsRoutes } from "./leads.js";

export const publicRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.register(authRoutes, { prefix: "/auth" });
};

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("onRequest", AuthenticationMiddleware.verify);

  fastify.register(leadsRoutes, { prefix: "/leads" });
};

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(publicRoutes, { prefix: "/api" });
  fastify.register(privateRoutes, { prefix: "/api" });
};
