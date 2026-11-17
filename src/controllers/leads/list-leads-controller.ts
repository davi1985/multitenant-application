import type { IController } from "../../interfaces/IController";
import { LeadsRepository } from "../../repositories/leads-repository";

export class ListLeadsController implements IController {
  constructor(private leadsRepository: LeadsRepository) {}

  async handler() {
    const leads = await this.leadsRepository.findAll();

    return {
      leads,
    };
  }
}
