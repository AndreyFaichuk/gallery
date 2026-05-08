ALTER TABLE "paintings" ALTER COLUMN "videos" SET DEFAULT '[{"src":"","thumbnail":""}]'::jsonb;--> statement-breakpoint
ALTER TABLE "paintings" ALTER COLUMN "videos" DROP NOT NULL;