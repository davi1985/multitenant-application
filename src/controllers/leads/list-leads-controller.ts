import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { db } from "../../lib/db.js";
import bcrypt from "bcryptjs";

export class ListLeadsController {
  static async handler(request: FastifyRequest, reply: FastifyReply) {
    return {
      leads: [],
    };
  }
}
