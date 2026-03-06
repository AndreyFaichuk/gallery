ALTER TABLE "collections" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "paintings" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "search_terms" ADD COLUMN "createdAt" timestamp DEFAULT now();