import { tragamonedas } from "./tragamonedas";
const vrandom = require("vrandom");
var azar1 = require('azar');
var azar2 = require('azar');
var azar3 = require('azar');
var azar4 = require('azar');
var azar5 = require('azar');

export class JugadorExperto extends tragamonedas{
    private jugada:number;
    constructor(){
        super();
        this.apuesta=0;
        this.pozoAcumulado=2600;
        this.probabilidad=(1/15)*100;
        this.jugada=0;
    }

    obtenerApuesta():number{
        return this.apuesta;
    }
    
    public ingresarApuesta(){
        let readlineSync = require('readline-sync');
            console.log('\n'+'\n'+' ** ingrese apueta ** '+'\n');
            this.apuesta=Number(readlineSync.question());
    }    
    obtenerProbabilidad():number{
        return this.probabilidad;
    }
      
    public  InicioJuego():void{ 
        let acumulado:number=this.pozoAcumulado +this.apuesta;        
        let readlineSync = require('readline-sync');
        let valor = this.obtenerApuesta();
        console.log('\n'+'** ingrese apuesta **** '+'\n');
        this.apuesta=Number(readlineSync.question());
        if(valor>500){            
            console.log("intenta juagar el modo principiante");
            console.log('\n'+'** ingrese apuesta **** '+'\n');
            this.apuesta=Number(readlineSync.question());
        }else{
            console.log("Nivel Experto");            
            console.log("empezemos, el pozo acummulado es de: "+this.pozoAcumulado);
            console.log("probabilidad de ganar: " + this.probabilidad +"%" );                               
                console.log(azar1.dice(3));
                console.log(azar2.dice(3));
                console.log(azar3.dice(3));
                console.log(azar4.dice(3));
                console.log(azar5.dice(3));
            if(azar1===azar2===azar3===azar4===azar5){
                console.log("Ganaste!");
                console.log('\n'+'desea volver a jugar?  1-NO || 2-SI'+'\n');
                this.apuesta=Number(readlineSync.question());
                if(this.apuesta==2){
                    this.InicioJuego(); 
                    this.pozoAcumulado=this.pozoAcumulado+acumulado;                   
                }                
           }else{
                let readlineSync = require('readline-sync');                                
                console.log('\n'+"Perdiste!  total del pozo acumulado: "+acumulado+'\n');
                console.log('\n'+'desea volver a jugar?  1-NO || 2-SI'+'\n');
                this.apuesta=Number(readlineSync.question());
                if(this.apuesta==2){
                    this.InicioJuego(); 
                    this.pozoAcumulado=this.pozoAcumulado+acumulado;                   
                }
            
           }         
        } 
    }
}


