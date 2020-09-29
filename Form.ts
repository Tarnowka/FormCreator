import { InputField } from './Fields/InputField';
import { Field } from './interface/Field';

export class Form{
    private fields: Field[] = [
        new InputField("imie", "imie: ", "")
    ];

    getValue(): string[] {
        let values :string[] = [];

        for(let field in this.fields){
            values.push(this.fields[field].value);
        }

        return values;
    }

    render(): void{
        for(let field in this.fields){
            this.fields[field].render();
        }
    }
}
