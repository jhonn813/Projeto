let carro = []
let limite_maximo = 10


function entrar(){
    let placa = document.getElementById('placa').value 
    let tempo = Date.now()
if (carro.length  < limite_maximo) {
    carro.push({
        placa: placa,
        tempo: tempo
    })
  
}else{
    alert("ESTACIONAMENTO LOTADO!!!")
}
document.getElementById("resultado").innerHTML = carro.map(item => item.placa).join("<br>")


}
function sair(){
    let placa = document.getElementById("placa").value 

     let indice = carro.findIndex(item => item.placa === placa)

     if (indice !== - 1){
        let tempo = Date.now() - carro[indice].tempo
        let minutos = Math.ceil(tempo/60000)
        let valor = minutos * 5
        alert(`O carro ficou ${minutos} minutos . valor: R$ ${valor}`)
        carro.splice(indice, 1)
     }

     document.getElementById("resultado").innerHTML = carro.join("<br>")
     



}



