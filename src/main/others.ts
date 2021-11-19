function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[]
}
type WithLanguagesFunction<T> = {
  [key in T as number | string | symbol]: (value: string | string[]) => WithLanguagesFunction<T>
}
export const withLanguages = <T extends {[key: string]: string}>(languages: T) => {
  const memo: any = {}
  // type languagesResult = {[key in T]: string | string[]}
  // type languagesFunctions = {[key in T]: (value: string | string[]) => 
    
  //   {join: () => languagesResult}
  // }
  // type languagesReturned = languagesFunctionst & {join: () => languagesResult}

  const resultObj: any = {
    ...reduceDefault(),
    join
  }

  function reduceDefault(): WithLanguagesFunction<T>{
    return Object.keys(languages).reduce((acc: any, curr) => {
      const result: any = {}
      result[curr] = addText((languages as unknown as any)[curr])
      return {...acc, ...result}
    }, {})
  }  

  function addText (lang: string) {
    return (value: string | string[]) => {
      memo[lang] = value
      return resultObj
    }
  }

  function join (){return memo as {[key in T as number | string | symbol]: string | string[]}}
  return resultObj as WithLanguagesFunction<T> & {join: () => {[key in T as number | string | symbol]: string | string[]}}
}

withLanguages({pt: 'pt', en: 'en'})