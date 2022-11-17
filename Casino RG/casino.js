"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Juego2_1 = require("./Juego2");
var Principiante_1 = require("./Principiante");
var experto_1 = require("./experto");
var TirarDados_1 = require("./TirarDados");
var fs = require('fs');
var Casino = /** @class */ (function () {
    function Casino() {
        this.pTragamonedas = new Principiante_1.JugadorPrincipiante();
        this.eTragamonedas = new experto_1.JugadorExperto();
        this.cJuego1 = new TirarDados_1.Dados();
        this.cJuego2 = new Juego2_1.Juego2();
        this.estadisticas = "";
    }
    Casino.prototype.manipular = function (nombre, texto) {
        fs.writeFile(nombre, texto, function (error) {
            if (error) {
                console.log('ERROR');
            }
            else {
                console.log('SE CREO EL ARCHIVO');
            }
        });
    };
    Casino.prototype.obtenerEstadistica = function () {
        this.estadisticas = "tragamonedas nivel principiante: \n" + this.pTragamonedas.estadistica + "\n" + "tragamonedas nivel experto: \n" + this.eTragamonedas.estadistica;
    };
    Casino.prototype.mostrarEstadisticas = function () {
        return this.estadisticas;
    };
    Casino.prototype.modificarArchivo = function (nombre, texto) {
        this.manipular(nombre, texto);
    };
    Casino.prototype.leerArchivo = function (path) {
        var txtFile = fs.readFileSync(path, 'utf-8');
        return txtFile;
    };
    Casino.prototype.OpcionJuego = function () {
        this.modificarArchivo("estadisticas.txt", "");
        var readlineSync = require('readline-sync');
        var ingresar = 1;
        var opcion = 1;
        if (ingresar == 1) {
            console.log('\n' + '\n' + ' **** Elija el juego que quiere jugar **** ' + '\n' + '\n');
            opcion = Number(readlineSync.question('1- experto' + '\n' + '2- principiante' + '\n' + '3- Dados' + '\n' + '4-juego 2' + '\n' + '0-salir' + '\n'));
            if (opcion == 1) {
                console.log(this.eTragamonedas.InicioJuego());
                this.eTragamonedas.mostrarEstadistica();
            }
            else if (opcion == 2) {
                console.log(this.pTragamonedas.InicioJuego());
            }
            else if (opcion == 3) {
                console.log(this.cJuego1.mostrarJugada());
            }
            else if (opcion == 4) {
                console.log(" juegos 2");
            }
            else if (opcion == 0) {
                ingresar = readlineSync.question("¿Desea salir del casino? 1-NO || 2-SI \n");
            }
        }
    };
    return Casino;
}());
exports.Casino = Casino;
