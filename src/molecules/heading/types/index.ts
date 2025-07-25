export type HeadingMoleculeConfigProps = {
  eyebrow?: string
  heading: string
  body?: string
  alignment: 'left' | 'center' | 'row';
  link?: {
    href: string
    label: string
  }
}