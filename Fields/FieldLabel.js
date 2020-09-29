"use strict";
exports.__esModule = true;
exports.FieldLabel = void 0;
var FieldLabel = /** @class */ (function () {
    function FieldLabel(name, label) {
        this.name = name;
        this.label = label;
    }
    FieldLabel.prototype.render = function () {
        var _a;
        var label = document.createElement('label');
        label.htmlFor = this.name;
        label.innerHTML = this.label;
        (_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.appendChild(label);
    };
    return FieldLabel;
}());
exports.FieldLabel = FieldLabel;
