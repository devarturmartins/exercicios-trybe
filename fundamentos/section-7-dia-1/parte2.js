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
            result = arrayDaString[index]
        }
    }
    return result;
}
console.log(maiorPalavra(string));

// exercicio 4

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    let resultado = frase.replace('x', nome);
    return resultado;

}
console.log(substituaX('Bebeto'));

const minhasSkills = func => {
    const skills = ['CSS', 'HTML', 'JavaScript'];
    let resultado = `${func} 
    Minhas trës principais habilidades sao: `
    skills.forEach((skill) => {
    resultado = `${resultado}
    - ${skill}`; });
    return resultado;
}

console.log(minhasSkills(substituaX('Bebeto')));