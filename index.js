"use strict";
var _a;
export const __esModule = true;
import { Form } from "./Form";
var form = new Form();
form.render();
var button = document.createElement("button");
button.innerHTML = "tak";
button.className = "button";
button.onclick = function () {
    alert(form.getValue());
};
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.appendChild(button);
