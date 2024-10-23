-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"name_producto" varchar(256),
	"descripcion" varchar(256),
	"precio" numeric(10, 2)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "role" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "usuario" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"dni" char(8),
	"email" varchar(150) NOT NULL
);

*/