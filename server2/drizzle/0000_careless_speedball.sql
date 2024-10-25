CREATE TABLE IF NOT EXISTS "producto" (
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256),
	"dni" char(8),
	"password" varchar(255),
	"email" varchar(150) NOT NULL,
	"descripcion" text,
	"estado" boolean DEFAULT true,
	"createAt" timestamp DEFAULT now()
);
