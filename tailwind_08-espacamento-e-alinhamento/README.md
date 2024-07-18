# Espaçamento e Alinhamento no Tailwind

## Alterando o espaçamento (justify)

* Utilizando a regra justify-* podemos controlar o espaçamento;
* O valor start, deixa os itens no começo;
* E end no fim;
* Podemos também centralizar com center;
* Obs: as regras de justify-* trabalham no eixo x.

### justify-end:
```bash
    <div class="flex p2 bg-red-300 justify-end">
        <div class="bg-red-600 p-4 m-4">1</div>
        <div class="bg-red-600 p-4 m-4">2</div>
        <div class="bg-red-600 p-4 m-4">3</div>
        <div class="bg-red-600 p-4 m-4">4</div>
    </div>
```
    
### justify-center:
```bash
    <div class="flex p2 bg-blue-300 justify-center">
        <div class="bg-blue-600 p-4 m-4">1</div>
        <div class="bg-blue-600 p-4 m-4">2</div>
        <div class="bg-blue-600 p-4 m-4">3</div>
        <div class="bg-blue-600 p-4 m-4">4</div>
    </div>
```

### justify-between:
```bash
    <div class="flex p2 bg-green-300 justify-between">
        <div class="bg-green-600 p-4 m-4">1</div>
        <div class="bg-green-600 p-4 m-4">2</div>
        <div class="bg-green-600 p-4 m-4">3</div>
        <div class="bg-green-600 p-4 m-4">4</div>
    </div>
```

### justify-arround:
```bash
    <div class="flex p2 bg-purple-300 justify-around">
        <div class="bg-purple-600 p-4 m-4">1</div>
        <div class="bg-purple-600 p-4 m-4">2</div>
        <div class="bg-purple-600 p-4 m-4">3</div>
        <div class="bg-purple-600 p-4 m-4">4</div>
    </div>
```

## Alinhamento de conteúdo (content)

* Utilizando o content-* podemos alinhar o conteúdo no eixo y;
* Com center, por exemplo, podemos deixar os elementos centralizados, em linhas;
* E com end, no fim do container.

### content-center:
```bash
    <div class="bg-yellow-300 h-40 flex flex-wrap content-center">
        <div class="bg-yellow-600 h-10 p-2 mx-4">1</div>
        <div class="bg-yellow-600 h-10 p-2 mx-4">2</div>
        <div class="bg-yellow-600 h-10 p-2 mx-4">3</div>
    </div>
```

### content-end:
```bash
    <div class="bg-red-300 h-40 flex flex-wrap content-end">
        <div class="bg-red-600 h-10 p-2 mx-4">1</div>
        <div class="bg-red-600 h-10 p-2 mx-4">2</div>
        <div class="bg-red-600 h-10 p-2 mx-4">3</div>
    </div>
```

### content-between:
```bash
    <div class="bg-orange-300 h-40 flex flex-wrap content-between">
        <div class="bg-orange-600 h-10 p-2 w-1/3">1</div>
        <div class="bg-orange-600 h-10 p-2 w-1/3">2</div>
        <div class="bg-orange-600 h-10 p-2 w-1/3">3</div>
        <div class="bg-orange-600 h-10 p-2 w-1/3">4</div>
        <div class="bg-orange-600 h-10 p-2 w-1/3">5</div>
        <div class="bg-orange-600 h-10 p-2 w-1/3">6</div>
    </div>
```

### content-around:
```bash
    <div class="bg-purple-300 h-40 flex flex-wrap content-around">
        <div class="bg-purple-600 h-10 p-2 w-1/3">1</div>
        <div class="bg-purple-600 h-10 p-2 w-1/3">2</div>
        <div class="bg-purple-600 h-10 p-2 w-1/3">3</div>
        <div class="bg-purple-600 h-10 p-2 w-1/3">4</div>
        <div class="bg-purple-600 h-10 p-2 w-1/3">5</div>
        <div class="bg-purple-600 h-10 p-2 w-1/3">6</div>
    </div>
```
## Alinhamento de itens (items)

* Utilizando items-* controlamos como os itens são dispostos ao longo do container;
* Podemos centralizar com center;
* Ou alongar do começo ao fim, com stretch.

### items-start:
```bash
    <div class="bg-green-400 flex h-40 items-start">
        <div class="bg-green-700 m-2 p-2">1</div>
        <div class="bg-green-700 m-2 p-2">2</div>
        <div class="bg-green-700 m-2 p-2">3</div>
    </div>
```

