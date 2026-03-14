CREATE TYPE "public"."base_currency" AS ENUM('EUR', 'USD', 'UAH');--> statement-breakpoint
CREATE TABLE "exchange_rates" (
	"id" uuid PRIMARY KEY NOT NULL,
	"base_currency" "base_currency" DEFAULT 'EUR' NOT NULL,
	"rate_usd" numeric NOT NULL,
	"rate_eur" numeric NOT NULL,
	"rate_uah" numeric NOT NULL,
	"fetched_at" timestamp NOT NULL
);
