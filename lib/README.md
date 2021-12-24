# This is a general typescript package with useful functions and some general abstract react components


## Main

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

### isNil: (value: any) => boolean
Return if value is _null_ or _undefined_
```typescript
isNil(null) // true
isNil(undefined) // true
isNil('') // false
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

### objectMap: \<T extends object\>(object: T, fn: (key: keyof T, value: any) => any) => T
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

### objectFilter: \<T extends object\>(object: T, fn: (key: keyof T, value: any) => boolean) => Partial\<T\>
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

### objectLength: (object: object) => number
Receives an object
Returns the number of keys of a certain object
```typescript
const a = {
  a: 'a',
  b: 'b'
}
objectFilter(a) // 2
```

### objectEvery: \<T extends object\>(object: T, fn: (key: keyof T, value: any, index: number, entries: [string, any][]) => boolean) => boolean
Receives an object and a function that returns boolean
Is like the _Array.every_ but for objects
```typescript
const a = {
  a: true,
  b: true
}
objectEvery(a, (key, value, index, entries) => value) // true
```

### objectSome: \<T extends object\>(object: T, fn: (key: keyof T, value: any, index: number, entries: [string, any][]) => boolean) => boolean
Receives an object and a function that returns boolean
Is like the _Array.some_ but for objects
```typescript
const a = {
  a: false,
  b: false
}
objectSome(a, (key, value, index, entries) => value) // false
```

### objectConcat: \<A extends object, B extends object\>(a: A, b: B) => A & B
Returns an object with attributes of A and B
Note: If A and B has attributes with same key, the value will be overwritten by the rightmost parameter
```typescript
const a = { a: 'a', b: 'b' }
const b = { c: 'c', b: 'b2' }
objectConcat(a, b) // { a: 'a', b: 'b2', c: 'c' }
objectConcat(b, a) // { a: 'a', b: 'b', c: 'c' }
```

<br>

## Promises:

### handlePromise: \<P\>(p: Promise\<P\>, callback?: Function): Promise<[P | null, Error | null]>
Receives a promise and an optional callback function
Returns an array with two position, if the promise resolves the fisrt position comes with the result and the second comes null, if the promise fails the first position comes null and the second comes with the error, and if you pass a callback it will be executed in either cases

Example
```typescript
const [result, error] = await handlePromise(callToAPI())
if(error){
  alert(error.message)
  return null
}
if(result){
  return result.data
}
```

### handlePromiseChain: (...p: Promise\<any\>[]) => Promise\<[any[] | null, any[] | null]\>
Receives a sequence of promises
Returns an array with two position, if the promise resolves the fisrt position comes with the result and the second comes null, if the promise fails the first position comes null and the second comes with the error.

<br>

## MUI shortcuts:

### stackFlexColumn: (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center') => void

Returns properties for the Stack MUI Component \<flexDirection: "column"\>


### stackFlexRow: (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center') => void

Returns properties for the Stack MUI Component \<flexDirection: "row"\>

### flexColumn: (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center') => void
Returns properties for custom styles \<flexDirection: "column"\> (SxProps | React.CSSProperties)

### flexRow: (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center') => void
Returns properties for custom styles \<flexDirection: "row"\> (SxProps | React.CSSProperties)

### vw: (value: number) => number
Returns pixels of window width, where _value_ is the percentage </br>
*Is like the _vw_ unit in CSS
```typescript
// In a 1280x720 window
vw(100) // 1280
vw(50) // 640
```

### vh: (value: number) => number
Returns pixels of window width, where _value_ is the percentage </br>
*Is like the _vh_ unit in CSS
```typescript
// In a 1280x720 window
vw(100) // 720
vw(120) // 864
```

<br>

## Types:

### Merge\<A, B\>
Return the junction  between A and B ()