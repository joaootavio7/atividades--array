/*7- Faça um programa para calcular n! (Fatorial de
    n), sendo que o valor inteiro de n é fornecido pelo
    usuário. utilize laço de repetição for.*/

    let teclado = require(`prompt-sync`)();
    let numero = parseInt(teclado("digite o valor de número:"))
    let fatorial = 1
    
    for (let i = 1; i <= numero; i++) {
      fatorial = fatorial * i
    }
    
    console.log(numero + "! =", fatorial)