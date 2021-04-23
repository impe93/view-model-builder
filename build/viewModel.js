"use strict";
exports.__esModule = true;
var viewModel_builder_1 = require("./viewModel.builder");
function assignmentHelper(target, source) {
    Object.entries(target).forEach(function (e, i) {
        var key = e[0];
        if (key in target) {
            var keyWrap = key;
            var val = source[keyWrap];
            target[keyWrap] = val;
        }
    });
}
var MyViewModel = (function () {
    function MyViewModel(scheme) {
        this.isOverLimit = null;
        this.sum = null;
        assignmentHelper(this, scheme);
    }
    return MyViewModel;
}());
var YourViewModel = (function () {
    function YourViewModel(scheme) {
        this.mean = null;
        this.sum = null;
        assignmentHelper(this, scheme);
    }
    return YourViewModel;
}());
var myViewModel = viewModel_builder_1.viewModelBuilder(MyViewModel, {
    numero1: 1,
    numero2: 2,
    numero3: 3,
    limiteSuperiore: true,
    sommaLimite: 3
});
var yourViewModel = viewModel_builder_1.viewModelBuilder(YourViewModel, {
    numero1: 3,
    numero2: 5,
    numero3: 1,
    limiteSuperiore: true,
    sommaLimite: 3
});
console.log(myViewModel);
console.log(yourViewModel);
//# sourceMappingURL=viewModel.js.map