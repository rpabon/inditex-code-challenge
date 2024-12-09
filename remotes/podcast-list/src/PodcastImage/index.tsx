import React, { useState } from 'react';
import cx from 'classnames';
import { PodcastImage as PodcastImageType } from 'podcast-types';
import styles from './PodcastImage.module.css';

interface PodcastImageProps {
  image: PodcastImageType;
  alt: string;
  className?: string;
}

export const PodcastImage: React.FC<PodcastImageProps> = ({
  image,
  alt,
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cx(styles.container, className)}>
      <img
        src={image.label}
        alt={alt}
        className={cx(styles.image, { [styles.loaded]: isLoaded })}
        style={{ height: `${image.attributes?.height}px` }}
        onLoad={onImageLoad}
      />
    </div>
  );
};
