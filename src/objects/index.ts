export const objectMap = <InputType extends object, OutputType extends object>(
  object: InputType, 
  fn: (
    key: keyof InputType, 
    value: any,
    index: number,
    entries: [string, any][]
  ) => any
): OutputType => {
  const entries = Object.entries(object)
  const mapped = entries.map(
    ([key, value], index, entries) => [ key, fn(key as keyof InputType, value, index, entries) ]
  )
  return Object.fromEntries(mapped)
}

export const objectFilter = <InputType extends object>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: any,
    index: number,
    entries: [string, any][]
  ) => boolean
): Partial<InputType> => {
  const entries = Object.entries(object)
  const filtered = entries.filter(
    ([ key, value ], index, entries) => fn(key as keyof InputType, value, index, entries)
  )
  return Object.fromEntries(filtered) as Partial<InputType>
}

export const objectLength = (baseObject: object): number => Object.keys(baseObject).length

export const objectEvery = <InputType extends object>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: any,
    index: number,
    entries: [string, any][]
  ) => boolean
) => {
  const entries = Object.entries(object)
  return entries.every(
    ([key, value], index, entries) => fn(key as keyof InputType, value, index, entries)
  )
}

export const objectSome = <InputType extends object>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: any,
    index: number,
    entries: [string, any][]
  ) => boolean
) => {
  const entries = Object.entries(object)
  return entries.some(
    ([key, value], index, entries) => fn(key as keyof InputType, value, index, entries)
  )
}

export const objectConcat = <A extends object, B extends object>(
  a: A,
  b: B
): A & B => {
  return { ...a, ...b }
}