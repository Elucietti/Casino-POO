import { tragamonedas } from "./tragamonedas";
const vrandom = require("vrandom");
var azar1 = require('azar');
var azar2 = require('azar');
var azar3 = require('azar');
var azar4 = require('azar');
var azar5 = require('azar');

export class JugadorPrincipiante extends tragamonedas{
    private jugada:number;
    constructor(){
        super();
        this.apuesta=0;
        this.pozoAcumulado=1000;
        this.probabilidad=(1/9)*100;
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
                
        let readlineSync = require('readline-sync');
        let valor = this.obtenerApuesta();
        console.log('\n'+'** ingrese apuesta **** '+'\n');
        this.apuesta=Number(readlineSync.question());
        if(valor>200){    
                  
            console.log("intenta jugar el modo experto");
            console.log('\n'+'** ingrese apuesta **** '+'\n');
            this.apuesta=Number(readlineSync.question());
        }else{
            let acumulado:number=this.pozoAcumulado +this.apuesta; 
            console.log("Nivel Principiante");            
            console.log("empezemos, el pozo acummulado es de: "+this.pozoAcumulado);
            console.log("probabilidad de ganar: " + this.probabilidad +"%" );                               
                console.log(azar1.dice(3));
                console.log(azar2.dice(3));
                console.log(azar3.dice(3));
            if(azar1==azar2&&azar2==azar3){
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


