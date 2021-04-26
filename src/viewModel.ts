import { ViewModel } from "./util";
import { AllViewModelProps, viewModelBuilder } from "./viewModel.builder";
@ViewModel()
export class MyViewModel implements AllViewModelProps {
  isOverLimit: boolean = null;
  sum: number = null;
}
