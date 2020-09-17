const listaDeMercado = [
  {
    nome: "Maçã",
    comprado: true,
    valor: 4.64,
  },
  {
    nome: "Chamyto",
    comprado: false,
    valor: 6.99,
  },
  {
    nome: "Nutella",
    comprado: false,
    valor: 23.9,
  },
  {
    nome: "Sorvete",
    comprado: true,
    valor: 12.99,
  },
  {
    nome: "Suco",
    comprado: false,
    valor: 6.99,
  },
];

const totalLista = 0;

const somaLista = listaDeMercado.reduce(
  (acc, valorLista) => acc + valorLista.valor,
  totalLista
);

console.log(somaLista.toFixed(2));
