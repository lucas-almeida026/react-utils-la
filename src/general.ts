import isEqual from "lodash.isequal"

export const isNullable = (value: any): value is null => value === null || value === undefined

export const exists = (item: any) => {
  if(item instanceof Object && !(item instanceof Array)){
    return !isNullable(item) && !isEqual(item, {})
  }else if(item instanceof Array){
    return !isNullable(item) && !isEqual(item, [])
  }
  return !isNullable(item)
}


export const orderArrayOfObjects = <T extends object>(arrayOfObjects: T[]) => {
  type ObjectKeys = keyof T
  function by(key: ObjectKeys) {
    return {
      asc: () => asc(key),
      desc: () => desc(key)
    }
  }
  function asc(key: ObjectKeys){
    return arrayOfObjects.sort((a: T, b: T) => {
      if(a[key] < b[key]) return -1
      if(a[key] > b[key]) return 1
      return 0
    })
  }
  function desc(key: ObjectKeys){
    return arrayOfObjects.sort((a: T, b: T) => {
      if(b[key] < a[key]) return -1
      if(b[key] > a[key]) return 1
      return 0
    })
  }
  return {
    by: (key: ObjectKeys) => by(key)
  }
}
