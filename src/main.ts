import { MyViewModel } from "./viewModel";
import { viewModelBuilder } from "./viewModel.builder";

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

console.log(myViewModel);
