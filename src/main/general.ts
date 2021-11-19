export const removeEmptyAttributes = (obj: any) => 
  Object.fromEntries(Object.entries(obj).filter(([key, val]) => val !== undefined && val !== ''))

export function createDebounce(){
  let timer: any
  return (fn: Function, time: number) => {
    clearTimeout(timer)
    timer = setTimeout(fn, time)
  }
}

export const exists = (item: any) => {
  if(typeof item === 'object'){
    return item !== null && item !== undefined && (Object.keys(item).length > 0 || (!!item.length && item.length > 0))
  }
  return item !== null && item !== undefined
}

export const orderArrayOfObjects = <T extends object>(objArr: T[]) => {
  type ObjectKeys = keyof T
  function by(key: ObjectKeys) {
    return {
      asc: () => asc(key),
      desc: () => desc(key)
    }
  }
  function asc(key: ObjectKeys){
    return objArr.sort((a: T, b: T) => {
      if(a[key] < b[key]) return -1
      if(a[key] > b[key]) return 1
      return 0
    })
  }
  function desc(key: ObjectKeys){
    return objArr.sort((a: T, b: T) => {
      if(b[key] < a[key]) return -1
      if(b[key] > a[key]) return 1
      return 0
    })
  }
  return {
    by: (key: ObjectKeys) => by(key)
  }
}