const listaDeMercado = [
  {
    nome: "Maçã",
    comprado: true,
  },
  {
    nome: "Chamyto",
    comprado: false,
  },
  {
    nome: "Nutella",
    comprado: false,
  },
  {
    nome: "Sorvete",
    comprado: true,
  },
  {
    nome: "Suco",
    comprado: false,
  },
];

function itensComprados() {
  for (let i = 0; i < listaDeMercado.length; i++) {
    // console.log(listaDeMercado[i]);

    if (listaDeMercado[i].comprado === true) {
      console.log("Lista atualizada", listaDeMercado[i]);
    }
  }
}

itensComprados();
