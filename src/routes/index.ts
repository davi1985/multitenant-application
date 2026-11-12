import type { FastifyPluginAsync } from "fastify";
import { SignupController } from "../controllers/auth/signup-controller.js";
import { SignInController } from "../controllers/auth/signin-controller.js";

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/auth/signup", SignupController.handler);
  fastify.post("/auth/signin", SignInController.handler);
};
