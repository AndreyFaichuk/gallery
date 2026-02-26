import { Header } from '@/app/components/layout/Header';
import getAllPaintings from '@/utils/routeHandlers/getAllPaintings';

const GeneralPage = async () => {
  const allPainting = await getAllPaintings();

  console.log(allPainting, 'allPainting');

  return (
    <>
      <Header />
    </>
  );
};

export default GeneralPage;
