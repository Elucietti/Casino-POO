import { Juego2 } from "./Juego2";
import { JugadorPrincipiante } from "./Principiante";
import { JugadorExperto } from "./experto";
import { transferableAbortSignal } from "util";
import { Dados } from "./TirarDados";
var fs = require('fs');



 export class Casino{
   
   protected pTragamonedas:JugadorPrincipiante;
   protected eTragamonedas:JugadorExperto;
   protected cJuego1:Dados;
   protected cJuego2:Juego2; 
   public estadisticas:string;

    constructor(){
        this.pTragamonedas=new JugadorPrincipiante();
        this.eTragamonedas=new JugadorExperto();
        this.cJuego1=new Dados();
        this.cJuego2=new Juego2();
        this.estadisticas="";
    }
    
    public manipular(nombre:string,texto:string):void{
        fs.writeFile(nombre,texto, error =>{
            if (error){
                console.log('ERROR');
            }else{
                console.log('SE CREO EL ARCHIVO');
            }
        });
    }

    public obtenerEstadistica(){
        this.estadisticas="tragamonedas nivel principiante: \n"+this.pTragamonedas.estadistica+"\n"+"tragamonedas nivel experto: \n"+this.eTragamonedas.estadistica;
    }
    mostrarEstadisticas(){
        return this.estadisticas;
    }
    public modificarArchivo(nombre:string, texto:string):void{
        this.manipular(nombre,texto);
    }
    public leerArchivo(path:string):string{
        let txtFile:string = fs.readFileSync(path,'utf-8');
        return txtFile;
    }

    public OpcionJuego(){
        this.modificarArchivo("estadisticas.txt","");
        let readlineSync=require('readline-sync');
            let ingresar:number=1;
            let opcion:number=1;
        if(ingresar==1){
            console.log('\n'+'\n'+' **** Elija el juego que quiere jugar **** '+'\n'+'\n');
            opcion=Number(readlineSync.question('1- experto'+'\n'+'2- principiante'+'\n'+'3- Dados'+'\n'+'4-juego 2'+'\n'+'0-salir'+'\n'));
            if(opcion==1){                
                console.log(this.eTragamonedas.InicioJuego());
                this.eTragamonedas.mostrarEstadistica()
            }else if(opcion==2){
                console.log(this.pTragamonedas.InicioJuego());
            }else if(opcion==3){
                console.log(this.cJuego1.mostrarJugada());
            }else if(opcion==4){
                console.log(" juegos 2");
            }else if(opcion==0){
                ingresar = readlineSync.question("¿Desea salir del casino? 1-NO || 2-SI \n");
        }
            }
              
        }
    }
 