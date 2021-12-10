# This is a general typescript package with useful functions and some general abstract react components


## Main

## General:

### removeEmptyAttributes: (obj: any) => any
Remove all keys of an object with empty (null | undefined) values

### createDebounce: () => (fn: Function, timeInMS: number) => void
Return a debounce function

### exists: (item: any) => boolean
Return a boolean value based on item <br>
Rules:
  - non objects:
    - item !== null
    - item !== undefined
  - objects:
    - Object.keys(item).length > 0 || (!!item.length && item.length > 0)

Example:
```typescript
exists('') //true
exists({}) //false
exists({a: 'a'}) //true
exists([]) //false
exists(['']) //true
```

### orderArrayOfObjects: \<T extends object\>(arrayOfObjects: T[]) => { by: (keys: keyof T) => { asc: () => T[], desc: () => T[] }}
Sorts items based on specified key and chosen order (asc: ascendent | desc: descendent)

Example:
```typescript
type MyObjectType = {
  id: number,
  name: string
}
const myArrayOfMyObjects: MyObjectType[] = [
  {
    id: 1,
    name: 'asd'
  },
  {
    id: 2,
    name: 'asd2'
  }
]
orderArrayOfObjects(myArrayOfMyObjects).by('id').desc() //[{id: 2, name: 'asd2'}, {id: 1, name: 'asd'}]
orderArrayOfObjects(myArrayOfMyObjects).by('name').asc() //[{id: 1, name: 'asd'}, {id: 2, name: 'asd2'}]
```

## Objects:

### objectMap \<T extends object\>(object: T, fn: (key: keyof T, value: any) => any) => T
Receives an object and a function that returns any
Is like the array function _map_ but for objects

Example: 
```typescript
const obj = {
  asd: 'asd',
  asd2: 'asd2'
}
objectMap(obj, (key, val) => val.toUpperCase()) // {asd: 'ASD', asd2: 'ASD2'}
```

### objectFilter \<T extends object\>(object: T, fn: (key: keyof T, value: any) => boolean): Partial\<T\>
Receives an object and a function that returns boolean
Is like the array function _filter_ but for objects

Example: 
```typescript
const obj = {
  asd: 'asd',
  asd2: null
}
objectFilter(obj, (key, val) => val !== null) // {asd: 'asd'}
```

<br>

## Promises:

### handlePromise: (p: Promise\<any\>) => Promise\<[any | null, any | null]\>

Returns an array with two position, if the promise resolves the fisrt positoin comes with the result and the second comes null, if the promise fails the first position comes null and the second comes with the error

Example
```typescript
const [result, error] = await handlePromise(callToAPI())
if(!!error && exists(error)){
  alert(error.message)
  return
}
doSomethingWithResult(result)
```

### handlePromiseChain: (...p: Promise\<any\>[]) => Promise\<[any[] | null, any[] | null]\>
Same functionality as **handlePromise** but the inputs and the outputs are arrays

<br>

## MUI shortcuts:

### stackFlexColumn: (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center') => void

Return properties for the Stack MUI Component \<flexDirection: "column"\>


### stackFlexRow: (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center') => void

Return properties for the Stack MUI Component \<flexDirection: "row"\>

### flexColumn: (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center') => void
Return properties for custom styles \<flexDirection: "column"\> (SxProps | React.CSSProperties)

### flexRow: (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center') => void
Return properties for custom styles \<flexDirection: "row"\> (SxProps | React.CSSProperties)

<br>

## Types:

### Merge\<A, B\>
Return the junction  between A and B ()