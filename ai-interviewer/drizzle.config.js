
/** @type { import("drizzle-kit").Config} */

export default {
    dialect: "postgresql",
     out: "./drizzle",
    schema: "./utils/schema.js",
  
    dbCredentials: {
    url: 'postgresql://neondb_owner:npg_GZLkUrFK8TB2@ep-aged-cloud-a6nmmfhm-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require'
    }
  };