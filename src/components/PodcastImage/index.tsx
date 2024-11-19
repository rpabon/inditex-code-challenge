import React, { useState } from 'react';
import cx from 'classnames';
import { PodcastImage as PodcastImageType } from '@/types/PodcastImage';
import styles from './PodcastImage.module.css';

interface PodcastImageProps {
  image: PodcastImageType;
  alt: string;
}

export const PodcastImage: React.FC<PodcastImageProps> = ({ image, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      src={image.label}
      alt={alt}
      className={cx(styles.image, { [styles.loaded]: isLoaded })}
      style={{ height: `${image.attributes.height}px` }}
      onLoad={onImageLoad}
    />
  );
};
