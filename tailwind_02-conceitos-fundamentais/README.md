## Conceitos fundamentais

### Tudo é classe

* Estilizamos o nosso projeto todo por meio de classes;
* Temos classes desde cor de fonte até pseudo seletores(hover);
* Podemos adicionar classe para determinados break points (responsivo);
* Podemos também criar nossas classes com base em classes;

Definindo o fundo do texto com a cor verde:
```bash
<h1 class="bg-green-500>Tudo são classes!</h1>
```

Definindo o fundo do texto com a cor verde e a cor do texto vermelho:
```bash
<h1 class="bg-green-500 text-red-300>Tudo são classes!</h1>
```

Definindo o comportamento de hover (passar o mouse por cima). O fundo será alterado para a cor vermelha e a cor do texto para verde:
```bash
<h1 class="bg-green-500 text-red-300 hover:bg-red-300 hover:text-green-500">Tudo são classes!</h1>
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

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458