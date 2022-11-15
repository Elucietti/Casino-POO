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
var vrandom = require("vrandom");
var azar1 = require('azar');
var azar2 = require('azar');
var azar3 = require('azar');
var azar4 = require('azar');
var azar5 = require('azar');
var JugadorPrincipiante = /** @class */ (function (_super) {
    __extends(JugadorPrincipiante, _super);
    function JugadorPrincipiante() {
        var _this = _super.call(this) || this;
        _this.apuesta = 0;
        _this.pozoAcumulado = 1000;
        _this.probabilidad = (1 / 9) * 100;
        _this.jugada = 0;
        return _this;
    }
    JugadorPrincipiante.prototype.obtenerApuesta = function () {
        return this.apuesta;
    };
    JugadorPrincipiante.prototype.ingresarApuesta = function () {
        var readlineSync = require('readline-sync');
        console.log('\n' + '\n' + ' ** ingrese apueta ** ' + '\n');
        this.apuesta = Number(readlineSync.question());
    };
    JugadorPrincipiante.prototype.obtenerProbabilidad = function () {
        return this.probabilidad;
    };
    JugadorPrincipiante.prototype.InicioJuego = function () {
        var readlineSync = require('readline-sync');
        var valor = this.obtenerApuesta();
        console.log('\n' + '** ingrese apuesta **** ' + '\n');
        this.apuesta = Number(readlineSync.question());
        if (valor > 200) {
            console.log("intenta jugar el modo experto");
            console.log('\n' + '** ingrese apuesta **** ' + '\n');
            this.apuesta = Number(readlineSync.question());
        }
        else {
            var acumulado = this.pozoAcumulado + this.apuesta;
            console.log("Nivel Principiante");
            console.log("empezemos, el pozo acummulado es de: " + this.pozoAcumulado);
            console.log("probabilidad de ganar: " + this.probabilidad + "%");
            console.log(azar1.dice(3));
            console.log(azar2.dice(3));
            console.log(azar3.dice(3));
            if (azar1 == azar2 && azar2 == azar3) {
                console.log("Ganaste!");
                console.log('\n' + 'desea volver a jugar?  1-NO || 2-SI' + '\n');
                this.apuesta = Number(readlineSync.question());
                if (this.apuesta == 2) {
                    this.InicioJuego();
                    this.pozoAcumulado = this.pozoAcumulado + acumulado;
                }
            }
            else {
                var readlineSync_1 = require('readline-sync');
                console.log('\n' + "Perdiste!  total del pozo acumulado: " + acumulado + '\n');
                console.log('\n' + 'desea volver a jugar?  1-NO || 2-SI' + '\n');
                this.apuesta = Number(readlineSync_1.question());
                if (this.apuesta == 2) {
                    this.InicioJuego();
                    this.pozoAcumulado = this.pozoAcumulado + acumulado;
                }
            }
        }
    };
    return JugadorPrincipiante;
}(tragamonedas_1.tragamonedas));
exports.JugadorPrincipiante = JugadorPrincipiante;
