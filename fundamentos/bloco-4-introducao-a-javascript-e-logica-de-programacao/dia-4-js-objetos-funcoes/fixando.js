// // 1 

// let player = {
//  name: 'Marta',
//  lastName: 'Silva',
//  age: 34,
//  medals: { golden: 2, silver: 3 },
//  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// }

// //2 
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

// // 3 e 4

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

// // 5 

// console.log('A jogador possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' de prata');

    // parte 2 do fixando 

// // 1 
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for(let i in names){
//     console.log('Olá ' + names[i]);
//   }

// 2 

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let index in car){
    console.log(index + ': ' + car[index]); 
  }
