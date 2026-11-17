import { ListLeadsController } from "../controllers/leads/list-leads-controller";
import { makeLeadsRepository } from "./make-leads-repository";

export const makeListLeadsController = (organizationId: string) =>
  new ListLeadsController(makeLeadsRepository(organizationId));
