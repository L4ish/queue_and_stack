import { Stack } from "./stack"
import recebe = require('readline-sync')

const pilha = new Stack<string>()

let continuar: boolean = true
let escolha: number
let nomeLivro: string


do {
    console.log('********************Biblioteca Cultural********************')
    console.log(' ') //cria um espaço horizontal
    console.log('1 - Adicionar Livro na pilha')
    console.log('2 - Listar todos os Livros da pilha')
    console.log('3 - Retira Livro da pilha')
    console.log('0 - Sair')
    console.log(' ')
    console.log('***********************************************************')

escolha = recebe.questionInt('Digite a opcao desejada: ')

switch (escolha) {
    case 1:
        nomeLivro = recebe.question('Insira o nome do Livro: ')
        pilha.push(nomeLivro)
        console.log(' ')
        console.log('Pilha:')
        pilha.printStack()
        console.log('Livro adicionado com sucesso!\n')
        break
    case 2:
        console.log('Lista de livros na pilha:')
        pilha.printStack()
        break
    case 3:
        pilha.pop()
        console.log('Pilha:')
        pilha.printStack()
        break
    case 0:
        continuar = false
        console.log('Gratidão por usar nosso serviço! Volte sempre ♥')
        break
    default:
        console.log('Opção inválida!')
        break
}

}while (continuar)