import { Queue } from "./queue"
import recebe = require('readline-sync')

const fila = new Queue<string>()

let escolha: number
let continuar: boolean = true
let nomeCliente: string 

do {
    console.log('**********************************************')
    console.log(' ') //cria um espaço horizontal
    console.log('1 - Adicionar Cliente na fila')
    console.log('2 - Listar todos os Cliente da fila')
    console.log('3 - Retira o Cliente da fila')
    console.log('0 - Sair')
    console.log(' ')
    console.log('**********************************************')

    escolha = recebe.questionInt('Digite uma opcao: ') 

    switch (escolha) {
        case 1:
            nomeCliente = recebe.question('Insira o nome do cliente: ')
            fila.enqueue(nomeCliente)
            console.log(' ')
            console.log('Fila:')
            fila.printQueue()
            console.log('Cliente adicionado com êxito.\n')
            break
        case 2:
            console.log('Lista de clientes na fila:')
            fila.printQueue()
            break
        case 3:
            fila.dequeue()
            console.log('Fila:')
            fila.printQueue()
            break
        case 0:
            continuar = false
            console.log('Obrigada por usar nosso serviço ♥')
            break 
        default: 
            console.log('Opção inválida.')
            break
    }

} while (continuar)

