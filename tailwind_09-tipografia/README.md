# Tipografia

## Tipos de fonte

* Podemos controlar o tipo de fonte do Tailwind com algumas classes:
* Sem serifa: font-sans;
* Com serifa: font-serif;
* Mono espaçada: font-mono;

```bash
    <p class="text-xl font-serif">Testando fonte serifada</p>
    <p class="text-xl font-sans">Testando fonte sem serifa</p>
    <p class="text-xl font-mono">Testando fonte monospace</p>
```

### Escolhendo uma fonte para o projeto

* Para outras fontes, podemos estender a propriedade fontFamily no arquivo tailwind.config.js;

```bash
tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Arial'
      }
    },
  },
  plugins: [],
}
```

```bash
index.html:

<p class="text-xl font-arial">Testando fonte Arial</p>
```

## Tamanho da fonte

* Podemos controlar o tamanho da fonte com text-*;
* Onde * é o tamanho da fonte desejada;
* O tamanho em Tailwind é inserido por valores como: sm, lg, xl;

```bash
    <p class="font-arial text-xs">Tamanho de fonte</p>
    <p class="font-arial text-lg">Tamanho de fonte</p>
    <p class="font-arial text-2xl">Tamanho de fonte</p>
    <p class="font-arial text-6xl">Tamanho de fonte</p>
```

### Personalizando tamanhos de fonte para o projeto

* Para outros tamanhos, podemos estender a propriedade fontSize no arquivo tailwind.config.js;

```bash
tailwind.config.js:

    /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Arial'
      },
      fontSize: {
        '12xl': '8rem'
      }
    },
  },
  plugins: [],
}
```

```bash
index.html:

<p class="font-arial text-12xl">Tamanho de fonte</p>

```

## Estilo e weight

* Com italic podemos deixar o texto em itálico;
* E com font-* podemos alterar o weight;
* Temos valores como: light, normal, bold e black;

```bash
    <p class="text-xl italic">Texto em itálico</p>
    <p class="text-xl font-hairline">Texto em weight 100</p>
    <p class="text-xl font-black">Texto em weight 900</p>
    <p class="text-xl font-bold">Texto em weight 700</p>
    <p class="text-xl font-semibold">Texto em weight 500</p>
```

## Letter spacing e line height

* Letter spacing é o espaçamento entre letras, podemos controlar com: tracking-*;
* Onde * é o valor que modifica o espaçamento;
* Já line height é o espaçamento entre linhas;
* Podemos controlar com: leading-*;
* Onde * é o valor de espaçamento;

```bash
    <p class="text-2xl tracking-tighter">Tracking: espaçamento entre letras  menor (tighter)</p>
    <p class="text-2xl">Tracking: espaçamento entre letras (normal)</p>
    <p class="text-2xl tracking-widest">Tracking: espaçamento entre letras maior (widest)</p>
    <br />

    <p class="text-2xl w-64 bg-yellow-300 leading-loose">Leading: testando espaçamento entre linhas (MAIOR). Mais textos para testar.</p>
    <br />

    <p class="text-2xl w-64 bg-yellow-500">Leading: testando espaçamento entre linhas (NORMAL). Mais textos para testar.</p>
    <br />

    <p class="text-2xl w-64 bg-yellow-300 leading-tight">Leading: testando espaçamento entre linhas (MENOR). Mais textos para testar.</p>
```

## List type e position

* Podemos controlar o tipo de lista com a classe: list-*;
* Onde * será o tipo da lista, por exemplo: disc;
* E a posição da lista também é controlada por list-*;
* Com os valores: inside ou outside;

<br />

* List type:

```bash
    <ul class="list-disc m-10">
        <li>Carro</li>
        <li>Barco</li>
        <li>Avião</li>
        <li>Navio</li>
    </ul>

    <ul class="list-decimal m-10">
        <li>Carro</li>
        <li>Barco</li>
        <li>Avião</li>
        <li>Navio</li>
    </ul>

    <ul class="list-none m-10">
        <li>Carro</li>
        <li>Barco</li>
        <li>Avião</li>
        <li>Navio</li>
    </ul>
```

* List position:

```bash
    <ul class="list-disc bg-red-300 m-10">
        <li>Carro</li>
        <li>Barco</li>
        <li>Avião</li>
        <li>Navio</li>
    </ul>

    <ul class="list-disc bg-red-300 m-10 list-inside">
        <li>Carro</li>
        <li>Barco</li>
        <li>Avião</li>
        <li>Navio</li>
    </ul>
```

## Ajustando o placeholder

* Podemos também modificar o placeholder, com placeholder-* inserimos a cor;
* Onde * é a cor que vamos inserir no elemento;
* E também é possível controlar a opacidade;
* A classe é placeholder-opacity-*;

```bash
    <div class="m-4">
        <input type="text" placeholder="Este é o placeholder" class="placeholder-red-900 placeholder-opacity-25">
        <input type="text" placeholder="Este é o placeholder" class="placeholder-blue-600 placeholder-opacity-100">
    </div>
```

## Alinhamento de texto

* Podemos alinhar o texto para esquerda, centro e direita com Tailwind;
* A classe é: text-*;
* Onde * podemos inserir valores como: left, right e center;

```bash

```

## Cor de texto

* Podemos alterar a cor do texto com text-*;
* Onde * é a cor que vamos inserir;
* Um detalhe para color é que temos também a shade da cor, que vai de 100 a 900;
* E é claro, podemos customizar completamente as cores;

```bash

```

## Decoration e transform

* Com decoration podemos adicionar alguns estilos a textos, como: underline e line trough;
* As classes são: underline e line-trough;
* Com transform podemos alterar a case do texto, ou seja, minúsculas e maiúsculas;
* Utilizamos classes como: lowercase e uppercase;

```bash

```

<hr>

### Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:

- _Curso: Tailwind CSS do básico ao avançado + Projetos_
- _Hora de Codar - Escola de programação - Matheus Battisti_
