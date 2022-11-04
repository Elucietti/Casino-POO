import { Apuesta } from "./iApuesta";
import { TragaMonedas } from "./tragamonedas";

export class ApuestaMax extends TragaMonedas implements Apuesta{

    


    elegirApuesta(): void {
        throw new Error("Method not implemented.");
    }
    elegirProbabilidad(): void {
        throw new Error("Method not implemented.");
    } 

}