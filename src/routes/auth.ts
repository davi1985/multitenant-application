import type { FastifyPluginAsync } from "fastify";
import { SignUpController } from "../controllers/auth/signup-controller.js";
import { SignInController } from "../controllers/auth/signin-controller.js";

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/signup", SignUpController.handler);
  fastify.post("/signin", SignInController.handler);
};
