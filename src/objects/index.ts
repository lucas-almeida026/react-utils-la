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

export const isObject = (val: any) => val instanceof Object && !(val instanceof Array)

const isArray = (val: any) => val instanceof Array

export const objectDepth = (o: object): number => {
  const values = Object.values(o)
  const objectChildrens = values.filter(val => isObject(val))
  if(objectChildrens.length > 0){
    return 1 + Math.max(...objectChildrens.map(child => objectDepth(child)))
  }
  return 1
}

export const objectDeepEntries = (o: object): any => {
  if(objectDepth(o) > 5) {
    console.warn(`Preventing maximum call stack size error for object deepest then 5 levels`)
    return []
  }
  const entries = Object.entries(o)
  return entries.map(([key, value]) => ([key, (isObject(value) ? [ ...objectDeepEntries(value)] : value)]))
}

export const objectFromDeepEntries = (arr: any): any => {
  const entries = Object.fromEntries(arr)
  return objectMap(entries, (_, value) => {
    if(isArray(value) && value.every((el: any) => isArray(el))) {
      return objectFromDeepEntries(value)
    }
    return value
  })
}
