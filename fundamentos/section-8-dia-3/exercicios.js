const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  const formatedBookNames = () => {
    return books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}` );
}

 // console.log(formatedBookNames());
function nameAndAge (array) {
  return array.map((element) => (
    {
      author: element.author.name,
      age: element.releaseYear - element.author.birthYear
    }
    ))
    .sort((a,b) => a.age - b.age);
}
// console.log(nameAndAge(books));

function fantasyOrScienceFiction(arrayFiction) {
  return arrayFiction.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
}

// console.log(fantasyOrScienceFiction(books))

function oldBooksOrdered(arrayBooks) {
  return arrayBooks.filter((element) => 2022 - element.releaseYear > 60)
  .sort((a,b) => a.releaseYear-b.releaseYear);
}
// console.log(oldBooksOrdered(books))

function fantasyOrScieceFictionAuthors(arrayOrdem) {
  return arrayOrdem.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
  .map((e) => e.author.name)
  .sort();
}
// console.log(fantasyOrScieceFictionAuthors(books))

function oldBookd(arrayLivros) {
  return arrayLivros.filter((element) => 2022 - element.releaseYear > 60)
  .map((e) => e.name);
}
// console.log(oldBookd(books));

function authorWith3DotsOnName(livros) {
  return livros.filter((element) => element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.')
  .map((e) => e.name);
}
console.log(authorWith3DotsOnName(books))