### items-stretch:
```bash
    <div class="bg-blue-400 flex h-40 items-stretch">
        <div class="bg-blue-700 m-2 p-2">1</div>
        <div class="bg-blue-700 m-2 p-2">2</div>
        <div class="bg-blue-700 m-2 p-2">3</div>
    </div>
```

### items-center:
```bash
    <div class="bg-red-400 flex h-40 items-center">
        <div class="bg-red-700 m-2 p-2">1</div>
        <div class="bg-red-700 m-2 p-2">2</div>
        <div class="bg-red-700 m-2 p-2">3</div>
    </div>
```

### items-end:
```bash
    <div class="bg-yellow-400 flex h-40 items-end">
        <div class="bg-yellow-700 m-2 p-2">1</div>
        <div class="bg-yellow-700 m-2 p-2">2</div>
        <div class="bg-yellow-700 m-2 p-2">3</div>
    </div>
```

### Alinhamento e espaçamento (grid)

* Classe utilizada para grid;
* Utilizando place-content-* podemos controlar o espaçamento e alinhamento com a mesma regra;
* Utilizamos os valores semelhantes das regras anteriores, como: start, end e center.

### place-content-start:
```bash
    <div class="bg-blue-300 grid grid-cols-3 h-40 place-content-start">
        <div class="bg-blue-600 m-2 p-2">1</div>
        <div class="bg-blue-600 m-2 p-2">2</div>
        <div class="bg-blue-600 m-2 p-2">3</div>
        <div class="bg-blue-600 m-2 p-2">4</div>
        <div class="bg-blue-600 m-2 p-2">5</div>
        <div class="bg-blue-600 m-2 p-2">6</div>
    </div>
```

### place-content-end:
```bash
    <div class="bg-green-300 grid grid-cols-3 h-40 place-content-end">
        <div class="bg-green-600 m-2 p-2">1</div>
        <div class="bg-green-600 m-2 p-2">2</div>
        <div class="bg-green-600 m-2 p-2">3</div>
        <div class="bg-green-600 m-2 p-2">4</div>
        <div class="bg-green-600 m-2 p-2">5</div>
        <div class="bg-green-600 m-2 p-2">6</div>
    </div>
```

### place-content-center:
```bash
    <div class="bg-red-300 grid grid-cols-3 h-40 place-content-center">
        <div class="bg-red-600 m-2 p-2">1</div>
        <div class="bg-red-600 m-2 p-2">2</div>
        <div class="bg-red-600 m-2 p-2">3</div>
        <div class="bg-red-600 m-2 p-2">4</div>
        <div class="bg-red-600 m-2 p-2">5</div>
        <div class="bg-red-600 m-2 p-2">6</div>
    </div>
```

### place-content-between:
```bash
    <div class="bg-blue-300 grid grid-cols-3 h-48 place-content-between">
        <div class="bg-blue-600 m-2 p-2">1</div>
        <div class="bg-blue-600 m-2 p-2">2</div>
        <div class="bg-blue-600 m-2 p-2">3</div>
        <div class="bg-blue-600 m-2 p-2">4</div>
        <div class="bg-blue-600 m-2 p-2">5</div>
        <div class="bg-blue-600 m-2 p-2">6</div>
        <div class="bg-blue-600 m-2 p-2">7</div>
        <div class="bg-blue-600 m-2 p-2">8</div>
        <div class="bg-blue-600 m-2 p-2">9</div>
    </div>
```

### place-content-around:
```bash
    <div class="bg-green-300 grid grid-cols-3 h-48 place-content-around">
        <div class="bg-green-600 m-2 p-2">1</div>
        <div class="bg-green-600 m-2 p-2">2</div>
        <div class="bg-green-600 m-2 p-2">3</div>
        <div class="bg-green-600 m-2 p-2">4</div>
        <div class="bg-green-600 m-2 p-2">5</div>
        <div class="bg-green-600 m-2 p-2">6</div>
        <div class="bg-green-600 m-2 p-2">7</div>
        <div class="bg-green-600 m-2 p-2">8</div>
        <div class="bg-green-600 m-2 p-2">9</div>
    </div>
```

## Alinhamento e espaçamento de itens (grid)

* Classe utilizada para grid;
* Podemos controlar o alinhamento e espaçamento ao mesmo tempo dos itens com place-items-*;
* Os valores também são semelhantes: start, end, stretch e center;

