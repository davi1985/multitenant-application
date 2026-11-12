import type { FastifyPluginAsync } from "fastify";
import { SignupController } from "../controllers/auth/signup-controller.js";
import { SignInController } from "../controllers/auth/signin-controller.js";

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/signup", SignupController.handler);
  fastify.post("/signin", SignInController.handler);
};
