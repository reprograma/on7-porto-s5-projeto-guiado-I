// Vamos criar um jogo que adivinha um número! O jogo irá gerar um número randômico, que ninguém sabe, somente a máquina.
// Com o número secreto gerado, o jogo irá perguntar ao jogador: Que número estou pensando? Se o jogador acertar, então a máquina diz: Parabéns, você acertou! Mas se o jogador errar, a máquina precisa dizer se o número digitado é maior ou menor que o número secreto.

// Vamos lá?

//// Minha receita de bolo:
// 1 - gerar um número aleatório entre 0 e 100;
// 2 - jogo deve perguntar a quem estiver jogando um número inteiro no intervalo de 0 a 100* e armazenar o valor recebido;
// 3 - comparar o número recebido por input com o número aleatório gerado previamente;
  // 3.1 - Se o número do input for menor que o número gerado, retornar: `Não foi desta vez! Tente um número maior, entre o ${input} e 100!`
  // 3.2 - Se o número do input for maior que o número gerado, retornar: `Não foi desta vez! Tente um número menor, entre o ${input} e 0!`
  // 3.3 - Se o número do input for igual ao número gerado, retornar a mensagem: `Parabéns, você acertou!`;
// *Se a pessoa acertar, mostra a mensagem e encerra o programa. 
// *Se errar, deve enviar a mensagem com a dica e em seguida solicitar o input novamente.
