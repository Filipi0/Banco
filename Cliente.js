class Cliente{
    constructor(nome , cfp , email){
     this.nome = nome
     this.cfp = cfp
     this.email = email
     this.contaCorrente = null
     this.contaPoupanca = null
    }

    registrarContaCorrente(contaCorrente){
        this.contaCorrente = contaCorrente
    }

    registrarContaPoupanca(contaPoupanca){
        this.contaPoupanca = contaPoupanca;
    }

}

module.exports = Cliente;

