# Tailwind CSS
![NPM](https://img.shields.io/npm/l/react)

# Descrição
:warning: Ainda em construção. :construction:

## Por que Tailwind?

* Foco em utility e não componentes;
* Pouco ou nenhum CSS para atingir resultados excelentes;
* Pouca sobreposição de CSS, ao contrário de frameworks;
* Foco em responsividade;
* Podemos criar componentes;
* Facilidade em customização;

## Propósitos do Tailwind

* Diminuir o tempo que passamos codificando CSS;
* Permitir ampla liberdade entre os componentes que criamos;
* Facilidade em estender e customizar;
* Acoplagem em diversos ambientes, com ou sem framework front-end;
* Dificuldade zero para começar com mobile first;

## Instalação Node

* O Tailwind não necessita do Node, porém facilita muito a instalação do mesmo;
* Caso você utilize o Tailwind com algum framework como React, isso ajudará;
* Podemos seguir as instruções do site: www.nodejs.org

## Instalação VS Code

* O VS Code é com certeza um dos editores mais utilizados atualmente;
* O VS Code facilita as tarefas com o terminal integrado e as suas extensões;
* Podemos seguir as instruções do site: code.visualstudio.com

## Instalando o Tailwind 3+

* Instale o tailwindcss via npm com o seguinte comando:
```bash
npm install -D tailwindcss
```
*O parâmetro -D no comando npm install -D tailwindcss é uma abreviação de --save-dev. Ele indica que o pacote tailwindcss deve ser instalado como uma dependência de desenvolvimento no seu projeto. Dependências de desenvolvimento são pacotes necessários apenas durante o desenvolvimento do projeto e não são necessárias em produção.*


* Crie o arquivo tailwind.config.js através do comando:
```bash
npx tailwindcss init
```

* Fazer as alterações no arquivo tailwind.config.js de acordo com seu projeto:

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
_content: ["./src/**/*.{html,js}"]: Esta configuração informa ao Tailwind CSS quais arquivos ele deve analisar para procurar classes CSS a serem incluídas na build final. No caso, ele está configurado para analisar todos os arquivos HTML e JS dentro da pasta src e suas subpastas._

* Podemos seguir as instruções na documentação em: www.tailwindcss.com/docs/installation






