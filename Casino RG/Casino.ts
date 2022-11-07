import { Juego1 } from "./Juego1";
import { Juego2 } from "./Juego2";
import { JugadorPrincipiante } from "./Principiante";
import { JugadorExperto } from "./experto";
var fs = require('fs');

 export class Casino{
   
   private pTragamonedas:JugadorPrincipiante;
   private eTragamonedas:JugadorExperto;
   private cJuego1:Juego1;
   private cJuego2:Juego2; 
    

    constructor(){
        this.pTragamonedas=new JugadorPrincipiante(100,2,1);
        this.eTragamonedas=new JugadorExperto(100,2,1,5);
        this.cJuego1=new Juego1();
        this.cJuego2=new Juego2();
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
    public modificarArchivo(nombre:string, texto:string):void{
        this.manipular(nombre,texto);
    }
    public leerArchivo(path:string):string{
        let txtFile:string = fs.readFileSync(path,'utf-8');
        return txtFile;
    }

    public OpcionJuego(){
        let readlineSync=require('readline-sync');
            let ingresar:number=1;
            let opcion:number=1;
        if(ingresar==1){
            console.log('\n'+'\n'+' **** Elija el juego que quiere jugar **** '+'\n'+'\n');
            opcion=Number(readlineSync.question('1- experto'+'\n'+'2- principiante'+'\n'+'3- juego 1 '+'\n'+'4-juego 2'+'\n'+'0-salir'+'\n'));
            if(opcion==1){                
                console.log(this.eTragamonedas.InicioJuego());
            }else if(opcion==2){
                console.log(this.pTragamonedas.InicioJuego());
            }else if(opcion==3){
                console.log(" juegos 1")
            }else if(opcion==4){
                console.log(" juegos 2")
            }else if(opcion==0){
                ingresar = readlineSync.question("¿Desea salir del casino? 1-NO || 2-SI \n");
        }
            }
              
        }
    }
 