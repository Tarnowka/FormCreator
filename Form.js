"use strict";
exports.__esModule = true;
exports.Form = void 0;
var InputField_1 = require("./Fields/InputField");
var Form = /** @class */ (function () {
    function Form() {
        this.fields = [
            new InputField_1.InputField("imie", "imie: ", "")
        ];
    }
    Form.prototype.getValue = function () {
        var values = [];
        for (var field in this.fields) {
            values.push(this.fields[field].value);
        }
        return values;
    };
    Form.prototype.render = function () {
        for (var field in this.fields) {
            this.fields[field].render();
        }
    };
    return Form;
}());
exports.Form = Form;
