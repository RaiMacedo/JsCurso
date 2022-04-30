class Nave{
    static get desaceleracao(){
        return 0.17
    }

    constructor(nome, tripulantes){
        this.nome = nome
        this.tripulantes = tripulantes
        this.velocidade = 0
    }

    acelerar(aceleracao){
        this.velocidade += (aceleracao * (1 - Nave.desaceleracao))
    }
}

class NaveBatalha extends Nave{
    constructor(nome, tripulantes, qtdArmas){
        super(nome,tripulantes)
        this.qtdArmas = qtdArmas
    }
}

class NaveTrasnporte extends Nave{
    constructor(nome, tripulantes, lugares){
        super(nome,tripulantes)
        this.lugares = lugares
    }
}