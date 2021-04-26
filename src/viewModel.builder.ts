import { Schema } from "./schema";
import { NewableViewModel } from "./util";

export interface AllViewModelProps {
  sum?: number,
  mean?: number,
  isOverLimit?: boolean
}

export function viewModelBuilder<T extends NewableViewModel<AllViewModelProps>>(ViewModel: T, schema: Schema): T {
  const sum = getSum(schema);
  const mean = getMean(schema);
  const isOverLimit = getIsOverLimit(schema);

  const viewModel: AllViewModelProps = {
    sum,
    mean,
    isOverLimit,
  }

  return new ViewModel(viewModel);
}

function getSum(schema: Schema) {
  const { numero1, numero2, numero3 } = schema;
  return numero1 + numero2 + numero3;
}

function getMean(schema: Schema) {
  const sum = getSum(schema);
  return sum / 3;
}

function getIsOverLimit(schema: Schema) {
  const sum = getSum(schema);
  return schema.limiteSuperiore ? sum > schema.sommaLimite : sum < schema.sommaLimite;
}
