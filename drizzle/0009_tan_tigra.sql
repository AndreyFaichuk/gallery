ALTER TABLE "paintings" ALTER COLUMN "videos" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "paintings" ADD COLUMN "is_exclusive" boolean DEFAULT false NOT NULL;