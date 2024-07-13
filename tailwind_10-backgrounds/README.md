# Tipografia

## Exibição de background

* Podemos controlar como a imagem de background se comporta;
* A classe bg-x pode ser utilizada para isso;
* Esta classe controla a propriedade background-attachment;
* Temos as opções de fixed, local e scroll;

```bash
Clases utilizadas na exibição do background:
bg-local
bg-fixed
bg-scroll

```

## Cor de background e opacity

* Podemos controlar a cor de background com bg-*;
* Onde * é a cor que vamos inserir;
* A opacidade bg-opacity-* controla a opacidade do background;
* Onde * é a intensidade da opacidade do elemento de background;

```bash
    <div class="h-10 bg-green-900 bg-opacity-0">Está totalmente transparente</div>
    <div class="h-10 bg-green-900 bg-opacity-25">Está com 25% de opacidade</div>
    <div class="h-10 bg-green-900 bg-opacity-75">Está com 75% de opacidade</div>
```

## Posição e repetição

* Com bg-* podemos também controlar a posição;
* Onde * é a posição que queremos inserir, como top, left e bottom;
* Com bg-repeat podemos controlar a forma de repetição da imagem de fundo;
* Podemos também controlar o eixo da repetição;

### Posição:

```bash
    <div class="h-48 overflow-auto bg-center" style="background-image: url(img/bg_cidade.jpg);">
    </div>

    <div class="h-48 overflow-auto bg-right-bottom" style="background-image: url(img/bg_cidade.jpg);">
    </div>

    <div class="h-48 overflow-auto bg-top" style="background-image: url(img/bg_cidade.jpg);">
    </div>

```

### Repetição:

```bash
    <div class="h-48 overflow-auto bg-center bg-no-repeat" style="background-image: url(img/tailwind.png);">
    </div>

    <div class="h-48 overflow-auto bg-center bg-repeat-y bg-local" style="background-image: url(img/tailwind.png);">
    </div>
```

## Tamanho do background

* Podemos controlar o tamanho do background com bg-*;
* Onde * é o tamanho que o background vai representar;
* Temos valores como auto e cover;

* Cover:
```bash
    <div class="h-48 overflow-auto bg-cover bg-center" style="background-image: url(img/bg_cidade.jpg);">
    </div>
```

* Auto:
```bash
    <div class="h-48 overflow-auto bg-auto" style="background-image: url(img/bg_cidade.jpg);">
    </div>
```

* Contain:
```bash
    <div class="h-48 overflow-auto bg-contain bg-center" style="background-image: url(img/bg_cidade.jpg);">
    </div>
```

## Gradients

* Podemos fazer gradients com a classe de background image;
* A classe é bg-gradient-*, onde podemos criar um degradê;

```bash
    <div class="h-48 bg-gradient-to-tr from-gray-700 to-red-400">
    </div>

    <br />

    <div class="h-48 bg-gradient-to-b from-blue-500 via-green-600 to-yellow-400">
    </div>
```

## Imagem de background

* Podemos também definir uma imagem de background no arquivo de configuração;
* E inserir esta imagem via classe;

```bash
tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cidade': 'url(../img/bg_cidade.jpg)',
        'tailwind': 'url(../img/tailwind.png)'
      })
    },
  },
  plugins: [],
}

```
```bash
index.html:

    <div class="bg-cidade h-screen overflow-auto bg-cover bg-center">
    </div>

    <br />
    <br />

    <div class="bg-tailwind h-screen overflow-auto bg-center bg-no-repeat">
    </div>

```

<hr>

### Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:

- _Curso: Tailwind CSS do básico ao avançado + Projetos_
- _Hora de Codar - Escola de programação - Matheus Battisti_
