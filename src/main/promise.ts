export const handlePromise: (p: Promise<any>) => Promise<[any | null, any | null]> = p => 
  new Promise((res, _) => p.then(r => res([r, null])).catch(err => res([null, err])))

export const handlePromiseChain = (...p: Promise<any>[]) => new Promise<[any, any]>((res, _) => {
  Promise.all(p).then(results => res([results, null]))
  .catch(errors => res([null, errors]))
})