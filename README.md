# Projeto App de Tarefas - Back-End
Esse repositório armazena o back-end de um app de tarefas. Ele foi feito com NodeJs e utilizou as bibliotecas:
- express
- esm
- cors
- bcrypt
- jsonwebtoken
- mongoose
## Diretórios
O código está armazenado dentro da pasta `/src`. Ela está subdividida em algumas pastas:
- `/controller`: contém os códigos que fazem o controle das requisições HTTP, tanto para os usuários quanto para as tarefas
- `/db`: contém o arquivo `connection.js` que faz a conexão com o banco de dados e a pasta `/models` que armazena os códigos de modelo das tarefas (`task.js`) e dos usuários (`user.js`)
- `/middleware`: contém o arquivo que lida com a autorização
- `/router`: contém o arquivo que lida com as rotas das requisições HTTP

Por último, o arquivo `index.js` é o arquivo principal do servidor. Nele que é criado o servidor usando o express.

## Funcionamento
Atualmente, o front-end ainda não está se comunicando com o back-end. Porém, o back-end está completamente funcional, tanto enviando quanto recebendo as informações necessárias. Para testá-lo pode-se utilizar softwares como `Insomnia` ou `Postman`.

Os testes foram feitos utilizando o `Insomnia` e foram criadas as seguintes requisições:
![Print das requisições do Insomnia](['/images/Insomnia.png'](https://raw.githubusercontent.com/Augusto-Ildefonso/Back-End-Projeto-Tarefas/refs/heads/master/images/Insomnia.png))
