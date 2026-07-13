// This file is the Prisma configuration for migrations and schema loading.
import "dotenv/config";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    engine: "classic",
    datasource: {
        url: env("DATABASE_URL"),
    },
});
//# sourceMappingURL=prisma.config.js.map