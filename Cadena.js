"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cad) {
        this.cadena = cad.trim();
        this.array = this.cadena.toLowerCase().split("");
    }
    Object.defineProperty(Cadena.prototype, "setCadena", {
        set: function (cad) {
            this.cadena = cad.trim();
            this.array = this.cadena.toLowerCase().split("");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getEsPalindromo", {
        get: function () {
            var r = true;
            for (var i = 0; i < this.array.length; i++) {
                if (this.array[i] != this.array[this.array.length - 1 - i])
                    return false;
            }
            return r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getNumLetras", {
        get: function () {
            var count = 0;
            this.array.forEach(function (item) {
                if (item != " ")
                    count++;
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getNumPalabras", {
        get: function () {
            var count = this.array.length > 0 ? 1 : 0;
            this.array.forEach(function (item) {
                if (item == " ")
                    count++;
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "getNumVocales", {
        get: function () {
            var count = new Array(0, 0, 0, 0, 0);
            this.array.forEach(function (item) {
                switch (item) {
                    case "a":
                        count[0]++;
                        break;
                    case "e":
                        count[1]++;
                        break;
                    case "i":
                        count[2]++;
                        break;
                    case "o":
                        count[3]++;
                        break;
                    case "u":
                        count[4]++;
                        break;
                }
            });
            return "Cantidad de Vocales " + "\n A:" + count[0] +
                " \n E:" + count[1] +
                "\n I:" + count[2] +
                "\n O:" + count[3] +
                "\n U:" + count[4];
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
