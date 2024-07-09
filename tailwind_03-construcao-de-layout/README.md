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

## Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458