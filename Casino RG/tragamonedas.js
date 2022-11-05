"use strict";
exports.__esModule = true;
exports.TragaMonedas = void 0;
var TragaMonedas = /** @class */ (function () {
    function TragaMonedas(pModo, pPozo, pCantidadFichas) {
        this.ElegirModo = pModo;
        this.Pozo = pPozo;
        this.cantidadadFichas = pCantidadFichas;
    }
    TragaMonedas.prototype.getModo = function () {
        return this.ElegirModo;
    };
    TragaMonedas.prototype.setModo = function (paModo) {
        this.ElegirModo = paModo;
    };
    TragaMonedas.prototype.getpozo = function () {
        return this.Pozo;
    };
    TragaMonedas.prototype.setPozo = function (paPozp) {
        var acumulador = 0;
        if (this.cantidadadFichas == 1) {
            acumulador = this.cantidadadFichas + 1;
            return acumulador;
        }
        else if (this.cantidadadFichas == 5) {
            acumulador = this.cantidadadFichas + 5;
            return acumulador;
        }
    };
    return TragaMonedas;
}());
exports.TragaMonedas = TragaMonedas;
