// length 

var nome = "matheus"

console.log(nome.length)


//slice 

var roeu = frase.slice(7, 11)

console.log(roeu)



// Função que remova números repetidos de um array

function remova(){
  let numero = [1,9,5,20,1,5]

  let novoNumber = numero.filter((novoNumber, indice) => numero.indexOf(novoNumber) === indice);
  console.log(novoNumber)
}
console.log(remova())




// Função que multiplique todos os números de um array por 2.

function multiplicador(){
  let numero = [1,5,29,40,9]

let mult = numero.map(numero => numero/2)

  console.log(mult)
  console.log(numero)
}
console.log(multiplicador())



//usuario digitar os numero no array e aparecer se ele foi aprovado 
let nome = prompt("qual o seu nome: ")
function media(){
   let notas = []
  let continuar = true
  while(continuar){
   
    let entrada = prompt("coloque um nuemro: ")

    if(entrada === null || entrada.trim() === ""){
      continuar = false
    }
      else{
        let numero = Number(entrada)
      
    if(entrada === 0){
     continuar = false
   }
    else if(!isNaN(numero)){
      notas.push(numero)
    }
    else {
      console.log("Por favor digite um numero valido")
    }
  }
}
  let somaTotal = notas.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    let media_nota = 7
   if (somaTotal >= 21){
     console.log("O aluno(a) " + nome +" esta aprovado")
     
   }
  else{
    console.log("O aluno(a) " + nome +" esta reprovado")
  }
  console.log(notas)
}

console.log(media())



// Crie uma função que receba uma lista de usuários e retorne um relatório contendo: quantidade de usuários, média de idade, usuário mais velho, usuário mais novo e quantidade de usuários por cidade

function relatorio(){
  let usuarios = [
    {nome: "jonathas", idade: 18,cidade: "Rio de janeiro" },
    {nome: "lisa", idade : 20, cidade:"Rio de janeiro"},
    {nome: "Jonas", idade: 21, cidade :"São Paulo" },
    {nome: "Aline" , idade: 21, cidade: "São Paulo"}
]
  let novosUsuarios = usuarios.length
  let soma = usuarios.reduce((acumulador, usuario) => acumulador +            usuario["idade"], 0)

 let media = soma / novosUsuarios

 let maisVelho = usuarios.reduce((maisVelhoAtual, usuarioAtual) => {
      return usuarioAtual.idade > maisVelhoAtual.idade ? usuarioAtual :            maisVelhoAtual;
});

  let maisNovo = usuarios.reduce((maisNovoAtual, usuarioAtual)=>{
      return usuarioAtual.idade < maisNovoAtual.idade ? usuarioAtual : 
      maisNovoAtual
  })
  let contagemCidades = usuarios.reduce((acumulador, usuario) => {
  let cidade = usuario.cidade;

  if (!acumulador[cidade]) {
    acumulador[cidade] = 0;
  }
  
  acumulador[cidade]++;
  
    return acumulador;
}, {})

  console.log(novosUsuarios)
  console.log(soma)
  console.log(media)
  console.log(maisVelho)
  console.log(maisNovo)
  console.log(contagemCidades)
}


console.log(relatorio())  

// Crie uma função que retorne apenas usuários maiores de idade.

function maiorIdade(){
  let usuarios = []

  let nomes = prompt("qual seu nome?: ")
  let idade = prompt("qual sua idade: ")

  if(idade < 18){
    console.log("Voce nao pode entrar por ser menor de idade")
  
  }
  else{
    let numero = Number(idade)
   if(idade === 0){
     continuar = false
   }
    else if(!isNaN(numero)){
      usuarios.push({
        nome:nomes,
        idade:numero
      })
    }
    else {
      console.log("Por favor digite um numero valido")
    }

  console.log(usuarios)
}

  
 
  }


console.log(maiorIdade())




// Crie um sistema completo de alunos usando funções.
//Faça o sistema funcionar através de um menu:
//1 - Cadastrar aluno
//2 - Listar alunos
//3 - Buscar aluno
//4 - Adicionar nota
//5 - Ver aprovação
//6 - Remover aluno
//7 - Sair

function cadastrar(){
 
  let nome = prompt("Qual seu nome? ")
  let idade = prompt("Qual sua idade? ")
  let nota = prompt("Qual a sua nota? ")

let numero = Number(idade)
let novaNota = Number(nota)

  if(numero === 0 ){
    continuar = false
  }
  else if(!isNaN(numero)){
      alunos.push({
        nome:nome,
        idade:numero,
        nota:novaNota
      })

}
}
function listar(){
  alunos.forEach(alunos => {
  console.log(`Aluno: ${alunos.nome} | Nota: ${alunos.nota}`);
});
}
    
function buscar(){

    let nomeBusca = prompt("Qual aluno quer buscar? ");
    let encontrado = alunos.find(alunos => alunos.nome == nomeBusca)
    if (encontrado) {
        console.log(`Nome: ${encontrado.nome}`);
        console.log(`Idade: ${encontrado.idade}`);
        console.log(`Nota: ${encontrado.nota}`);
    } else {
        console.log("Aluno não encontrado.");
    }
}


function aprovacao(){

  let nomeAprovacao = prompt("Qual aluno quer ve se foi aprovado? ")

  let encontrado = alunos.find(alunos => alunos.nome == nomeAprovacao)
  if(encontrado ){
    console.log(`Nome: ${encontrado.nome}`)
    if(encontrado.nota >= 7){
      console.log(`O aluno tem a nota ${encontrado.nota} e esta aprovado`)
    }
    else{
      console.log(`O alunos tem a nota ${encontrado.nota} e esta reprovado `)
    }
    }
}

    

let opcional = 0
let alunos = []
while (opcional !== "6") {
console.log("====== MENU======")
console.log("1 - Cadastrar alunos")
console.log("2 - Listar alunos")
console.log("3 - Buscar alunos")
console.log("4 - Ver aprovação")
console.log("5 - Remover alunos")
console.log("6 - Sair")
opcional = prompt("esolha a sua opcao: ")
switch(opcional){
  case "1":
    console.log(cadastrar())
    break;
  case "2":
    console.log(listar())
    break;
  case "3":
    console.log(buscar())
    break;
  case "4":
    console.log(aprovacao())
    break
}
}




