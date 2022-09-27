const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  //baseada no gabarito do exercicio
  
  function containsA(nomes) {
    // escreva seu código aqui
    let letrasA = 0;
    nomes.forEach((nome) => {
        const separaLetras = nome.split('');
        letrasA += separaLetras.reduce((acc, curr) => {
            if(curr === 'a' || curr === 'A') {
                return acc + 1;
            }
            return acc;
        }, 0);
    })
    return letrasA;
  }
  console.log(containsA(names))