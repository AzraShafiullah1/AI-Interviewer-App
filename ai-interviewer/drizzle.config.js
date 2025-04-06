
    
  import { defineConfig } from "drizzle-kit";

  export default defineConfig({
    dialect: "postgresql",
    schema: "./app/utils/schema.js",
  
   
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_GZLkUrFK8TB2@ep-aged-cloud-a6nmmfhm-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require',
    },  
  });
  
 


