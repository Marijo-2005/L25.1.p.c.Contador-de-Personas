export default class Cl_Conatdor {
    constructor (){
        this.cntPersonas = 0;
        this.cntHombres = 0;
        this.cntMujeres = 0;

    }

    procesarPersona (personas) {
        
        this.cntPersonas++;
        if(personas.sexo == "M"){ 
            this.cntHombres++;
        } else{
            this.cntMujeres++;
}
}
     cantidadPersonas () {
        return this.cntPersonas;

}

    cantidadH (){
        return this.cntHombres;
    }

    cantidadM(){
        return this.cntMujeres;
    }
}