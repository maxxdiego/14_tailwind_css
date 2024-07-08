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

* Crie a pasta "src" na raiz do projeto e em seguida poderá criar os arquivos "index.html" e "input.css":

```bash
src/index.html
src/input.css
```

* Adicione as diretivas @tailwind para cada uma das camadas do Tailwind ao seu arquivo CSS principal:

```bash
src/input.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
```

* Inicie o processo de build do Tailwind CLI. Execute o comando abaixo para escanear seus arquivos de template em busca de classes e construir seu CSS:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

* Comece a usar o Tailwind no seu HTML. Adicione seu arquivo CSS compilado ao <head> e comece a usar as classes utilitárias do Tailwind para estilizar seu conteúdo.

```bash
src/index.html:

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./output.css" rel="stylesheet">
    <title>Tailwind Setup</title>
</head>

<body>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
</body>

</html>
```

* Para conferir, você pode executar o arquivo "index.html" no Live Server e verificar as alterações.

* Instalando o Live Server:
```bash
npm install -g live-server
```

* Executando o Live Server:
```bash
live-server src/
```

* Acessar a página através do endereço fornecido pelo Live Server:

```bash
Serving "src/" at http://127.0.0.1:51283
```

* Você também pode seguir as instruções na documentação em: www.tailwindcss.com/docs/installation

### Instalação do Tailwind Intellisense

* O Intellisense é uma extensão excelente para o Tailwind;
* Ajuda na criação dos projetos, auto completando as classes do framework;
* Em alguns casos mostra um preview do que utilizaremos;

No VS Code procure pela extensão e realize sua instação:
```bash
Tailwind CSS IntelliSense
```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458