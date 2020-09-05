# Exercício da Semana

## Instruções para entrega:

1. Entre no repositório da semana no site da reprograma

2. Clique no botão _fork_ (isso vai criar uma cópia do repositório na sua conta pessoal)
   > Nota: o fork permite que você tenha uma cópia do projeto que você deseja contribuir na sua conta pessoal, podendo mandar Pull Requests para o repositório original
3. Uma vez que você "forkou" o repositório, entre no seu github pessoal e acesse o repositório da semana

4. Clone o repositório do seu github localmente (pra você conseguir trabalhar no exercício na sua máquina)

   `git clone https://github.com/reprograma/on7-porto-s5-projeto-guiado-I.git`
   // ou
   `git clone git@github.com:reprograma/on7-porto-s5-projeto-guiado-I.git`

   > Nota: url é o endereço do repositório, você consegue copiar ele entrando no seu repositório e clicando no botão verde com o nome Code. Ele abrirá uma caixinha que permite você copiar a url do repositório

5. Pronto! Você já tem tudo que precisa pra começar a realizar seu exercício. Agora basta entrar na sua branch para começar a trabalhar:

   `git checkout -b seu-nome-aqui`

6. Depois de entrar na sua branch você pode fazer os exercícios nesta pastinha `Entrega` e ir adicionando e "commitando" localmente. Lembrando que os commandos para adicionar e "commitar":

   `git add nome-do-aquivo-que-você-deseja-adicionar.js` ou `git add .` (se quiser adicionar tudo)

   `git commit -m "Mensagem do commit"`

7. Quando você terminar o exercício basta subir as alterações locais para o seu repositório executando o comando:

   `git push origin nome-da-sua-branch`

   Pronto, o exercício está no seu repositório github. Ele estará na branch com o seu nome, abre aí e confere se tá tudo certinho.

8. Agora vamos mandar ela pra nossa profa maravilhosa! Entra na sua branch e clica no botão Pull Request, vai abrir uma janelinha pra você enviar uma mensagem para o PR.

   É importante aqui você conferir se o repositório base é o da reprograma, na branch com seu nome. Vai ficar algo assim no cabeçalho do PR:

   `base repository: reprograma/on6-xp-s3-logica-js base: nome-sobrenome(sua branch) <------ head repository: SeuRepo/on6-xp-s3-logica-js compare: nome-sobrenome(sua branch)`

   > Nota: é importante garantir isso pra que seu código vá para uma branch separada e não entre em conflito com os códigos das suas colegas

9. Preencha as informações do PR e confirme o envio clicando no botão Create pull request. Não precisa dar merge!
   Agora o seu exercício já foi entregue.

10. Agora relaxe!
