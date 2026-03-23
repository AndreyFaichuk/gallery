ALTER TABLE "paintings" ADD COLUMN "width_cm" numeric DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "paintings" ADD COLUMN "height_cm" numeric DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "paintings" ADD COLUMN "image_urls" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "paintings" ADD COLUMN "video_urls" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "paintings" ADD COLUMN "year" numeric DEFAULT 2026 NOT NULL;--> statement-breakpoint
ALTER TABLE "paintings" ADD COLUMN "specifications" text;--> statement-breakpoint