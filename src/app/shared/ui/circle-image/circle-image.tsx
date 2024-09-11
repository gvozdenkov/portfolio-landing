import { StaticImageData } from 'next/image';
import Image from 'next/image';
import clsx from 'clsx';

import s from './circle-image.module.scss';

type CircleImageProps = {
  image: StaticImageData;
  alt?: string;
  extraClass?: string;
};

export const CircleImage = ({ image, alt = '', extraClass = '' }: CircleImageProps) => {
  return (
    <>
      <Image
        src={image}
        alt={alt}
        className={clsx(s.circleImage, { [extraClass]: !!extraClass })}
      />
    </>
  );
};
