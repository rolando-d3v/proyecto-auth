// import { configDotenv } from "dotenv";
// import { drizzle } from "drizzle-orm/node-postgres";
// import { migrate } from "drizzle-orm/node-postgres/migrator";
// import { Pool } from "pg";

// // Cargar variables de entorno desde .env
// configDotenv();

// // Configurar el pool de conexión de PostgreSQL
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// // Crear instancia de Drizzle ORM con el pool de conexiones
// export const db = drizzle(pool);

// async function main() {
//   try {
//     console.log("Starting migration...");

//     // Ejecutar migración
//     await migrate(db, { migrationsFolder: "drizzle" });

//     console.log("Migration completed successfully.");
//   } catch (error) {
//     console.error("Error during migration:", error);
//     process.exit(1); // Forzar salida con error
//   } finally {
//     // Cerrar el pool de conexiones
//     await pool.end();
//     console.log("Database connection closed.");
//   }
// }

// // Ejecutar migración
// main();
