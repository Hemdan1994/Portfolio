import type { ImgHTMLAttributes } from 'react'

export type ResponsivePicture = {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

type Props = {
  image: ResponsivePicture
  alt: string
  sizes?: string
  priority?: boolean
  /** Classes for the picture element. Keep the img classes on `className`. */
  frameClassName?: string
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height' | 'alt' | 'loading' | 'fetchPriority'>

export function ResponsiveImage({
  image,
  alt,
  sizes,
  priority = false,
  frameClassName = 'block',
  decoding = 'async',
  ...imgProps
}: Props) {
  const avif = image.sources.avif
  return (
    <picture className={frameClassName}>
      {avif ? <source type="image/avif" srcSet={avif} sizes={sizes} /> : null}
      <img
        {...imgProps}
        alt={alt}
        src={image.img.src}
        srcSet={image.sources.webp}
        sizes={sizes}
        width={image.img.w}
        height={image.img.h}
        decoding={decoding}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'low'}
      />
    </picture>
  )
}
