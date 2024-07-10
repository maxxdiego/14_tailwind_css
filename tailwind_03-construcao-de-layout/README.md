# 03 - Construção de layout

## Container

- Um elemento que possui uma determinada largura e que serve para incluir elementos dentro;
- O container com as classes de responsividade (sm, md, lg, xl) podemos setar uma max-width no elemento;
- Podemos aplicar com a classe container.

No exemplo abaixo, criaremos um container com cor de background verde e quando atingir md, ficará azul:

```bash
    <div class="container bg-green-300 p-4 my-4 text-green-900 md:bg-blue-300 md:text-blue-900">
        Texto do container
    </div>
```

## Box sizing

- Com as classes border-box e border-content podemos declarar como o elemento calcula o seu tamanho total;
- Com border-box teremos uma largura total somada com padding e borders;
- Com box-content teremos uma largura respeitando a medida e com padding e border passando a largura determinada.

```bash
    <div class="container bg-purple-700 border-2 border-purple-900 m-4 border-box p-10">
        <p>Border box</p>
    </div>

    <div class="container bg-teal-400 border-2 border-teal-900 m-4 box-content p-10">
        <p>Border content</p>
    </div>
```

## Display

- Colocando classes com valores da propriedade display, como block, podemos controlar este comportamento do elemento;
- Então um elemento com classe inline-block, se comporta igual a um elemento com estilo de display: inline-block;
- As outras propriedades seguem a mesma lógica.

```bash
    <div class="container">
        <span class="block bg-red-300">SPAN por padrão não são elementos de bloco. Se tornaram pela classe.</span>
        <span class="block bg-red-300">SPAN por padrão não são elementos de bloco. Se tornaram pela classe.</span>

        <div class="inline-block bg-blue-500">DIV por padrão são elementos de bloco. Se tornaram inline-block pela
            classe.</div>
        <div class="inline-block bg-blue-500">DIV por padrão são elementos de bloco. Se tornaram inline-block pela
            classe.</div>

        <div class="hidden bg-green-900">
            Não estou aparecendo! Tenho a classe hidden.
        </div>
    </div>
```

## Floats e clear

- Podemos controlar a propriedade float do elemento com classes float-\*;
- Onde \* é o tipo de float que desejamos, por exemplo: right ou left;
- O clear segue o mesmo padrão, as classes tem o início de clear-\*;
- Onde \* pode ser both, por exemplo;
- Obs: após o Grid e Flexbox, o float vem sendo pouco utilizado nos layouts.

```bash
    <div class="bg-gray-500 float-right">Float right</div>
    <div class="bg-gray-700 float-left">Float left</div>
    <div class="clear-both"></div>
    <div class="bg-gray-500 float-right">Float right</div>
    <div class="bg-gray-700 float-left">Float left</div>
```

## Overflow

- O overflow é como controlamos quando o conteúdo de um elemento é muito grande para o mesmo;
- Podemos criar ou eliminar o scroll, por exemplo;
- Inserimos a classe overflow-_, onde _ é o valor da prorpeidade, como: none ou auto;
- Podemos controlar os eixos também com: overflow-y-\*

```bash
Overflow hidden:
    <div class="overflow-hidden h-16 m-6 bg-red-300">
        <p>Testando overflow hidden</p>
        <p>Testando overflow hidden</p>
        <p>Testando overflow hidden</p>
        <p>Testando overflow hidden</p>
        <p>Testando overflow hidden</p>
        <p>Testando overflow hidden</p>
    </div>
```

```bash
Overflow auto:
    <div class="overflow-auto h-16 m-6 bg-green-300">
        <p>Testando overflow auto</p>
        <p>Testando overflow auto</p>
        <p>Testando overflow auto</p>
        <p>Testando overflow auto</p>
        <p>Testando overflow auto</p>
        <p>Testando overflow auto</p>
    </div>
```

## Posições e direções

- Podemos controlar as posições dos elementos por classes também;
- Neste caso o próprio nome da classe já é o da posição;
- Exemplos: static, absolute, relative e etc;
- Estes valores seriam relativos a: position:absolute;
- As direções também podem ser adicionadas via classe, exemplo: top-2;
- Obs: no Tailwind os números sempre são transferidos para rem, podemos converter para pixels com: 1rem = 16px (valor default).

```bash
    <div class="relative bg-pink-500">
        Div relative
        <div class="absolute top-0 right-0 bg-pink-900">
            Div absolute
        </div>
    </div>
```

## Visibilidade

- Podemos alterar a propriedade visibility com duas classes;
- visible = visibility: visible;
- invisible = visibility: hidden;
- Utilizamos para exibir ou esconder elementos;
- É diferente do hidden pois seu espaço contendo margens por exemplo ainda é exibido.

```bash
    <div class="container bg-red-400 m-4 invisible">
        <p>Estou oculto!</p>
    </div>
    <div class="container bg-red-400 m-4 visible">
        <p>Estou aparecendo!</p>
    </div>
```

## Z-index

- Podemos controlar o z-index pelo Tailwind também;
- Esta propriedade controla a sobreposição de elementos na página;
- O valor a ser colocado na classe é z-*;
- Onde * é o número de indexação, como 10, 20 ou 30.

```bash
    <div class="container relative">
        <div class="bg-red-300 h-20 w-20 p-6 absolute z-10">Na frente</div>
        <div class="bg-red-600 h-20 w-20 p-6 absolute m-4">Atrás</div>
    </div>
```

<hr>

### Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:

- _Curso: Tailwind CSS do básico ao avançado + Projetos_
- _Hora de Codar - Escola de programação - Matheus Battisti_
