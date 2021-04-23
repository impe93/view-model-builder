"use strict";
exports.__esModule = true;
exports.viewModelBuilder = void 0;
function viewModelBuilder(ViewModel, schema) {
    var limiteSuperiore = schema.limiteSuperiore, numero1 = schema.numero1, numero2 = schema.numero2, numero3 = schema.numero3, sommaLimite = schema.sommaLimite;
    var sum = getSum(schema);
    var mean = getMean(schema);
    var isOverLimit = getIsOverLimit(schema);
    var viewModel = {
        sum: sum,
        mean: mean,
        isOverLimit: isOverLimit
    };
    return new ViewModel(viewModel);
}
exports.viewModelBuilder = viewModelBuilder;
function getSum(schema) {
    var numero1 = schema.numero1, numero2 = schema.numero2, numero3 = schema.numero3;
    return numero1 + numero2 + numero3;
}
function getMean(schema) {
    var sum = getSum(schema);
    return sum / 3;
}
function getIsOverLimit(schema) {
    var sum = getSum(schema);
    return schema.limiteSuperiore ? sum > schema.sommaLimite : sum < schema.sommaLimite;
}
//# sourceMappingURL=viewModel.builder.js.map