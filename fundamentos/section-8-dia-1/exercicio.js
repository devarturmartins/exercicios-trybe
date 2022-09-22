const object = (name) => {
    const email = name.toLowerCase().split(' ').join('_');
    const objeto = {
        nomeCompleto: name,
        email: `${email}@trybe.com`,
    }
    return objeto;
}

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiz Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employees;
}
console.log(newEmployees(object));

const verificaNumero = (numero, number) => numero === number; 
const result = (number, callback) => {
   const numero = Math.floor((Math.random() * 5) + 1);
   return callback(numero, number) ? 'Parabéns, voce ganhou' : 'Tente novamente'; 
}
console.log(result(2, verificaNumero));