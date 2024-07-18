# 04 - Flexbox com Tailwind

## Flex direction

- Podemos inserir o flexbox em um elemento ocm a classe flex;
- E controlar a direção dele com: flex-row e flex-col;
- Onde flex-row é para linhas;
- E flex-col para colunas;
- Obs: Lembrando que o container de elementos deve receber a classe flex;

Flex row:

```bash
    <div class="flex flex-row bg-red-300">
        <div class="bg-red-600 p-6 m-2">1</div>
        <div class="bg-red-600 p-6 m-2">2</div>
        <div class="bg-red-600 p-6 m-2">3</div>
    </div>
```

Flex column:

```bash
    <div class="flex flex-row bg-red-300">
        <div class="bg-red-600 p-6 m-2">1</div>
        <div class="bg-red-600 p-6 m-2">2</div>
        <div class="bg-red-600 p-6 m-2">3</div>
    </div>
```

Flex row reverse:

```bash
    <div class="flex flex-row-reverse bg-green-300">
        <div class="bg-green-600 p-6 m-2">1</div>
        <div class="bg-green-600 p-6 m-2">2</div>
        <div class="bg-green-600 p-6 m-2">3</div>
    </div>
```

Flex column reverse:

```bash
    <div class="flex flex-col-reverse bg-pink-300">
        <div class="bg-pink-600 p-6 m-2">1</div>
        <div class="bg-pink-600 p-6 m-2">2</div>
        <div class="bg-pink-600 p-6 m-2">3</div>
    </div>
```

## Flex wrap

- O wrap é a propriedade que controla como os itens se adaptarão ao container;
- Com flex-no-wrap os itens tendem a ficar na mesma linha;
- Com o flex-wrap os itens vão se encaixando em linhas abaixo, conforme o tamanho do container.

```bash
    <div class="flex flex-wrap bg-red-100 w-60">
        <div class="bg-red-200 p-6 m-2">1</div>
        <div class="bg-red-300 p-6 m-2">2</div>
        <div class="bg-red-400 p-6 m-2">3</div>
        <div class="bg-red-500 p-6 m-2">4</div>
        <div class="bg-red-600 p-6 m-2">5</div>
        <div class="bg-red-700 p-6 m-2">6</div>
    </div>
```

## Flex

- Esta é a regra flex para o elemento, onde podemos controlar seu tamanho máximo e mínimo;
- Podemos inserir valores como flex-1 para flex: 1 1 0%;
- Ou flex-none para flex: none;

```bash
    <div class="container flex bg-green-200 p-8">
        <div class="flex-1 bg-green-800">1</div>
        <div class="flex-1 bg-green-600">2</div>
        <div class="flex-none bg-green-400">3</div>
    </div>
```

## Order

- Com order podemos controlar a ordem dos elementos;
- Inserimos a classe order-x;
- Onde x é igual ao valor da propriedade order;
- Exemplo: order-1 = order:1;

```bash
    <div class="flex flex-wrap bg-red-100">
        <div class="bg-purple-200 p-6 m-2 md:order-last">1</div>
        <div class="bg-purple-300 p-6 m-2 md:order-5">2</div>
        <div class="bg-purple-400 p-6 m-2 md:order-4">3</div>
        <div class="bg-purple-500 p-6 m-2 md:order-3">4</div>
        <div class="bg-purple-600 p-6 m-2 md:order-2">5</div>
        <div class="bg-purple-700 p-6 m-2 md:order-first">6</div>
    </div>
```

<hr>

### Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:

- _Tailwind CSS do básico ao avançado + Projetos_
- _Hora de Codar - Escola de programação - Matheus Battisti_
