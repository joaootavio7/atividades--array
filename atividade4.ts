/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade*/

let teclado = require(`prompt-sync`)();

let valorInverso: number [] = []
let meuArray: number[] = []
let x : number = 9;

for (let i = 0; i <= 9; i++) {
    meuArray[i] = parseInt(teclado(`Dígite o ${i + 1}º: `));
}

for (let z = 0; z < 10; z++) {
 valorInverso[x] = meuArray[z]
 x--;
}

console.log(`${valorInverso}`)