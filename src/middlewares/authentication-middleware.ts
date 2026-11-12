import type { FastifyReply, FastifyRequest } from "fastify";

export class AuthenticationMiddleware {
  static async verify(request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify();
    } catch {
      reply.code(401).send({ error: "Invalid access token" });
    }
  }
}
