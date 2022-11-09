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
var vrandom = require("vrandom");
var tragamonedas_1 = require("./tragamonedas");
var fs = require('fs');
var opcion2 = require('random-num');
var lineaJugada = 0;
var JugadorPrincipiante = /** @class */ (function (_super) {
    __extends(JugadorPrincipiante, _super);
    function JugadorPrincipiante(pApuesta, pProbabilidad, pJugada2) {
        var _this = _super.call(this) || this;
        _this.Jugada2 = pJugada2;
        _this.pozo = 2500;
        _this.estadisticas = "no apostaron";
        return _this;
    }
    JugadorPrincipiante.prototype.InicioJuego = function () {
        var readlineSync = require('readline-sync');
        console.log('\n' + '** ingrese apueta **** ' + '\n');
        this.Jugada2 = Number(readlineSync.question());
        if (this.Jugada2 > 500) {
            console.log("intenta juagar el modo Experto");
            console.log('\n' + '** ingrese apueta **** ' + '\n');
            this.Jugada2 = Number(readlineSync.question());
        }
        else {
            var linea1 = void 0;
            var linea2 = void 0;
            var linea3 = void 0;
            console.log("empezemos, el pozo acummulado es de: " + this.pozo);
            for (var i = 0; i < 3; i++) {
                linea1 = vrandom.int(1, 5, false);
                linea2 = vrandom.int(1, 5, false);
                linea3 = vrandom.int(1, 5, false);
                console.log(linea1 + linea2 + linea3);
            }
            var acumulado = this.pozo + this.Jugada2;
            console.log('\n' + "total del pozo acumulado: " + acumulado + '\n');
            this.estadisticas = "\n total apostado:" + this.Jugada2;
            console.log('\n' + 'desea volver a jugar?  1-NO || 2-SI' + '\n');
            this.Jugada2 = Number(readlineSync.question());
            if (this.Jugada2 == 2) {
                this.InicioJuego();
                this.Jugada2 = this.pozo + this.Jugada2;
            }
        }
    };
    return JugadorPrincipiante;
}(tragamonedas_1.TragaMonedas));
exports.JugadorPrincipiante = JugadorPrincipiante;
