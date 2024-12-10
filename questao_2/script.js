// Questão 2 - Arrays II

// Passo 1: Criar um array vazio para a lista de compras
let listaCompras = [];

// Passo 2: Adicionar "Milk", "Bread" e "Apples" à lista
listaCompras.push("Milk", "Bread", "Apples");

// Passo 3: Substituir "Bread" por "Bananas" e "Eggs"
listaCompras[1] = "Bananas";
listaCompras.splice(2, 0, "Eggs"); // Adiciona "Eggs" após "Bananas"

// Passo 4: Remover o último item e mostrar o array no console
listaCompras.pop();
console.log("Lista de compras após remover o último item:", listaCompras);

// Passo 5: Após "Bananas", adicionar "Carrots" e "Lettuce"
listaCompras.splice(2, 0, "Carrots", "Lettuce");
console.log("Lista de compras após adicionar Carrots e Lettuce:", listaCompras);

// Passo 6: Criar uma nova lista contendo "Juice" e "Pop"
let novaLista = ["Juice", "Pop"];

// Passo 7: Combinar as duas listas
listaCompras = listaCompras.concat(novaLista);
console.log("Lista combinada:", listaCompras);

// Passo 8: Obter o último índice de "Pop" e enviá-lo para o console
let ultimoIndicePop = listaCompras.lastIndexOf("Pop");
console.log("Último índice de 'Pop':", ultimoIndicePop);
