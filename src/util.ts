export type NewableViewModel<T> = {
  new(schema: {[K in keyof T]: any}): any
}

export function assignmentHelper(target: any, source: any) {
  Object.entries(target).forEach((e, i) => {
    const [key] = e;
    if (key in target) {
      const keyWrap: string = key;
      const val = source[keyWrap];
      target[keyWrap] = val;
    }
  })
}