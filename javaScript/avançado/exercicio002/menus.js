
class Menu{

    PrimeiroMenu(validador){
            
        switch (validador) {
            case "1":
                let nomeBatalha = prompt(`Digite o Nome da Nave: `)
                let tripulantesBatalha = prompt(`Digite o numero de Tripulantes da Nave: `)
                let armas = prompt(`Digite a quantidade de armas da Nave: `)
                let naveBatalha = new NaveBatalha(nomeBatalha, tripulantesBatalha, armas) 
                let menuBatalha = new Menu()
                validador = menuBatalha.SegundoMenu(naveBatalha, validador)
                return validador
    
            case "2":
                let nomeTransporte = prompt(`Digite o Nome da Nave: `)
                let tripulantesTrasnporte = prompt(`Digite o numero de Tripulantes da Nave: `)
                let lugares = prompt(`Digite a quantidade de lugares da Nave: `)
                let naveTransporte = new NaveTrasnporte(nomeTransporte, tripulantesTrasnporte, lugares) 
                let menuTransporte = new Menu()
                validador = menuTransporte.SegundoMenu(naveTransporte, validador)
                return validador        
            
            case "3":
                return false
            
            default:
                alert(`Selecione um valor valido`)
                return true
        }
    }
    
    SegundoMenu(tipo, valor){
        let loopMenu = true
        do{
            let opcao = prompt(`O que deseja fazer?\n1 - Acelerar a Nave\n2 - Trocar a nave\n3 - Imprimir e sair`)
            switch (opcao) {
                case "1":
                    tipo.acelerar(prompt(`Deseja acelerar em quantos Km/s?`))
                    break;
            
                case "2":
                    alert(`Trocaremos de Nave...`)
                    return true
    
                case "3":
                    if(valor == 1){
                        alert(`Nome da Nave: ${tipo.nome}\nQuantidade de tripulantes: ${tipo.tripulantes}\nVelocidade atual: ${tipo.velocidade}\nQuantidade de armas: ${tipo.qtdArmas}`)
                    }else{
                        alert(`Nome da Nave: ${tipo.nome}\nQuantidade de tripulantes: ${tipo.tripulantes}\nVelocidade atual: ${tipo.velocidade}\nQuantidade de armas: ${tipo.lugares}`)
                    }
                    return false
    
                default:
                    alert(`Digite uma opção valida`)
                    break;
            }
        }while(loopMenu)
    }
}
