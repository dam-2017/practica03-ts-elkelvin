"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Se define una clase de empleados con cuatro atributos
var Empleado = (function () {
    function Empleado(name, lastName, salary) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this._fullName = this.name + " " + this.lastName;
    }
    Object.defineProperty(Empleado.prototype, "getfullName", {
        //Función para llamar a losvalor
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    return Empleado;
}());
exports.Empleado = Empleado;
