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
exports.JugadorExperto = void 0;
var tragamonedas_1 = require("./tragamonedas");
var lcgRandom = require("lcg-random");
var opcion1 = 0;
var lineaJugada = 0;
var JugadorExperto = /** @class */ (function (_super) {
    __extends(JugadorExperto, _super);
    function JugadorExperto(pApuesta, pProbabilidad) {
        return _super.call(this) || this;
    }
    JugadorExperto.prototype.InicioJuego = function (min, max) {
        var readlineSync = require('readline-sync');
        console.log('\n' + '\n' + ' **** ingrese apueta **** ' + '\n' + '\n');
        opcion1 = Number(readlineSync.question());
        if (opcion1 < 500) {
            console.log("intenta juagar el modo principiante");
        }
        else {
            var linea1 = new Array(1);
            var linea2 = new Array(1);
            var linea3 = new Array(1);
            var linea4 = new Array(1);
            var linea5 = new Array(1);
            var min_1 = Math.ceil(1);
            var max_1 = Math.floor(9);
            console.log("empezemos: ");
            for (var i = 0; i <= 5; i++) {
                linea1[i] = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
                linea2[i] = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
                linea3[i] = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
                linea4[i] = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
                linea5[i] = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
                console.log(linea1[i] + linea2[i] + linea3[i] + linea4[i] + linea5[i]);
            }
        }
    };
    return JugadorExperto;
}(tragamonedas_1.TragaMonedas));
exports.JugadorExperto = JugadorExperto;
