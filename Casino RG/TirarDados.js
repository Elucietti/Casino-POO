"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var numDado1 = require('azar');
var numDado2 = require('azar');
var readlineSync = require('readline-sync');
var Dados = /** @class */ (function () {
    function Dados() {
        this.total = 0;
        this.dado2 = 0;
        this.dado1 = 0;
        this.apuesta = 0;
    }
    Dados.prototype.obtenerDado1 = function () {
        return this.dado1;
    };
    Dados.prototype.iniciarDado1 = function () {
        numDado1.dice(6);
    };
    Dados.prototype.obtenerDado2 = function () {
        return this.dado2;
    };
    Dados.prototype.iniciarDado2 = function () {
        numDado1.dice(6);
    };
    Dados.prototype.mostrarJugada = function () {
        var readlineSync = require('readline-sync');
        console.log('\n' + '\n' + ' ** ingrese apueta ** ' + '\n');
        this.apuesta = Number(readlineSync.question());
        if (this.apuesta > 100) {
            console.log("tire los dados" + '\n');
            console.log(numDado1.dice(6));
            console.log(numDado2.dice(6));
            this.total = (numDado1 + numDado2);
            if (this.total == 10) {
                console.log("Ganaste!");
                console.log('\n' + 'desea volver a jugar?  1-NO || 2-SI' + '\n');
                if (this.apuesta == 2) {
                    this.mostrarJugada();
                }
                else if (this.total > 10) {
                    console.log("Perdiste");
                    console.log('\n' + 'desea volver a jugar?  1-NO || 2-SI' + '\n');
                    if (this.apuesta == 2) {
                        this.mostrarJugada();
                    }
                }
            }
        }
    };
    return Dados;
}());
exports.Dados = Dados;
