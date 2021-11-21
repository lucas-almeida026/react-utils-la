import { isEqual } from "lodash"
export const map = (fn: (value: any, index: number, array: any[]) => unknown) => (xs: any[]) => xs.map(fn)

export const filter = (fn: (value: any, index: number, array: any[]) => unknown) => (xs: any[]) => xs.filter(fn)

export const reduce = (fn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any) => 
  (xs: any[]) => xs.reduce(fn)

export const modP = (x: number) => (y: number) => ((y % x) + x) % x

export const lt = (ref: number) => (value: number) => value < ref
export const lte = (ref: number) => (value: number) => value <= ref
export const gt = (ref: number) => (value: number) => value > ref
export const gte = (ref: number) => (value: number) => value >= ref

export const _if = (condition: boolean) => (trueCase: Function) => {
  if(condition) trueCase()
}

export const _ifElse = (condition: boolean) => (trueCase: Function) => (falseCase: Function) => condition ? trueCase() : falseCase()

export const equals = (x: any) => (y: any) => {
  return isEqual(x, y)
}