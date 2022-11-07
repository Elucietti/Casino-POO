"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.JugadorPrincipiante = void 0;
var tragamonedas_1 = require("./tragamonedas");
var lcgRandom = require("lcg-random");
var opcion2 = 0;
var lineaJugada = 0;
var JugadorPrincipiante = /** @class */ (function (_super) {
    __extends(JugadorPrincipiante, _super);
    function JugadorPrincipiante(pApuesta, pProbabilidad) {
        return _super.call(this) || this;
    }
    JugadorPrincipiante.prototype.InicioJuego = function (min, max) {
        var readlineSync = require('readline-sync');
        console.log('\n' + '\n' + ' **** ingrese apueta **** ' + '\n' + '\n');
        opcion2 = Number(readlineSync.question());
        if (opcion2 > 500) {
            console.log("intenta juagar el modo Experto");
        }
        else {
            var linea1 = new Array(1);
            var linea2 = new Array(1);
            var linea3 = new Array(1);
            var min_1 = Math.ceil(1);
            var max_1 = Math.floor(9);
            console.log("empezemos: ");
            for (var i = 0; i <= 5; i++) {
                linea1[i] = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
                linea2[i] = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
                linea3[i] = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
                console.log(linea1[i] + linea2[i] + linea3[i]);
            }
        }
    };
    return JugadorPrincipiante;
}(tragamonedas_1.TragaMonedas));
exports.JugadorPrincipiante = JugadorPrincipiante;
