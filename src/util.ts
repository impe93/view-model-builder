export type NewableViewModel<T> = {
  new(schema: {[K in keyof T]: any}): any
}

function assignmentHelper(target: any, source: any) {
  Object.entries(target).forEach((e, i) => {
    const [key] = e;
    if (key in target) {
      const keyWrap: string = key;
      const val = source[keyWrap];
      target[keyWrap] = val;
    }
  })
}

export function ViewModel() {
  return function _ViewModel<T extends {new(...args: any[]): {}}>(constr: T){
    return class extends constr {
      constructor(...args: any[]) {
        super(...args);
        assignmentHelper(this, args[0])
      }
    }
  }
}