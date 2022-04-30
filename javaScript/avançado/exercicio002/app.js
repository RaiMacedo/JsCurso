class App{
    
    run(){
        let loop = true
        do{
            let valor = prompt(`Deseja criar uma nave...\n1 - De batalha\n2 - De Transporte\n3 - Sair`)
            let retorno = new Menu()
            loop = retorno.PrimeiroMenu(valor)
    
        }while(loop)
    }

}