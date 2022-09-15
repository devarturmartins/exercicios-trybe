let number = 4;
const fatorial = number => {
    let result = 1;
    for (let index = 2; index <= number; index += 1) {
        result = result * index;
    }
    return(result);
}

console.log(`Esse é o resultado do fatorial: ${fatorial(number)}`);
let string = 'Antônio foi ao banheiro e não sabemos o que aconteceu';
const maiorPalavra = string => {
    let arrayDaString = string.split(" ");
    let maxLength = 0;
    let result;
    for(let index = 0; index<arrayDaString.length; index += 1) {
        if(arrayDaString[index].length > maxLength) {
            maxLength = arrayDaString[index].length;
            result = arrayDaString;
        }
    }
    return result;
}
console.log(maiorPalavra(string));