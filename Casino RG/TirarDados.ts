import { Casino } from "./Casino";
var numDado1= require('azar');
var numDado2= require('azar');
let readlineSync = require('readline-sync');

export class Dados{
    public total:number;
    private dado1:number;
    private dado2:number;
    private apuesta:number;

    public constructor(){
        this.total=0;
        this.dado2=0;
        this.dado1=0;
        this.apuesta=0;
    }

    public obtenerDado1():number{
        return this.dado1;
    }
    public iniciarDado1(){
        numDado1.dice(6);
    }
    public obtenerDado2():number{
        return this.dado2;
    }
    public iniciarDado2(){
        numDado1.dice(6);
    }
    public mostrarJugada(){
      

    let readlineSync = require('readline-sync');
    console.log('\n'+'\n'+' ** ingrese apuesta ** '+'\n');
    this.apuesta=Number(readlineSync.question());
    if(this.apuesta>100){

            console.log("tire los dados"+'\n');                        
            console.log(numDado1.dice(6));
            console.log(numDado2.dice(6));
            this.total=(numDado1+numDado2);
                
            if(this.total==10){
                console.log("Ganaste!");
                console.log('\n'+'desea volver a jugar?  1-NO || 2-SI'+'\n');
                if(this.apuesta==2){
                    this.mostrarJugada(); 
                                       
                } else if(this.total>10){
                    console.log("Perdiste");
                    console.log('\n'+'desea volver a jugar?  1-NO || 2-SI'+'\n');
                    if(this.apuesta==2){
                        this.mostrarJugada(); 


                }               
    }

    }
}
}
}   
