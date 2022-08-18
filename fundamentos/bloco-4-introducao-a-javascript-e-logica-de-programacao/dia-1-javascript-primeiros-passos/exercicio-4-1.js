// // Programa 1 

// const a = 10;
// const b = 5; 

//     //adição

//     let soma = a + b; 
//     console.log(soma); 

//     //subtração

//     let subtracao = a - b; 
//     console.log(subtracao);

//     //multiplicação 

//     let multiplicacao = a * b; 
//     console.log(multiplicacao);

//     //divisão 

//     let divisao = a / b;
//     console.log(divisao); 

//     //módulo
    
//     let modulo = a % b;
//     console.log(modulo);

// // Programa 2 

//     const c = 20;
//     const d = 10;
//     let comparacao; 
    
//     if(c>d){
//         console.log(c);
//     }
//     else {
//         console.log(d);
//     }

// // Programa 3 
//     const number1 = 3;
//     const number2 = 6;
//     const number3 = 1;
     
//     if(number1>number2 && number1>number3){
//         console.log(number1);
//     }
    
//     else if (number2>number1 && number2>number3){
//         console.log (number2);
//     }
//     else {
//         console.log(number3);
//     }

// // Programa 4 

//     let valor; 

//     if (valor>0){
//         console.log('positive');
//     }
//     else if (valor<0){
//         console.log('negative');
//     }
//     else {
//         console.log('zero');
//     }


// // Programa 5 

//     let ang1 = 60;
//     let ang2 = 70;
//     let ang3 = 60; 
//     let soma = ang1 + ang2 + ang3;

//     if(soma == 180){
//         console.log('true'); 
//     }
//     else if(soma < 180){
//         console.log('false') ;
//     }
//     else {
//         console.log('Erro');
//     }

// // Programa 6 

//     let pecaXadrez = 'QUEEN'; 
//     switch(pecaXadrez .toLowerCase()){
//         case 'bishop':
//         console.log('Diagonals');
//         break;

//         case 'king':
//         console.log('Uma casa em qualquer direção');
//         break;

//         case 'queen': 
//         console.log('Qauntas casas que quiser em qualquer direção');
//         break;
//     }

// // Programa 7 

//     let notaAluno = -4; 

//     if(notaAluno >=90 && notaAluno<=100){
//         console.log('A');
//     }
//     else if(notaAluno >=80 && notaAluno<90){
//         console.log('B');
//     }
//     else if(notaAluno >=70 && notaAluno<80){
//         console.log('C');
//     }
//     else if(notaAluno >=60 && notaAluno<70){
//         console.log('D');
//     }
//     else if(notaAluno >=50 && notaAluno<60){
//         console.log('E');
//     }
//     else if(notaAluno >=0 && notaAluno<50){
//         console.log('F');
//     }
//     else {
//         console.log('Erro')
//     }

// // Programa 8 
//     const numero1 = 1;
//     const numero2 = 1;
//     const numero3 = 1;

//     if(numero1%2 == 0 || numero2%2 ==0 || numero3%2 ===0) {
//         console.log('True');
//     }
//     else{
//         console.log('False');
//     }

// // Programa 9 
// const numer1 = 3;
// const numer2 = 2;
// const numer3 = 2;

// if(numer1%2 !== 0 || numer2%2 !==0 || numer3%2 !==0) {
//     console.log('True');
// }
// else{
//     console.log('False');
// }

// // Programa 10 

//     const custoProduto = 5;
//     const valorVenda = 10; 
//     let valorCustoTotal = custoProduto*1.2;
//     let lucro = valorVenda - valorCustoTotal; 
//     let lucroTotal = 1000*lucro; 
//     if(custoProduto < 0) {
//         console.log('Erro');
//     }
//     else if (valorVenda<0){
//         console.log('erro');
//     }
//     else {
//         console.log(lucroTotal);
//     }
     
// Programa 11 

    let salBruto = 3000; 
    let salComInss;
    let IR;
    let salLiquido; 

    if(salBruto <= 1556.94){ 
        salComInss = salBruto*0.92;
    }
    else if(salBruto>=1556.95 && salBruto<=2594.92){
        salComInss = salBruto*0.91; 
    }
    else if(salBruto>=2594.93 && salBruto<=5189.82){
        salComInss = salBruto*0.89; 
    }
    else{
        salComInss = salBruto - 570.88;
    }

    if(salComInss <= 1903.98){
        IR = salComInss;
    }
    else if(salComInss>=1903.99 && salComInss<=2826.65){
        IR = salComInss*0.075 - 142.80;
    }
    else if(salComInss>=2826.66 && salComInss<=3751.05){
        IR = salComInss*0.15 - 352.8;
    }
    else if(salComInss>=3751.06 && salComInss<=4664.68){
        IR = salComInss*0.225 - 636.13;
    }
    else{
        IR = salComInss*0.275 - 869.36;
    }
    salLiquido = salComInss - IR;
    console.log(salLiquido);