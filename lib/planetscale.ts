import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
