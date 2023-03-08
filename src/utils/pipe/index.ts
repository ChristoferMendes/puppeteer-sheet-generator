type Function = Array<(value: any) => void>;

export const pipe = (...functions: Function) => (value: any) => {
  return functions.reduce((currentValue, currentFunction) => {
    return currentFunction(currentValue);
  }, value)
}