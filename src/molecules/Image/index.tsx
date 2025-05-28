import type { FC } from 'react'
import type { ImageProps as NextImageProps } from 'next/image'
import NextImage from 'next/image'
import { twMerge } from 'tailwind-merge'

interface ImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  /**
   * The `aspectRatio` prop allows you to specify the aspect ratio of the image. The aspect ratio should be provided as a string in the format `"${number}/${number}"`, where the two numbers represent the width and height of the image, respectively.
   */
  aspectRatio?: `${number}/${number}`;
  /**
   * Determines whether the aspect ratio of the image should be unset, allowing the image to fill the container.
   */
  unsetRatio?: boolean;
  /**
   * Determines whether the image should override the default fill behavior and maintain its original aspect ratio.
   */
  noFill?: boolean;
  /**
   * The `url` prop represents the URL of the image to be displayed.
   */
  url?: string;
  /**
   * Determines whether the image should cover the entire container, maintaining its aspect ratio.
   */
  objectCover?: boolean;
  /**
   * The `alt` prop represents the alternative text for the image. This text is used to describe the image for accessibility purposes, such as for screen readers. If no `alt` text is provided, the image may not be accessible to users with disabilities.
   */
  alt?: Maybe<string>;
  /**
   * Determines whether the image should override the default maximum width behavior and maintain its original width.
   */
  unsetMaxW?: boolean;
}

const Image:FC<ImageProps>= ({
  alt,
  aspectRatio,
  className,
  height,
  noFill = false,
  objectCover = true,
  style,
  unsetMaxW = false,
  unsetRatio = false,
  width,
  url,
}) => {
  if (!url) console.warn(`Image with alt: ${alt} is ${url}`)

  const src = url ? url : '';
  return (
    <picture 
      className={twMerge('relative block', className)}
      style={{
        aspectRatio: unsetRatio ? undefined : `${width}/${height}`,
        maxWidth: unsetMaxW ? undefined : width,
        ...style
      }}
      >
      <NextImage 
        alt={alt || ''} 
        src={src}
        fill={!noFill}
        width={noFill ? width : undefined}
        height={noFill ? height : undefined}
        className={twMerge(objectCover && 'size-full object-cover')}
      />
    </picture>
  )
}

export default Image