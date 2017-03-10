"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Object.defineProperty(Operaciones.prototype, "setNum1", {
        set: function (num) {
            this.num1 = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "setNum2", {
        set: function (num) {
            this.num2 = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "getSuma", {
        get: function () {
            return this.num1 + this.num2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "getResta", {
        get: function () {
            return this.num1 - this.num2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "getFactorialN1", {
        get: function () {
            var valor = 1;
            for (var i = this.num1; i > 1; i--) {
                valor *= i;
            }
            return valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "getEsPrimoN1", {
        get: function () {
            var valor = 0;
            for (var i = 2; i <= this.num1; i++) {
                if (this.num1 % i == 0)
                    valor++;
            }
            return valor == 1;
        },
        enumerable: true,
        configurable: true
    });
    return Operaciones;
}());
exports.Operaciones = Operaciones;
