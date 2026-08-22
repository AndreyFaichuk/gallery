import type { paintings, collections } from '@/services/database/schema';

export type PaintingT = typeof paintings.$inferSelect;
export type CollectionT = typeof collections.$inferSelect;
