import { CreateLeadController } from "../controllers/leads/create-lead-controller";
import { makeLeadsRepository } from "./make-leads-repository";

export const makeCreateLeadController = (organizationId: string) =>
  new CreateLeadController(makeLeadsRepository(organizationId));
