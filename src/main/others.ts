type LanguagesResult<T> = {[key in keyof T]: string | string[]}
type LanguagesFunctions<T> = {[key in keyof T]: (value: string | string[]) => LanguagesFunctions<T> & {join: () => LanguagesResult<T>}}
type LanguagesReturn<T> = LanguagesFunctions<T> & {join: () => LanguagesResult<T>} 

export const withLanguages = <T extends object>(languages: T): LanguagesReturn<T> => {
  const memo: any = {}

  const resultObj = {
    ...reduceDefault(),
    join
  }

  function reduceDefault(){
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

  function join (){return memo}
  return resultObj
}