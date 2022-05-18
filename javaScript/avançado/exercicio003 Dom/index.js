function adicionarCasa(){
    let numeroResidencia = document.querySelector("input[name=numero]").value
    let bairroResidencia = document.querySelector("input[name=bairro]").value
    let cidadeResidencia = document.querySelector("input[name=cidade]").value
    let areaResidencia = document.querySelector("input[name=areaCasa]").value
    let liCasa = document.createElement("li")
    liCasa.innerText = `${areaResidencia}/m^2, Numero: ${numeroResidencia}, Bairro: ${bairroResidencia}, Cidade: ${cidadeResidencia}`
    
    let btnRemover = document.createElement("button")
    btnRemover.type = "button"
    btnRemover.innerText = "Remover"
    btnRemover.setAttribute("onclick", "removerCasa(this)")

    liCasa.appendChild(btnRemover)
    document.getElementById("listaCasas").appendChild(liCasa)

}

function removerCasa(button){
    let removerLi = button.parentNode
    document.getElementById('listaCasas').removeChild(removerLi)
}
