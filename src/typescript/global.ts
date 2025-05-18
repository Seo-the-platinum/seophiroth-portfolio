export type GlogalLayoutProps = {
  children: React.ReactNode
}

declare global {
  type StripMaybe<T> = Exclude<T, undefined | null | never>;
  type MergePrefer<T, U> = Partial<{
    [K in keyof T | keyof U]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never;
  }>;
}