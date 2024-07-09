# 03 - Construção de layout

## Container
* Um elemento que possui uma determinada largura e que serve para incluir elementos dentro;
* O container com as classes de responsividade (sm, md, lg, xl) podemos setar uma max-width no elemento;
* Podemos aplicar com a classe container;

No exemplo abaixo, criaremos um container com cor de background verde e quando atingir md, ficará azul:

```bash
    <div class="container bg-green-300 p-4 my-4 text-green-900 md:bg-blue-300 md:text-blue-900">
        Texto do container
    </div>
```

## Box sizing

* Com as classes border-box e border-content podemos declarar como o elemento calcula o seu tamanho total;
* Com border-box teremos uma largura total somada com padding e borders;
* Com box-content teremos uma largura respeitando a medida e com padding e border passando a largura determinada;

```bash
    <div class="container bg-purple-700 border-2 border-purple-900 m-4 border-box p-10">
        <p>Border box</p>
    </div>

    <div class="container bg-teal-400 border-2 border-teal-900 m-4 box-content p-10">
        <p>Border content</p>
    </div>
```

## Display
* Colocando classes com valores da propriedade display, como block, podemos controlar este comportamento do elemento;
* Então um elemento com classe inline-block, se comporta igual a um elemento com estilo de display: inline-block;
* As outras propriedades seguem a mesma lógica;

<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:
* _Curso: Tailwind CSS do básico ao avançado + Projetos_
* _Hora de Codar - Escola de programação - Matheus Battisti_