export const objectMap = <T extends object>(object: T, fn: (key: keyof T, value: any) => any): T => {
  const entries = Object.entries(object)
  const mapped = entries.map((e) => [e[0], fn(e[0] as keyof T, e[1] as any)])
  return Object.fromEntries(mapped)
}

export const objectFilter = <T extends object>(object: T, fn: (key: keyof T, value: any) => boolean): Partial<T> => {
  const entries = Object.entries(object)
  const filtered = entries.filter((e) => fn(e[0] as keyof T, e[1]))
  return Object.fromEntries(filtered) as Partial<T>
}

export const objectLength = (baseObject: object): number => Object.entries(baseObject).length