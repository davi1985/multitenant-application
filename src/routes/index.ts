import type { FastifyPluginAsync } from "fastify";
import { SignupController } from "../controllers/auth/signup-controller.js";

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/auth/signup", SignupController.handler);
};
