import { assignmentHelper } from "./util";
import { AllViewModelProps, viewModelBuilder } from "./viewModel.builder";

export class MyViewModel implements AllViewModelProps {
  isOverLimit: boolean = null;
  sum: number = null;

  constructor(scheme: AllViewModelProps) {
    assignmentHelper(this, scheme);
  }
}