### place-items-start:
```bash
    <div class="bg-pink-300 grid grid-cols-3 h-48 place-items-start">
        <div class="bg-pink-600 m-2 p-2">Testando</div>
        <div class="bg-pink-600 m-2 p-2">2</div>
        <div class="bg-pink-600 m-2 p-2">3</div>
        <div class="bg-pink-600 m-2 p-2">4</div>
        <div class="bg-pink-600 m-2 p-2">5</div>
        <div class="bg-pink-600 m-2 p-2">6</div>
    </div>
```

### place-items-end:
```bash
    <div class="bg-blue-300 grid grid-cols-3 h-48 place-items-end">
        <div class="bg-blue-600 m-2 p-2">1</div>
        <div class="bg-blue-600 m-2 p-2">2</div>
        <div class="bg-blue-600 m-2 p-2">3</div>
        <div class="bg-blue-600 m-2 p-2">4</div>
        <div class="bg-blue-600 m-2 p-2">5</div>
        <div class="bg-blue-600 m-2 p-2">6</div>
    </div>
```

### place-items-center:
```bash
    <div class="bg-orange-300 grid grid-cols-3 h-48 place-items-center">
        <div class="bg-orange-600 m-2 p-2">1</div>
        <div class="bg-orange-600 m-2 p-2">2</div>
        <div class="bg-orange-600 m-2 p-2">3</div>
        <div class="bg-orange-600 m-2 p-2">4</div>
        <div class="bg-orange-600 m-2 p-2">5</div>
        <div class="bg-orange-600 m-2 p-2">6</div>
    </div>
```

## Padding

* Podemos adicionar padding de uma maneira muito simples no Tailwind, a classe p-*, adiciona padding a todas as direções;
* E px-* ou py-* adiciona padding ao eixo x e ao eixo y, respectivamente;
* E para adicionar em uma direção específica podemos utilizar: pt, pr, pl e pb.

```bash
    <div class="bg-red-200 h-40 p-10">
        <span class="bg-red-800 p-4">Padding</span>
        <span class="bg-red-600 px-4">Padding X</span>
        <span class="bg-red-400 py-4">Padding y</span>
        <span class="bg-red-900 px-4 py-2 rounded text-white">Botão</span>
        <span class="bg-red-400 pl-4 pt-6 pr-8 pb-10">Padding custom</span>
    </div>
```

## Margin

* Podemos adicionar margem de uma maneira muito simples no Tailwind, a classe m-*, adiciona margem a todas as direções;
* E mx-* ou my-* adiciona margem ao eixo x e ao eixo y, respectivamente;
* E para adicionar em uma direção específica podemos utilizar: mt, mr, ml e mp.

```bash
<div class="w-20 h-10 bg-green-900 text-white text-center m-5">
    Margin
</div>
```

```bash    
    <div class="w-40 h-10 bg-red-900 text-white text-center mx-10 my-4">
        Margin X e Y
    </div>
```

```bash
    <div class="w-40 h-10 bg-blue-900 text-white text-center mx-auto">
        Margin auto
    </div>
```

```bash
    <div class="w-40 h-10 bg-pink-900 text-white text-center mt-10 ml-5 mb-8">
        Margin LTRB
    </div>
```

## Largura

* Podemos alterar a largura de um elemento com w-*;
* Também é possível alterar a min-width, a classe é min-w-*;
* E é claro a max-width, com: max-w-*;

```bash
    <div class="bg-red-700 text-white font-bold p-4 max-w-4xl">
        Max width
    </div>
```

```bash
    <div class="bg-blue-700 text-white font-bold p-4 w-40 min-w-full">
        Min width
    </div>
```

## Altura

* Podemos alterar a altura de um elemento com h-*;
* Também é possível alterar a min-height, a classe é min-h-*;
* E é claro a max-height, com: max-h-*;

```bash
    <div class="bg-orange-700 text-white font-bold p-4 h-20">
        Height
    </div>
```

```bash
    <div class="bg-purple-700 text-white font-bold p-4 h-40 min-h-screen">
        Min height
    </div>
```

```bash
    <div class="bg-green-700 text-white font-bold p-4 max-h-screen">
        Max height
    </div>
```

<hr>

### Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:

- _Tailwind CSS do básico ao avançado + Projetos_
- _Hora de Codar - Escola de programação - Matheus Battisti_
