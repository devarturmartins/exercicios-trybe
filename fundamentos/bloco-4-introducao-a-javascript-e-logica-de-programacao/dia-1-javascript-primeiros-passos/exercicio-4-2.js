// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // exercicio 1 

// for (let i = 0; i < numbers.length; i+= 1){
//     console.log(numbers[i]);
// }


// // exercicio 2 

// let soma = 0;
// for (let i=0; i<numbers.length; i+= 1){
// //    console.log(numbers[i]);
//    soma = soma + numbers[i];
// }
// console.log(soma); 

// //  exercicio 3 e 4

// let mediaAritmetica = 0; 
// soma = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     soma = soma + numbers[i];
// }

// mediaAritmetica = soma / numbers.length; 
// console.log (mediaAritmetica);
// if (mediaAritmetica>20){
//     console.log ('Valor maior que 20');
// }
// else{
//     console.log('Valor menor ou igual a 20');
// }


// // exercicio 5 
// let maiorValor = numbers[0];
// for (let i = 0; i < numbers.length; i+=1){
//     if(numbers[i] > maiorValor){
//         maiorValor = numbers[i];
//     }
// }
//     console.log(maiorValor);

// // exercicio 6
// let cont = 0;
// for (let i = 0; i < numbers.length; i+=1){
//     if(numbers[i]%2 !== 0){
//         cont += 1;
//     }
    
// }
//     if (cont == 0){
//         console.log ('Nenhum valor impar encontrado');
//     }
// console.log('total de números impares = ' + cont);


// // exercicio 7 

// let menorValor = numbers[0];
// for(i=0;i<numbers.length;i+=1){
//     if(numbers[i]<menorValor){
//         menorValor = numbers[i];
//     }
// }
//  console.log(menorValor);


// exercicio 8

let array = [];
for(let i=1;i<=25;i+=1){
array.push(i);
}
console.log(array);


// exercicio 9 
let divisao = [];
for(let i=1;i<=array.length;i+=1){
divisao.push(i/2);
}
console.log(divisao);