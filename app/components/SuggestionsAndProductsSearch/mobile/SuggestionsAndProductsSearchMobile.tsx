import { Input } from '../../ui';

export const SuggestionsAndProductsSearchMobile = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-center">
        <h1 className="text-2xl font-body">Search results</h1>
      </div>
      <Input />
    </div>
  );
};
