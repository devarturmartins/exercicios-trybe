// //fatorial

// let number = 4; 
// for (let i = (number-1); i >= 1; i -= 1){ 
//     number = number * i;
// }
//     console.log (number);


// // inverter a ordem das letras

// let word = 'tryber';
// let aux = '';
// for (let i = (word.length - 1); i >= 0 ; i -= 1){
//     aux += word[i];
// }
// console.log(aux); 


// // retornar maior e menor palavra do array 

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menorString = array[0];
// let maiorString = array[0];

// for (let i = 0; i < array.length; i+=1){
//     if(menorString.length>array[i].length){
//         menorString = array[i];
//     }
// }
// console.log (menorString);

// for ( let i = 0; i<array.length; i+=1){
//     if(maiorString.length<array[i].length){
//         maiorString = array[i];
//     }
// }
// console.log(maiorString);

// exercicio 4 numero primo

// let armazenaPrimos = 0;
for(let numerador = 2; numerador<=50; numerador += 1){
    for( let divisor = 2; divisor <= 50; divisor += 1){
        if(numerador%divisor === 0 && numerador%2 === 1){
            if (numerador === divisor){
                console.log(numerador);
            }
        }
      
    }
    
}
