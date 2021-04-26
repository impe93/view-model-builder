import { ViewModel } from "./util";
import { AllViewModelProps } from "./viewModel.builder";
@ViewModel()
export class MyViewModel implements AllViewModelProps {
  isOverLimit: boolean = null;
  sum: number = null;
}
