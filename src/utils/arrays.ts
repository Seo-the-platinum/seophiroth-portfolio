/**
 * Checks if the provided value is a non-empty array.
 *
 * @param e - The value to check.
 * @returns `true` if `e` is a non-empty array, `false` otherwise.
 */
export const hasArrayValues = <T>(e: T): e is StripMaybe<T> => Boolean(Array.isArray(e) && e.length > 0);