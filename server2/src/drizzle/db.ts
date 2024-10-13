import "dotenv/config";




import { configDotenv } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

configDotenv();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

async function main() {
  console.log("mirgrating...");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("migrated");
}

main().catch((error) => {
  console.error("Error migrating:", error);
  process.exit(1);
});














// import postgres from "po"
// const client = postgres(process.env.DATABASE_URL as string)
// export const db = drizzle(client, { schema, logger: true})




// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
// const db = drizzle(pool);
 
// // Función asíncrona para ejecutar el query
// async function runQuery() {
//     const result = await db.select().from(schema.users);
//     console.log(result);
//   }
  
//   // Ejecutar la función
//   runQuery();



//   import { drizzle } from 'drizzle-orm/postgres-js';

// import  'postgres';
// import postgres = require("postgres");
// import * as schema from './schema';

// const sql = postgres(process.env.DATABASE_URL!, { max: 1 });
// export const db = drizzle(sql, { schema });