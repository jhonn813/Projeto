let alunos = []

function cadastrar(){
let conteudo = document.querySelector("#conteudo")
conteudo.innerHTML= `<h2>Cadastrar aluno</h2><input id="nome" placeholder="Nome">
        <input id="idade" type="number" placeholder="Idade">
        <input id="nota" type="number" placeholder="Nota">

        <button onclick="salvarAluno()">Salvar</button>`

}

function salvarAluno(){
    let nome = document.querySelector("#nome").value
    let idade = document.querySelector("#idade").value
    let nota = document.querySelector("#nota").value
    let numero = Number(idade)
    let novaNota = Number(nota)

  
  if(!isNaN(numero)){
      alunos.push({
        nome:nome,
        idade:numero,
        nota:novaNota
      })

}
else{

}

}
function listar(){
    let conteudo = document.querySelector("#conteudo")

    conteudo.innerHTML = ""

    alunos.forEach(aluno => {
        conteudo.innerHTML += `
            <p>
                Aluno: ${aluno.nome} | 
                Nota: ${aluno.nota} | 
                Idade: ${aluno.idade}
            </p>
        `
    })
}


function buscar(){
  let conteudo = document.querySelector("#conteudo")
conteudo.innerHTML= `<h2>Cadastrar aluno</h2>
        <input id="nome" placeholder="Nome">
        
        <button onclick="procurarAluno()">Procurar </button>`
}
   




