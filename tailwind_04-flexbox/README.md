# 04 - Flexbox com Tailwind

## Flex direction
* Podemos inserir o flexbox em um elemento ocm a classe flex;
* E controlar a direção dele com: flex-row e flex-col;
* Onde flex-row é para linhas;
* E flex-col para colunas;
* Obs: Lembrando que o container de elementos deve receber a classe flex;

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
* O wrap é a propriedade que controla como os itens se adaptarão ao container;
* Com flex-no-wrap os itens tendem a ficar na mesma linha;
* Com o flex-wrap os itens vão se encaixando em linhas abaixo, conforme o tamanho do container.

```bash
```


<hr>

### Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458

### Referências:

- _Curso: Tailwind CSS do básico ao avançado + Projetos_
- _Hora de Codar - Escola de programação - Matheus Battisti_
