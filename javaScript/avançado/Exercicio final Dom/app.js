class App{
    cadastrarResidencia(){
        event.preventDefault()
        let tipo = document.querySelector("select[name='tipoResidencia']").value
        let area = document.querySelector("input[name='area']").value
        let situacao = document.querySelector("input[name='alugado']").checked
        let imovel = new Imovel(tipo, area, situacao)
        this.listadeResidencias(imovel)
        this.limparFormulario()
    }

    listadeResidencias(imovel){
        let listaCasas = document.createElement("li")
        let infoImovel = ` Tipo da residencia ${imovel.tipo} (Area da residencia: ${imovel.area}m²)`
        if (imovel.situacao){
            let marcaAlugado = this.criarAlugado()
            listaCasas.appendChild(marcaAlugado)
        }
        listaCasas.innerHTML += infoImovel
        

        let botaoRemover = this.criarBotaoRemover()
        listaCasas.appendChild(botaoRemover)

        document.getElementById("listaCasas").appendChild(listaCasas)
    }

    criarAlugado(){
        let marcaAlugado = document.createElement("span")
        marcaAlugado.style.color = "white"
        marcaAlugado.style.backgroundColor = "red"
        marcaAlugado.innerText = "ALUGADO"
        return marcaAlugado
    }

    criarBotaoRemover(){
        let botaoRemover = document.createElement("button")
        botaoRemover.setAttribute("onclick", "app.remove()")
        botaoRemover.innerText = "Remover"
        return botaoRemover
    }

    limparFormulario(){
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='alugado']").checked = false
    }

    remove(){
        let removeLi = event.target.parentNode
        document.getElementById("listaCasas").removeChild(removeLi)
    }
}
