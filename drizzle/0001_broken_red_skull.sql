CREATE TABLE "search_terms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"term" text NOT NULL,
	"painting_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "search_terms" ADD CONSTRAINT "search_terms_painting_id_paintings_id_fk" FOREIGN KEY ("painting_id") REFERENCES "public"."paintings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "term_painting_unique" ON "search_terms" USING btree ("term","painting_id");