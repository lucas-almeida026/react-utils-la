export function handlePromise<PromiseType>(
  p: Promise<PromiseType>, 
  callback?: Function
): Promise<[PromiseType | null, Error | null]>{
  return new Promise((res, _) => {
    p.then((r: PromiseType) => res([r, null]))
    .catch((err: Error) => res([null, err]))
    .finally(() => callback ? callback() : null)
  })
}

export const handlePromiseChain = (...p: Promise<any>[]) => new Promise<[any, any]>((res, _) => {
  Promise.all(p).then(results => res([results, null]))
  .catch(errors => res([null, errors]))
})

// export const handlePromiseChain = (...p: Promise<any>[]) => {
//   return new Promise<[any | null, Error[] | null]>((res, _) => {
//     Promise.all(p).then((results: any) => res([results, null]))
//     .catch((errors: Error[]) => res([null, errors as Error[]]))
//   })
// }
