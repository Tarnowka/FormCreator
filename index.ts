import { Form } from "./Form";

var form = new Form();
form.render();

var button = document.createElement("button");
button.innerHTML = "tak";
button.className = "button";
button.onclick = () => {
    alert(form.getValue());
}

document.getElementById('form')?.appendChild(button);