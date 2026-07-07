export const COLLECTION_PREVIEW_LAYOUT = {
  hero: 'md:col-[1_/_9] md:row-[1_/_2]',
  topRight: 'md:col-[9_/_14] md:row-[1_/_2]',
  bottomLeft: 'md:col-[1_/_5] md:row-[2_/_3]',
  bottomCenter: 'md:col-[5_/_10] md:row-[2_/_3]',
  bottomRight: 'md:col-[10_/_14] md:row-[2_/_3]',
} as const;

export const COLLECTIONS_PREVIEW_SLOTS = [
  {
    className: COLLECTION_PREVIEW_LAYOUT.hero,
    imageClassName: 'scale-[2.25] object-[52%_48%] md:scale-[2.05] md:object-[50%_48%]',
  },
  {
    className: COLLECTION_PREVIEW_LAYOUT.topRight,
    imageClassName: 'scale-[2] object-[50%_43%] md:scale-[1.75] md:object-[48%_43%]',
  },
  {
    className: COLLECTION_PREVIEW_LAYOUT.bottomLeft,
    imageClassName: 'scale-[2.25] object-[50%_50%] md:scale-[2.15] md:object-[50%_50%]',
  },
  {
    className: COLLECTION_PREVIEW_LAYOUT.bottomCenter,
    imageClassName: 'scale-[1.2] object-[50%_45%] md:scale-[1.6] md:object-[50%_45%]',
  },
  {
    className: COLLECTION_PREVIEW_LAYOUT.bottomRight,
    imageClassName: 'scale-[2.15] object-[52%_46%] md:scale-[1.95] md:object-[52%_46%]',
  },
];
