
import { match } from "assert";
import { TragaMonedas } from "./tragamonedas";
let lcgRandom = require("lcg-random");
let opcion1=0;
let lineaJugada=0;




export class JugadorExperto extends TragaMonedas{
       
        private Jugada:number;

        constructor(pApuesta:number,pProbabilidad:number){
            super();
            
        }
       
        public InicioJuego(min:number, max:number){
            let readlineSync = require('readline-sync');
            console.log('\n'+'\n'+' **** ingrese apueta **** '+'\n'+'\n');
            opcion1=Number(readlineSync.question());
            if(opcion1<500){
                console.log("intenta juagar el modo principiante")
            }else{  
                let linea1=new Array(1);
                let linea2=new Array(1);
                let linea3=new Array(1);
                let linea4=new Array(1);
                let linea5=new Array(1); 
                let min = Math.ceil(1);
                let max = Math.floor(9);
                          
                console.log("empezemos: ");
                for(let i=0;i<=5;i++){
                    linea1[i]=Math.floor(Math.random() * (max - min + 1)) + min;
                    linea2[i]=Math.floor(Math.random() * (max - min + 1)) + min;
                    linea3[i]=Math.floor(Math.random() * (max - min + 1)) + min;
                    linea4[i]=Math.floor(Math.random() * (max - min + 1)) + min;
                    linea5[i]=Math.floor(Math.random() * (max - min + 1)) + min;                
                    console.log(linea1[i] + linea2 [i] +linea3[i]+linea4[i]+linea5[i]);
                }

                
               

            }
        
            
        
        
       
        }     

}
