export type LeftAlignHeroProps = {
  body: string,
  eyebrow: string,
  heading: string,
  featuredImage?: {
    url: string,
    alt: string,
    aspectRatio?: `${number}/${number}`,
    width?: number,
    height?: number,
    noFill?: boolean,
    objectCover?: boolean,
    unsetMaxW?: boolean,
    unsetRatio?: boolean,
  },
}