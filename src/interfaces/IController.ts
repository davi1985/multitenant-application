import type { FastifyReply, FastifyRequest } from "fastify";

export interface IController {
  handler(request: FastifyRequest, reply: FastifyReply): Promise<unknown>;
}
