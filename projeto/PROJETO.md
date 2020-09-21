# Projeto JavaScript

## Pokedex

Nós vamos construir uma Pokedex! Uma Pokedex é um tipo de "base de dados" responsável por guardar informações sobre pokemons. Para isso, vamos precisar:

### Registrar pokémons

- Listar no console uma tabela contendo os pokemons existentes na base

- Indicar se a operação é para 1. "registrar" ou 2. "treinar" um pokemon

- Selecionar a opção 1

- Receber via terminal as entradas de um pokemon encontrado a ser adicionado

- Perguntar o nivel do pokemon e receber um inteiro

- Perguntar o nome do pokemon e receber uma string

- Perguntar o tipo do pokemon e receber um array de strings

- Apresentar no console:
  - A tabela contendo os pokemons existentes e o pokemon recém adicionado
  - O pokémon recém adicionado precisa ter um ID que deve ser maior que o maior ID de pokemon cadastrado previamente

### Treinar pokémons

- Listar no console uma tabela contendo os pokemons existentes na base

- Indicar se a operação é para 1. "registrar" ou 2. "treinar" um pokemon

- Selecionar a opção 2

- Perguntar o ID do pokemon a ser treinado

- Se não for encontrado, mostrar uma mensagem de erro: "Pokemon não encontrado", e perguntar de novo

- Se for encontrado, perguntar a quantidade de níveis que será adicionado ao Pokémon

- Apresentar no console:
  - A tabela contendo os pokemons  existentes e o pokemon recém treinado

## Regras

O nível máximo de um pokemon é 100. Ou seja, se um pokemon tem nível 99 e você quer adicionar mais 20 níveis de treinamento, então esse pokemon terá um nível 100, e os outros 19 níveis serão ignorados. Exemplo:

pokemon: `{ id: 3, nome: 'Bulbasaur', nivel: 93 }`

No console:
```
$ Qual o ID do pokemon que deseja treinar?
> 3

$ Quantos níveis deseja adicionar?
> 13

$ ----------------------------
|  ID  |    Nome    |  Nível  |
|-----------------------------|
|  3   | Bulbasaur  |   100   |
 -----------------------------
```

### Sugestões de exercícios extras para praticar um pouco mais

Essas são somente sugestões de como continuar exercitando para melhorar seu projeto e suas habilidades.

- Usar sintaxe ES6.

- Colocar o nome das variáveis em inglês.

- Fazer o `commit` do código a cada etapa concluída.

- Fazer a ordenação do pokémon de maior nível pro de menor nível.

- Permitir apenas as opções 1 e 2 no console (registrar e treinar), e jogar um erro caso escolha outra não existente.

---
