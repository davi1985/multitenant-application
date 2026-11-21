import { ListUserOrgsController } from "../controllers/organizations/list-user-orgs-controller";
import { makeOrganizationsRepository } from "./make-organizations-repository";

export const makeListUserOrgsController = () =>
  new ListUserOrgsController(makeOrganizationsRepository());
