# 04 - Grid com Tailwind

## Grid colunas
* Com o grid podemos criar uma estrutura muito fácil de página;
* A classe grid-cols-x define o número de colunas em uma grid;
* Onde x é o número de colunas desejadas;
* Obs: a classe pai precisa conter a classe grid; 

Grid com 4 colunas: 
```bash
     <div class="grid bg-red-200 grid-cols-4">
        <div class="bg-red-600">1</div>
        <div class="bg-red-500">2</div>
        <div class="bg-red-400">3</div>
        <div class="bg-red-300">4</div>
    </div>
```

Grid com 2 colunas:
```bash
    <div class="grid bg-green-200 grid-cols-2">
        <div class="bg-green-600">1</div>
        <div class="bg-green-500">2</div>
    </div>
```

## Tamanho das colunas
* Com a col-span-x podemos controlar o tamanho da coluna;
* Onde x é o tamanho, baseado no número de colunas definido na classe pai;
* Lembrando que essa classe vai nos elementos filhos do container de grid;

```bash
    <div class="grid grid-cols-4 m-2">
        <div class="col-span-4 bg-blue-700">
            Barra de navegação
        </div>
        <div class="col-span-1 bg-green-700">
            <p>Barra lateral esquerda</p>
        </div>
        <div class="col-span-2 bg-green-300">
            <p>Conteúdo</p>
        </div>
        <div class="col-span-1 bg-green-700">
            <p>Barra lateral direita</p>
        </div>
        <div class="col-span-4 bg-blue-700">
            Rodapé
        </div>
    </div>
```

## Quantidade de rows
* Podemos também especificar a quantidade de rows que um grid possui;
* A classe para este fim é: grid-rows-x;
* Onde x é o número de linhas que o container possuirá;

```bash
    <div class="grid grid-rows-3 grid-flow-col m-4">
        <div class="bg-green-400">1</div>
        <div class="bg-green-600">2</div>
        <div class="bg-green-400">3</div>
        <div class="bg-green-600">4</div>
        <div class="bg-green-400">5</div>
        <div class="bg-green-600">6</div>
        <div class="bg-green-400">7</div>
        <div class="bg-green-600">8</div>
        <div class="bg-green-400">9</div>
    </div>
```

## Espaço entre colunas e linhas (gap)
* Podemos controlar o espaçamento das colunas e linhas com gap;
* Inserimos a classe gap-x, no container principal;
* Onde x é o tamanho do espaçamento;
* É possível também mudar o espaçamento pelo eixo x ou y;

```bash
    <div class="grid grid-cols-3 m-4 gap-2">
        <div class="bg-blue-400">1</div>
        <div class="bg-blue-600">2</div>
        <div class="bg-blue-400">3</div>
        <div class="bg-blue-600">4</div>
        <div class="bg-blue-400">5</div>
        <div class="bg-blue-600">6</div>
        <div class="bg-blue-400">7</div>
        <div class="bg-blue-600">8</div>
        <div class="bg-blue-400">9</div>
    </div>
```

<hr>

### Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:

- _Curso: Tailwind CSS do básico ao avançado + Projetos_
- _Hora de Codar - Escola de programação - Matheus Battisti_
