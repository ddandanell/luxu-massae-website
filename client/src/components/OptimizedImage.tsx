import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiAxNkMyMC40MTgzIDE2IDI0IDE5LjU4MTcgMjQgMjRDMjQgMjguNDE4MyAyMC40MTgzIDMyIDE2IDMyQzExLjU4MTcgMzIgOCAyOC40MTgzIDggMjRDOCAxOS41ODE3IDExLjU4MTcgMTYgMTYgMTZaIiBmaWxsPSIjRTVFN0VCIi8+CjxwYXRoIGQ9Ik0yNCA4SDE2QzEyLjY4NjMgOCAxMCAxMC42ODYzIDEwIDE0VjI2QzEwIDI5LjMxMzcgMTIuNjg2MyAzMiAxNiAzMkgyNEMyNy4zMTM3IDMyIDMwIDI5LjMxMzcgMzAgMjZWMTRDMzAgMTAuNjg2MyAyNy4zMTM3IDggMjQgOFoiIGZpbGw9IiNFNUU3RUIiLz4KPC9zdmc+'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Load image when in view
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      // Fallback image
      setImageSrc('/images/placeholder.jpg');
      setIsLoaded(true);
    };
    img.src = src;
  }, [isInView, src]);

  // Generate responsive srcSet if width is provided
  const generateSrcSet = () => {
    if (!width || !isInView) return undefined;
    
    const breakpoints = [480, 768, 1024, 1280];
    return breakpoints
      .map(bp => `${src}?w=${bp}&q=${quality} ${bp}w`)
      .join(', ');
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      srcSet={generateSrcSet()}
      sizes={width ? `(max-width: 768px) 100vw, ${width}px` : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`
        transition-opacity duration-500 
        ${isLoaded ? 'opacity-100' : 'opacity-0'} 
        ${className}
      `}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    />
  );
}

// Specialized component for hero images
export function HeroImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      priority={true}
      quality={90}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

// Specialized component for thumbnail images
export function ThumbnailImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={400}
      height={300}
      quality={75}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
