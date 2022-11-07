import { TragaMonedas } from "./tragamonedas";
let lineaJugada=0;
const vrandom = require("vrandom")
export class JugadorExperto extends TragaMonedas{       
        private Jugada:number;
        
        constructor(pApuesta:number,pProbabilidad:number,pJugada:number,pPozo:number){
            super();
            this.Jugada=pJugada;
            this.pozo=5000
        }
       
       
        public InicioJuego():void{
            let readlineSync = require('readline-sync');
            console.log('\n'+'\n'+' ** ingrese apueta ** '+'\n');
            this.Jugada=Number(readlineSync.question());
            if(this.Jugada<500){
                console.log("intenta juagar el modo principiante")
            }else{  
                let linea1:number;
                let linea2:number;
                let linea3:number;
                let linea4:number;
                let linea5:number;
                
                         
                console.log("empezemos, el pozo acummulado es de: "+this.pozo);
                for(let i=0;i<5;i++){ 
                    linea1=vrandom.int(1, 5, false);
                    linea2=vrandom.int(1, 5, false);
                    linea3=vrandom.int(1, 5, false);
                    linea4=vrandom.int(1, 5, false);
                    linea5=vrandom.int(1, , false);              
                    console.log(linea1+linea2+linea3+linea4+linea5);
                    
                    

                }
                let acumulado:number=this.pozo+this.Jugada;
                console.log('\n'+"total del pozo acumulado: "+acumulado+'\n');
                console.log('\n'+'desea volver a jugar?  1-NO || 2-SI'+'\n');
                this.Jugada=Number(readlineSync.question());
                if(this.Jugada==2){
                    this.InicioJuego()
                  this.Jugada=this.pozo+this.Jugada;

          
                
              
            }
        
            
        
        
       
        }     

}
}
