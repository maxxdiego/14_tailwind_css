## Conceitos fundamentais

### Tudo é classe

* Estilizamos o nosso projeto todo por meio de classes;
* Temos classes desde cor de fonte até pseudo seletores(hover);
* Podemos adicionar classe para determinados break points (responsivo);
* Podemos também criar nossas classes com base em classes;

Definindo o fundo do texto com a cor verde:
```bash
<h1 class="bg-blue-500>Tudo são classes!</h1>
```

Definindo o fundo do texto com a cor verde e a cor do texto vermelho:
```bash
<h1 class="bg-blue-500 text-red-300>Tudo são classes!</h1>
```

Definindo o comportamento de hover (passar o mouse por cima). O fundo será alterado para a cor vermelha e a cor do texto para verde:
```bash
<h1 class="bg-blue-500 text-red-300 hover:bg-red-300 hover:text-blue-500">Tudo são classes!</h1>
```

### Utility First

* A premissa do Tailwind é construir componentes complexos com um conjunto de utilitários;
* Ou seja, em vez de pegar um componente pronto ou codar muitas linhas de CSS, utilizamos um conjunto de classes;
* E desta maneira podemos criar diversas variações de componentes de forma simples;
* Ou componentes únicos para o projeto;

Criando botões personalizados através de um conjunto de classes:

```bash
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Botão</button>

    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Botão</button>

    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Botão</button>
```

### Responsivo - Mobile first

* Todas as classes podem ser aplicadas a um determinado breakpoint;
* Os que vem com o framework são: sm, md, lg e xl;
* Lembrando que o Tailwind é mobile first, ou seja, as classes são aplicadas para resoluções acima destes breakpoints;
* Então, não utilizamos nenhum breakpoint para atingir o mobile;

Vamos começar criando uma div que terá por padrão 4rem (16px) de largura (w-4) e 4rem de altura (h-4). Além disso, a div terá também uma margin de 4rem (m-4) e o fundo da cor verde (bg-green-400):

```bash
<div class="w-4 h-4 m-4 bg-green-400"></div>
```

Agora iremos adicionar um breakpoint com a classe "md" (medium) que terá "min-width:768px". Ao atingir esse breakpoint a div passará a ter: largura de 6rem (24px) (md:w-6) e altura de 6rem(md:h-6). Além disso, a div passará a ter o fundo da cor azul (md:bg-blue-400):

```bash
<div class="w-4 md:w-6 md:h-6 h-4 m-4 bg-green-400 md:bg-blue-400"></div>
```

Depois adicionaremos um breakpoint com a classe "lg" (large) que terá "min-width:1024px". Ao atingir esse breakpoint a div passará a ter: largura de 10rem (lg:w-10) e altura de 10rem(lg:h-10). Além disso, a div passará a ter o fundo da cor vermelha (lg:bg-red-400):

```bash
<div class="w-4 md:w-6 lg:w-10 md:h-6 lg:h-10 h-4 m-4 bg-green-400 md:bg-blue-400 lg:bg-red-400></div>
```

Por fim, adicionaremos um breakpoint com a classe "xl" (extra large) que terá "min-width:1280px". Ao atingir esse breakpoint a div passará a ter o fundo da cor cinza escuro (xl:bg-gray-900):

```bash
<div class="w-4 md:w-6 lg:w-10 md:h-6 lg:h-10 h-4 m-4 bg-green-400 md:bg-blue-400 lg:bg-red-400 xl:bg-gray-900"></div>
```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458