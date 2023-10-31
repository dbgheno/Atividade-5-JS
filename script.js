// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa vai parar quando for digitada a idade 999. No final, mostre quantos alunos existem na turma e qual é a média de idade do grupo.

let ages 
let count = 0
let agesSum = 0

while (ages!==999) {
    ages = Number(prompt(`1. Digite a idade de um integrante da turma: \n(após digitar a idade de todos integrantes, digite "999" para finalizar)`))
    count++;
    if (ages !==999) {
        agesSum += ages
    }
}
document.write(`1. O total de integrantes registrados foi de: ${count} e a média de todas as idades registradas é de ${agesSum}.<br><br>`)


// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salários pagos aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.

let menSalary = 0
let womenSalary = 0
let moreOne = true

while(moreOne) {
    const salary = Number(prompt(`2. Digite o salário de um funcionário: `))
    const sex = confirm(`2. Qual o sexo deste funcionário: \nClique em "OK" para Masculino e "Cancelar" para Feminino.`)
    if (sex) {
        menSalary += salary
    } else { 
        womenSalary += salary
    }
    moreOne = confirm(`2. Você deseja cadastrar mais alguém?`)
}
document.write(`2. O total de salários pagos aos homens somou a quantia de R$ ${menSalary.toFixed(2).replace(".",",")}; e o das mulheres, a quantia de R$ ${womenSalary.toFixed(2).replace(".",",")}.<br><br>`)



// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

const firstValue = Number(prompt(`3. Digite o primeiro valor de um intervalo: `))
const lastValue  = Number(prompt(`3. Digite o  último  valor de um intervalo: `))
const iValue     = Number(prompt(`3. Digite um valor a ser incrementado passo a passo do primeiro ao último valor do intervalo: `))

document.write(`3. Contagem: `)
for (let i = firstValue; i <= lastValue; i += iValue) { document.write(` ${i}, `) }
document.write(` acabou!<br><br>`)



// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

document.write(`4. Dia da Mulher!<br>`)
let another = true
while (another) {
    const name = prompt(`4. Digite o nome do cliente: `)
    const woman= confirm(`4. PROMOÇÃO DO DIA DA MULHER! \n\n O cliente é uma mulher?`)
    const cost = prompt(`4. Digite o valor da compra: `)
    if (woman) {
        document.write(`A cliente ${name} receberá 13% de desconto e o valor de sua compra ficará em R$ ${(cost * 0.87).toFixed(2).replace(".",",")}.<br>`)
    } else {
        document.write(`O cliente ${name} receberá 5%  de desconto e o valor de sua compra ficará em R$ ${(cost * 0.95).toFixed(2).replace(".",",")}.<br>`)
    }
    another = confirm(`4. Você deseja realizar um novo registro?`)
}
document.write(`<br>`)


// 5. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

const distancia = Number(prompt(`5. Digite a kilometragem que o passageiro irá percorrer: `))
const preco = distancia <= 200 ? distancia * 0.5 : distancia * 0.45
document.write(`5. O preço da passagem para se percorrer ${distancia} km é de R$ ${preco.toFixed(2).replace(".",",")}.<br><br>`)



// 6. Faça um programa que leia a largura e o comprimento de um terreno retangular, calculando e mostrando a sua área em m2. O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

const lenght = Number(prompt(`6. Digite o comprimento do terreno: `))
const width  = Number(prompt(`6. Digite a largura do terreno: `))
const classArea  = lenght*width < 100 ? "TERRENO POPULAR" : lenght*width <= 500 ? "TERRENO MASTER" : "TERRENO VIP"
document.write(`6. A área do terreno é de ${lenght*width} m² e ele se classifica como ${classArea}.<br><br>`)