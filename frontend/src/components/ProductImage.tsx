import { useState, useEffect } from 'react';

const FALLBACK_IMAGE = '/icons.svg';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  imgClassName?: string;
}

const ProductImage = ({
  src,
  alt,
  className = '',
  frameClassName = '',
  imgClassName = '',
}: ProductImageProps) => {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);

  useEffect(() => {
    setImgSrc(src || FALLBACK_IMAGE);
  }, [src]);

  return (
    <div className={`img-frame ${frameClassName} ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setImgSrc(FALLBACK_IMAGE)}
        className={`img-show-full ${imgClassName}`}
      />
    </div>
  );
};

export default ProductImage;
