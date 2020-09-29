"use strict";
exports.__esModule = true;
exports.InputField = void 0;
var FieldLabel_1 = require("./FieldLabel");
var FieldType_1 = require("../enum/FieldType");
var InputField = /** @class */ (function () {
    function InputField(name, label, value) {
        this.type = FieldType_1.FieldType.input;
        this.name = name;
        this.label = label;
        this.value = value;
    }
    InputField.prototype.render = function () {
        var _this = this;
        var _a, _b, _c;
        var label = new FieldLabel_1.FieldLabel(this.name, this.label);
        label.render();
        var field = document.createElement("input");
        field.name = this.name;
        field.type = 'text';
        field.value = this.value;
        field.className = "fieldInput";
        field.onchange = function () {
            var currentValue = (document.getElementsByName(_this.name)[0]);
            _this.value = currentValue.value;
        };
        (_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.appendChild(field);
        var br = document.createElement("br");
        (_b = document.getElementById("form")) === null || _b === void 0 ? void 0 : _b.appendChild(br);
        br = document.createElement("br");
        (_c = document.getElementById("form")) === null || _c === void 0 ? void 0 : _c.appendChild(br);
    };
    return InputField;
}());
exports.InputField = InputField;
