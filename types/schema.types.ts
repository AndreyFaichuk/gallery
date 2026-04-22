import type { paintings } from '@/utils/db/schema';

export type PaintingT = typeof paintings.$inferSelect;
