import { LeadsRepository } from "../repositories/leads-repository";

export const makeLeadsRepository = (organizationId: string) =>
  new LeadsRepository(organizationId);
