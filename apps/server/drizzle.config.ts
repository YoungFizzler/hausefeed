import { defineConfig } from "drizzle-kit";

export default defineConfig({
  // Use a glob so drizzle-kit can find .ts schema files
  schema: "./src/db/schema/**/*.ts",
  out: "./src/db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
});
