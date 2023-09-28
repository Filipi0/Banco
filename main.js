const prompt = require('prompt-sync')();

const Cliente = require('./Cliente.js');
const ContaBancaria = require('./ContaBancaria.js');

console.log("\nBem-Vindo ao Banco Virtual!\n");

let nome = prompt("Digite o nome do cliente: ")
let cfp = Number(prompt('Digite o CPF do cliente: '))
let email = prompt("Digite o email do cliente: ")

const cliente = new Cliente(nome , cfp , email);
console.log('\nCliente registrado com sucesso: \n');

const contaCorrente = new ContaBancaria('001' , 0);
const contaPoupanca = new ContaBancaria('002' , 0);

cliente.registrarContaCorrente(contaCorrente)
cliente.registrarContaPoupanca(contaPoupanca)

console.log('Saldo da conta Corrente: ', contaCorrente.consultarSaldo());
console.log('Saldo da conta poupança: ', contaPoupanca.consultarSaldo());

function depositar(conta, valor) {
    if (valor > 0) {
      conta.realizarDeposito(valor);
    } else {
      console.log('Valor de depósito inválido.');
    }
  }

function exibirMenu() {
    console.log('\nESCOLHA SUA OPERAÇÂO');
    console.log('1. Realizar Depósito na conta corrente');
    console.log('2. Realizar Saque da conta corrente');
    console.log('3. Realizar depósito na conta poupança');
    console.log('4. Realizar saque na conta poupança');
    console.log('5. Consultar saldo da conta corrente');
    console.log('6. Consultar saldo da conta poupança');
    console.log('7. Sair');
  
    const escolha = prompt('Escolha sua opção: ')
  
    switch (escolha) {
      case '1':
        const valorDeposito = parseFloat(prompt("Digite o valor do depósito: "))
        depositar(contaCorrente, valorDeposito);
        console.log('\nDepósito realizado com sucesso.\n');
        exibirMenu()
        break;
  
      case '2':
        let valorSaqueCorrente = parseFloat(prompt('Digite o valor do saque: '))
        contaCorrente.realizarSaque(valorSaqueCorrente)
        console.log('\nSaque realizado com sucesso.\n');
        exibirMenu()
        break;
  
      case '3':
        let valorDepositoPoupanca = parseFloat(prompt('Digite o valor do depósito na conta poupança: '))
        depositar(contaPoupanca,valorDepositoPoupanca)
        console.log('\nSaque da Conta Poupança realizado com sucesso.\n');
        exibirMenu();
        break;
  
      case '4':
        let valorSaquePoupanca = parseFloat(prompt('Digite o valor do saque na conta poupança: '))
        contaCorrente.realizarSaque(valorSaquePoupanca)
        console.log('Saque realizado com sucesso.\n');
        exibirMenu()
        break;
  
      case '5':
        console.log('Saldo da conta corrente:',contaCorrente.consultarSaldo());
        exibirMenu()
        break;

      case '6':
        console.log('Saldo da conta poupança:',contaPoupanca.consultarSaldo());
        exibirMenu()
        break;

      case '7':
        console.log('Saindo...');  
        break;

      default:
        console.log('Opção inválida!');  
        exibirMenu()
    }
  }

exibirMenu();