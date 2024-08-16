export function map<T, U>(f: (elem: T) => U): (array: T[]) => U[] {
  return (array: T[]) => array.map(f)
}
