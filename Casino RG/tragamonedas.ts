export class TragaMonedas{
        protected ElegirModo:number;
        protected Pozo:number;
        protected cantidadadFichas:number;
        
    constructor(pModo:number,pPozo:number,pCantidadFichas:number){
        this.ElegirModo=pModo;
        this.Pozo=pPozo;
        this.cantidadadFichas=pCantidadFichas;
       
    }

    getModo():number{
        return this.ElegirModo;
    }
    
    setModo(paModo:number){
        this.ElegirModo=paModo;
    }

    getpozo():number{
        return this.Pozo;
    }

    setPozo(paPozp:number){
        let acumulador:number=0;
        if(this.cantidadadFichas==1){
            acumulador=this.cantidadadFichas + 1;
            return acumulador;
        
        }else if(this.cantidadadFichas==5){
            acumulador=this.cantidadadFichas + 5;
            return acumulador;
        }

    }


}