//Se define una clase de empleados con cuatro atributos
export class Empleado {

    //Atributos públicos
    name: string; //es publico de tipo string
    lastName: string;
    salary: number;
    private _fullName: string;

    constructor(name:string,lastName:string,salary:number){
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this._fullName = `${this.name} ${this.lastName}`;
    }

    //Función para llamar a losvalor

    get getfullName():string{
        return this._fullName;
    }
}