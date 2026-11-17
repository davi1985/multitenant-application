import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import type { LeadsRepository } from "../../repositories/leads-repository";

const schema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string(),
});

export class CreateLeadController {
  constructor(private leadsRepository: LeadsRepository) {}

  async handler(request: FastifyRequest, reply: FastifyReply) {
    const { email, name, phone } = schema.parse(request.body);

    const lead = await this.leadsRepository.create({ name, email, phone });

    reply.code(201).send({ lead });
  }
}
