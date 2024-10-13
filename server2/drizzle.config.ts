// Make sure to install the 'pg' package 
// import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
// import { drizzle } from "drizzle-orm/node-postgres";
// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
// const db = drizzle(pool);
 
// // Función asíncrona para ejecutar el query
// async function runQuery() {
//     const result = await db.execute('select 1');
//     console.log(result);
//   }
  
//   // Ejecutar la función
//   runQuery();




// primera forma 

  import { defineConfig } from "drizzle-kit";
  export default defineConfig({
    dialect: "postgresql",
    schema: "./src/drizzle/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url:  process.env.DATABASE_URL as string
    }
  });

