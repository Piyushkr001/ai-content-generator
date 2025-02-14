/** @type {import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.tsx",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://neondb_owner:npg_3SZijpzJu9DK@ep-quiet-shadow-a8wxd9lo-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
    }
};