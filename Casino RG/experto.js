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
var lineaJugada = 0;
var vrandom = require("vrandom");
var JugadorExperto = /** @class */ (function (_super) {
    __extends(JugadorExperto, _super);
    function JugadorExperto(pApuesta, pProbabilidad, pJugada, pPozo) {
        var _this = _super.call(this) || this;
        _this.Jugada = pJugada;
        _this.pozo = 5000;
        return _this;
    }
    JugadorExperto.prototype.InicioJuego = function () {
        var readlineSync = require('readline-sync');
        console.log('\n' + '\n' + ' ** ingrese apueta ** ' + '\n');
        this.Jugada = Number(readlineSync.question());
        if (this.Jugada < 500) {
            console.log("intenta juagar el modo principiante");
        }
        else {
            var linea1 = void 0;
            var linea2 = void 0;
            var linea3 = void 0;
            var linea4 = void 0;
            var linea5 = void 0;
            console.log("empezemos, el pozo acummulado es de: " + this.pozo);
            for (var i = 0; i < 5; i++) {
                linea1 = vrandom.int(1, 5, false);
                linea2 = vrandom.int(1, 5, false);
                linea3 = vrandom.int(1, 5, false);
                linea4 = vrandom.int(1, 5, false);
                linea5 = vrandom.int(1, false);
                console.log(linea1 + linea2 + linea3 + linea4 + linea5);
            }
            var acumulado = this.pozo + this.Jugada;
            console.log('\n' + "total del pozo acumulado: " + acumulado + '\n');
            console.log('\n' + 'desea volver a jugar?  1-NO || 2-SI' + '\n');
            this.Jugada = Number(readlineSync.question());
            if (this.Jugada == 2) {
                this.InicioJuego();
                this.Jugada = this.pozo + this.Jugada;
            }
        }
    };
    return JugadorExperto;
}(tragamonedas_1.TragaMonedas));
exports.JugadorExperto = JugadorExperto;
