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
function procurarAluno(){
   
     let conteudo = document.querySelector("#conteudo")
    let nomeBusca = document.querySelector("#nome").value
    let encontrado = alunos.find(alunos => alunos.nome == nomeBusca)


     console.log("Nome pesquisado:", nomeBusca)
   console.log("Alunos cadastrados:", alunos)
   if(encontrado){
     conteudo.innerHTML += `
            <p>
               Aluno: ${encontrado.nome} <br>
               Nota: ${encontrado.nota}

               
             
            </p>
        `
      
    } else {
        conteudo.innerHTML += `
            <p>
               Aluno nao encontrado
            </p>
        `
    }

}

function aprovacao(){
      let conteudo = document.querySelector("#conteudo")
 
        conteudo.innerHTML= `<h2>Cadastrar aluno</h2>
        <input id="nome" placeholder="Nome">

        <button onclick="procurarAprovacao()">Procurar </button>`
}

function procurarAprovacao(){
    let conteudo = document.querySelector("#conteudo")
    let nomeAprovacao = document.querySelector("#nome").value
    let encontrado = alunos.find(alunos => alunos.nome == nomeAprovacao)

    if(encontrado){
        conteudo.innerHTML +=`<p>
                            Aluno:${encontrado.nome}
                              </p>`

    if (encontrado.nota >= 7) {
        conteudo.innerHTML +=`<p>
                            O aluno tem a nota: ${encontrado.nota} e esta aprovado
                              </p>`
    }else{
       conteudo.innerHTML +=`<p>
                            O aluno tem a nota: ${encontrado.nota} e esta reprovado
                              </p>` 
    }
    }
    
}

   




