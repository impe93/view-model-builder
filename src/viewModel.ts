import { AllViewModelProps, viewModelBuilder } from "./viewModel.builder";

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

class MyViewModel implements AllViewModelProps {
  isOverLimit: boolean = null;
  sum: number = null;

  constructor(scheme: AllViewModelProps) {
    assignmentHelper(this, scheme);
  }
}

class YourViewModel implements AllViewModelProps {
  mean: number = null;
  sum: number = null;

  constructor(scheme: AllViewModelProps) {
    assignmentHelper(this, scheme);
  }
}

const myViewModel = viewModelBuilder(
  MyViewModel,
  {
    numero1: 1,
    numero2: 2,
    numero3: 3,
    limiteSuperiore: true,
    sommaLimite: 3
  }
);

const yourViewModel = viewModelBuilder(
  YourViewModel,
  {
    numero1: 3,
    numero2: 5,
    numero3: 1,
    limiteSuperiore: true,
    sommaLimite: 3
  }
);

console.log(myViewModel);
console.log(yourViewModel);
