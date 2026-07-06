import { Collections } from '@/app/components/Collections';
import { getAllCollections } from '@/utils/route-handlers/get-all-collections';

const Page = async () => {
  const collections = await getAllCollections();

  return (
    <section className="flex flex-col mt-4">
      <div className="flex justify-center mb-5">
        <div className="flex flex-col items-center gap-2 w-[350px]">
          <h1 className="text-3xl font-semibold">Collections</h1>
        </div>
      </div>
      <Collections collections={collections} />
    </section>
  );
};

export default Page;
