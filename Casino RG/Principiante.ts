
const vrandom = require("vrandom")
import { TragaMonedas } from "./tragamonedas";
var fs = require('fs');
let opcion2= require('random-num');
let lineaJugada=0;

export class JugadorPrincipiante extends TragaMonedas{
       
        private Jugada2:number;
        private archivoEstadistica:string;
   

        constructor(pApuesta:number,pProbabilidad:number,pJugada2:number){
            super();
            this.Jugada2=pJugada2;
            this.pozo=2500;
        }
       
        public InicioJuego(){
            let readlineSync = require('readline-sync');
            console.log('\n'+'** ingrese apueta **** '+'\n');
            this.Jugada2=Number(readlineSync.question());
            if(this.Jugada2>500){
                console.log("intenta juagar el modo Experto");
            }else{  
                let linea1:number;
                let linea2:number;
                let linea3:number;
              
                
                         
                console.log("empezemos, el pozo acummulado es de: "+this.pozo);
                for(let i=0;i<3;i++){ 
                    linea1=vrandom.int(1, 5, false);
                    linea2=vrandom.int(1, 5, false);
                    linea3=vrandom.int(1, 5, false);
                                
                    console.log(linea1+linea2+linea3);
                    
                    

                }
                let acumulado:number=this.pozo+this.Jugada2;
                console.log('\n'+"total del pozo acumulado: "+acumulado+'\n');
                console.log('\n'+'desea volver a jugar?  1-NO || 2-SI'+'\n');
                this.Jugada2=Number(readlineSync.question());
                if(this.Jugada2==2){
                    this.InicioJuego()
                  this.Jugada2=this.pozo+this.Jugada2;
                }

          
                
              
            }
        
            
        
        
       
        }     

}