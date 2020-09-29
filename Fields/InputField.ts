import { FieldLabel } from './FieldLabel';
import { FieldType } from "../enum/FieldType";
import { Field } from "../interface/Field";

export class InputField implements Field{

    public type: FieldType;
    public name: string;
    public label: string;
    public value: string;

    constructor(name: string, label: string, value: string){
        this.type = FieldType.input;
        this.name = name;
        this.label = label;
        this.value = value;
    }



    public render(): void{
        var label = new FieldLabel(this.name, this.label);
        label.render();

        var field = document.createElement("input");
        field.name = this.name;
        field.type = 'text';
        field.value = this.value;
        field.className = "fieldInput";
        field.onchange = () => {
            let currentValue = (document.getElementsByName(this.name)[0]) as HTMLInputElement;
            this.value = currentValue.value;
        }

        document.getElementById("form")?.appendChild(field)

        var br = document.createElement("br");
        document.getElementById("form")?.appendChild(br)
        br = document.createElement("br");
        document.getElementById("form")?.appendChild(br)
    }

}
