
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

import * as schema from './schema';


const pool = new Pool({
  connectionString: Bun.env.DATABASE_URL,
});


// export const db = drizzle(pool);
export const db = drizzle(pool, {schema });



// export const db: NodePgDatabase<typeof schema> = drizzle(pool, { schema });

// async function main() {
//   console.log("mirgrating...");
//   await migrate(db, { migrationsFolder: "drizzle" });
//   console.log("migrated");
// }

// main().catch((error) => {
//   console.error("Error migrating:", error);
//   process.exit(1);
// });














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