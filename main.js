// primeira variavel - selecione o id titulo da tag 
let titulo = document.getElementById('titulo');
// segunda variavel - selecione1 o id meu botao
let botao =  document.getElementById('meuBotao');
//terceira variavel - selecione1 o id conteudo
let conteudo =  document.getElementById('conteudo');
//adicione1 conteudo na tag h1
titulo.textContent = "titulo modificado";
//clique do botao adiciona o comando

botao.addEventListener("click", function(){
   conteudo.textContent = "O botao foi cliclado!";

});
//adicionando a classe no paragrafo do id conteudo
conteudo.classList.add('conteudoClasse');
//adicionando a classe no titulo com id titulo
titulo.classList.add('tituloClasse');