export * from './operators'

export const pipe = (...fns: ((value: any) => any | void)[]) => (x: any) => fns.reduce((res, fn) => fn(res), x)
export const k = (x: any) => (y: any) => x
export const id = (x: any) => x