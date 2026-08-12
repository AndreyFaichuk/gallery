import { getMediaContentUrl } from '@/utils';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../../constants';
import Image from 'next/image';

export const Statement = () => {
  const { statement } = IMAGES_CONFIG;

  const statementImageUrl = getMediaContentUrl(`${ABOUT_ME_PREFIX}/${statement}`);

  return (
    <section>
      <div className="relative h-[500px]">
        <Image
          src={statementImageUrl}
          alt="statement-image"
          fill
          priority
          className="object-cover xs:max-md:p-3"
        />
      </div>
    </section>
  );
};
