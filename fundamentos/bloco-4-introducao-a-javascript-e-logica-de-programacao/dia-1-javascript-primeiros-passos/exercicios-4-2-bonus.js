let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


function bubbleSort (itens){
    for ( let i = 0; i < itens.length; i += 1){
        for ( let i2 = 0; i2 < (itens.length - i - 1); i2 +=1 ) {
            if(itens[i2] > itens[i2+1]){
                let aux = numbers[i2];
                itens[i2] = numbers[i2 + 1];
                numbers[i2 +1] = aux;
            }
        }
    }
}
    bubbleSort(numbers);
    console.log(numbers);