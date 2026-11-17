import { db } from "../lib/db";

export class LeadsRepository {
  constructor(private organizationId: string) {}

  async findAll() {
    return db.lead.findMany({
      where: {
        organizationId: this.organizationId,
      },
    });
  }
}
