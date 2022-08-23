// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   // 1q 

// //   console.log('Bem vinda, ' + info.personagem);

//   info.recorrente = 'Sim'; 
 
// // 2, 3 e 4q
// //   for (let i in info){
// //     // console.log(i + ': ' + info[i]);
// //   }

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O ultimo MacPatinhas',
//     recorrente: 'Sim'
// };
// for(let i in info){
//     if(i === 'recorrente' && info[i] === 'Sim' && info2[i] === 'Sim'){
//         console.log('Ambos recorrentes')
//     }
//     else {
//         console.log(info[i] + ' e ' + info2[i]);
//     }
// }



// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log('O livro favorito de ' + leitor.nome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

//   leitor.livrosFavoritos.push( {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   });

//   console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');


            // // FUNCOES

            // //1 

            // function verificaPalindrome(string) {
            //     let reverse = string.split('').reverse().join('');
            //     if (reverse === string) {
            //       return true;
            //     } else {
            //       return false;
            //     }
            //   }
              
            //   console.log(verificaPalindrome('arara')); //true
            //   console.log(verificaPalindrome('desenvolvimento')); //false

        //2 
    
        // function indiceDoMaior(numeros) {
        //     let indiceMaior = 0;
        //     for (let indice in numeros) {
        //       if (numeros[indiceMaior] < numeros[indice]) {
        //         indiceMaior = indice;
        //       }
        //     }
          
        //     return indiceMaior;
        //   }
          
        //   console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 


        // // 3 

        // function indiceDoMenor(numeros) {
        //     let indiceMenor = 0;
        //     for (let indice in numeros) {
        //       if (numeros[indiceMenor] > numeros[indice]) {
        //         indiceMenor = indice;
        //       }
        //     }
          
        //     return indiceMenor;
        //   }
          
        //   console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

        // 4

        // function maiorPalavra(palavras) {
        //     let maiorPalavra = palavras[0];
        //     for (let indice in palavras) {
        //       if (maiorPalavra.length < palavras[indice].length) {
        //         maiorPalavra = palavras[indice];
        //       }
        //     }
          
        //     return maiorPalavra;
        //   }
          
        //   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 

        // // 5

        // function maisRepetido(numeros) {
        //     let num = {};
          
        //     for (let index = 0; index < numeros.length; index += 1) {
        //       let valor = numeros[index];
        //       if (num[valor] === undefined) {
        //         num[valor] = 1;
        //       } else {
        //         num[valor] = num[valor] + 1;
        //       }
        //     }
          
        //     let contRepetido = 0;
        //     let contNumero = 0;
          
        //     for (let prop in num) {
        //       if (contRepetido < num[prop]) {
        //         contRepetido = num[prop];
        //         contNumero = prop;
        //       }
        //     }
          
        //     return contNumero;
        //   }
          
        //   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); 

        // // 6 

        // function somaTodosNumeros(numero) {
        //     let total = 0;
          
        //     for (let index = 1; index <= numero; index += 1) {
        //       total = total + index;
        //     }
        //     return total;
        //   }
          
        //   console.log(somaTodosNumeros(5)); //15


        // 7 


        function verificaFimPalavra(palavra, fimPalavra) {
            let inversoPalavra = palavra.split('').reverse().join('');
            let inversoFimPalavra = fimPalavra.split('').reverse().join('');
            let result;
          
            for (let index = 0; index < inversoFimPalavra.length; index += 1) {
              if (inversoPalavra[index] !== inversoFimPalavra[index]) {
                result = false;
                break; // O "break" serve para encerrar o loop.
              } else {
                result = true;
              }
            }
            
            return result;
          }
          
          console.log(verificaFimPalavra('trybe', 'be')); 
          console.log(verificaFimPalavra('joaofernando', 'fernan')); 