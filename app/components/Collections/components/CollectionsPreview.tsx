import { COLLECTIONS_PREVIEW_SLOTS } from '@/constants';
import { CollectionItem } from './CollectionItem';
import { getAllCollections } from '@/utils/route-handlers/get-all-collections';

export const CollectionsPreview = async () => {
  const collections = await getAllCollections();

  const previewImages = collections.slice(0, COLLECTIONS_PREVIEW_SLOTS.length);

  if (!previewImages.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-1.5 md:aspect-[1.93] md:grid-cols-[repeat(13,minmax(0,1fr))] md:grid-rows-[1.29fr_1fr] md:gap-2 2xl:aspect-[2.45]">
      {previewImages.map((collection, index) => {
        const previewSlot = COLLECTIONS_PREVIEW_SLOTS[index];

        return (
          <CollectionItem
            key={collection.id}
            collection={collection}
            className={previewSlot.className}
            imageClassName={previewSlot.imageClassName}
          />
        );
      })}
    </div>
  );
};
