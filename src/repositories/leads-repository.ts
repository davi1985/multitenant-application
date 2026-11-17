import { db } from "../lib/db";

type CreateLeadParams = {
  name: string;
  email: string;
  phone: string;
};

export class LeadsRepository {
  constructor(private organizationId: string) {}

  async findAll() {
    return db.lead.findMany({
      where: {
        organizationId: this.organizationId,
      },
    });
  }

  async create({ name, email, phone }: CreateLeadParams) {
    return db.lead.create({
      data: {
        name,
        email,
        phone,
        organizationId: this.organizationId,
      },
    });
  }
}
