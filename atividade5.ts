/* 5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.*/

let teclado = require (`prompt-sync`)();

let meuArray: number [] = []

for (let cont = 0; cont <= 9; cont++ ){
meuArray[cont] = parseInt(teclado(`Dígite o ${cont + 1}º: `));
}
console.log(meuArray)

