import type { paintings, collections } from '@/utils/db/schema';

export type PaintingT = typeof paintings.$inferSelect;
export type CollectionT = typeof collections.$inferSelect;
