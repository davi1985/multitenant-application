import type { FastifyPluginAsync } from "fastify";
import { SignUpController } from "../controllers/auth/signup-controller";
import { SignInController } from "../controllers/auth/signin-controller";

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/signup", SignUpController.handler);
  fastify.post("/signin", SignInController.handler);
};
