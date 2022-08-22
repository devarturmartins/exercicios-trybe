let number = 5;
let asteriscos = '';

// 1 programa

// for(let linha = 1; linha <= number; linha+= 1 ){
//      for (let coluna = 1; coluna <= number; coluna+=1){
//             asteriscos+= '*';
//      } 
//      console.log(asteriscos); 
//      asteriscos = '';
//     }
   
// 2 programa

for(let linha = 1; linha <= number; linha+= 1 ){
    for (let coluna = 1; coluna <= number; coluna+=1){
         if(coluna == linha)  {
            asteriscos+= '*';}
    } 
    console.log(asteriscos); 
   
   }
