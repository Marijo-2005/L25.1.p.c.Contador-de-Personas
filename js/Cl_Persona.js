export default class Cl_Persona {
    constructor (nombre, sexo) {
        this._nombre = nombre;
        this._sexo = sexo;
    }

    set nombre(n){
        this._nombre = n;
    }

    get nombre (){
        return this._nombre;
    }

    set sexo (s) {
        this._sexo = s;
    }

    get sexo () {
        return this._sexo;
    }
}