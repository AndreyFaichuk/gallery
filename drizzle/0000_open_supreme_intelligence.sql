CREATE TABLE "paintings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"dimensions" text,
	"price" numeric NOT NULL,
	"images" jsonb NOT NULL
);
