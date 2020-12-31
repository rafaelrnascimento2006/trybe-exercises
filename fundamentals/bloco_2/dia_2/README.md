# Agora a prática
## ⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com o código JavaScript, localizado dentro da sua pasta trybe-exercises , que você criou nas aulas anteriores.

Dessa vez, cada um deve fazer os exercícios em seu computador, ok? Vamos lá! 😋

1. Navegue até a raiz do projeto com o código em JavaScript ;

2. Verifique se não existe nada sem "commitar" utilizando git status ;
  * Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.

3. Crie uma nova branch com o nome javascript-changes e faça checkout nela;

4. No arquivo .js , na linha #3 , adicione o comentário: " Eu sou Tryber e... ";
  * Exemplo:
<!-- let pessoaEstudante = "euMesmo";
let hasbilidadesPessoaEstudante = 10;
//Eu sou Tryber e...
console.log("sucesso"); -->
  * Faça um `git add nome-do-arquivo.extensao`;
  * Agora um `git commit -m "Mensagem que você gostaria"`;
  * E por último um `git push -u origin javascript-changes`;
  * Abra um _Pull Request_ com uma descrição detalhada:
    * Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: _"Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..."_

5. Retorne para a branch principal, master , com o comando: git checkout master ;

6. Verifique que você está na branch master , com o comando: git branch ;

7. Crie uma nova branch javascript-updates a partir da master e faça checkout nela;

8. No mesmo arquivo .js que você modificou no passo 4 , também na linha #3 adicione o comentário: " Vou ter muito sucesso na programação! ";
  * Faça um git add nome-do-arquivo.extensao
  * Agora um git commit -m "Mensagem que você gostaria"
  * e por último um git push -u origin javascript-updates
  * Abra um Pull Request com uma descrição amigável.

9. No Slack , procure pelo canal "code-review-*" relativo à sua turma, e avise que você chegou a este ponto. O próximo passo será realizar o Code Review (CR) do projeto de outras pessoa estudante. Entre em pelo menos um Pull Request e deixe alguns comentários para seus colegas;

10. Agora, faça o merge das branches javascript-changes e javascript-updates na branch master , através do Pull Request :
  * Primeiro, vá até a página do primeiro Pull Request (branch javascript-changes ) e faça o merge clicando no botão verde "Merge pull request" ;
  * Agora, vá até página do outro Pull Request (branch javascript-updates ) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta.
  * Você terá que resolver esse conflito antes de "mergear" o Pull Request . Clique no botão "Resolve conflicts" , escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>> , elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge" .
  * Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎
