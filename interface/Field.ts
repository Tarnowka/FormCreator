import { FieldType } from './../enum/FieldType';

export interface Field{
    type: FieldType;
    name: string;
    label: string;
    value: string;

    render(): void;
}