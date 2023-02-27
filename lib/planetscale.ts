import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface ProjectsTable {
  id: number;
  title: string;
  about: string;
  tech: string;
  youtube: string;
  github: string;
}

interface Database {
  projects: ProjectsTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
