# 05 - Customização do Tailwind

## Como customizar o Tailwind
* Vamos adicionar as customizações no arquivo tailwind.config.js;
* Lá temos algumas seções:
* theme: estilos para o nosso projeto;
* extend: extensão das nossas classes do projeto;
* plugins: adicionar plugins de Tailwind externos;
* prefix: adiciona um prefixo as classes do Tailwind;

```bash
tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

## Customizando o tema
* A chave que iremos alterar é a theme;
* Aqui vamos inserir regras que são parecidas com as do Tailwind, gerando o efeito de estender o framework;
* Se colocarmos regras com o mesmo nome, iremos gerar um override, ou seja, substituição.

```bash
tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    colors: {
      black: '#010101',
      red: '#A83246'
    },
    extend: {},
  },
  plugins: [],
}

```

```bash 
index.html:

    <h1 class="text-black">Texto em preto!</h1>
    <h1 class="text-red">Texto em vermelho!</h1>
```

## Definindo breakpoints
* Na chave screens de theme, podemos customizar o breakpoint;
* Podemos adicionar novos, apenas criando nomenclaturas diferentes, como por exemplo: 'tablet': '640px';
* Ou também colocar breakpoints para max-width, que é o contrário do que o Tailwind nos dá.

```bash
tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
      screens: {
        'tablet': '640px',
        'cel': {'max': '400px'}
      },
    extend: {},
  },
  plugins: [],
}
```

```bash
index.html:

    <h1 class="text-black text-2xl tablet:text-5xl tablet:text-red-600">Texto 01</h1>
    <h1 class="text-red-900 text-2xl tablet:text-xs tablet:text-blue-900 ">Texto 02</h1>
    <h1 class="text-blue-600 text-xl cel:text-orange-600 ">Testando max-width</h1>
```

## Adicionando cores e estendendo
* Na chave colors de theme, podemos adicionar novas cores, o que é muito normal para projetos com design mais avançado;
* O padrão é nomedacor: hexadecimal;
* Assim, após o build teremos acesso a nova cor;
* Podemos também criar uma estrutura de objeto, para simular uma paleta de cores.

```bash
tailwind.config.js:

/** @type {import('tailwindcss').Config} */

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      }
    },
  },
  plugins: [],
}

```

```bash
index.html:

    <h1 class="text-new-blue text-2xl">Cor personalizada</h1>
    <p class="text-3xl text-gray-900">Texto cinza custom</p>
```

## Alterando o espaçamento
* Na chave spacing, podemos alterar o espaçamento do projeto;
* Podemos definir nossos próprios;
* Ou utilizar o extend para adicionar mais espaçamentos no padrão do Tailwind por rem, por exemplo;

```bash
tailwind.config.js:

/** @type {import('tailwindcss').Config} */

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      },
      spacing: {
        '50': '20rem'
      }
    },
  },
  plugins: [],
}
```

```bash
index.html:

<p class="text-3xl text-gray-900 p-10 m-50 h-50">Texto cinza custom</p>
```

<hr>

### Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:

- _Curso: Tailwind CSS do básico ao avançado + Projetos_
- _Hora de Codar - Escola de programação - Matheus Battisti_
