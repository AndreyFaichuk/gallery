CREATE TYPE "public"."base_currency" AS ENUM('EUR', 'USD', 'UAH');--> statement-breakpoint
CREATE TABLE "collections" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"createdAt" timestamp DEFAULT now(),
	"image_urls" jsonb DEFAULT '[]'::jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exchange_rates" (
	"id" uuid PRIMARY KEY NOT NULL,
	"base_currency" "base_currency" DEFAULT 'USD' NOT NULL,
	"rate_usd" numeric NOT NULL,
	"rate_eur" numeric NOT NULL,
	"rate_uah" numeric NOT NULL,
	"fetched_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "paintings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"is_exclusive" boolean DEFAULT false NOT NULL,
	"price" numeric NOT NULL,
	"width_cm" numeric DEFAULT 1 NOT NULL,
	"height_cm" numeric DEFAULT 1 NOT NULL,
	"image_urls" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"videos" jsonb DEFAULT '[{"src":"","thumbnail":""}]'::jsonb NOT NULL,
	"is_available" boolean DEFAULT true NOT NULL,
	"year" numeric DEFAULT 2026 NOT NULL,
	"specifications" text,
	"collection_id" uuid,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "search_terms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"term" text NOT NULL,
	"painting_id" uuid NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "paintings" ADD CONSTRAINT "paintings_collection_id_collections_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collections"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "search_terms" ADD CONSTRAINT "search_terms_painting_id_paintings_id_fk" FOREIGN KEY ("painting_id") REFERENCES "public"."paintings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "paintings_collection_idx" ON "paintings" USING btree ("collection_id");--> statement-breakpoint
CREATE UNIQUE INDEX "term_painting_unique" ON "search_terms" USING btree ("term","painting_id");