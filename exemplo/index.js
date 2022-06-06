function calcular()
{
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let calculo = peso / altura**2

    if(calculo < 18.5)
    {
        return alert(`Baixo peso ${calculo}`)
    }else if(calculo <= 24.9)
    {
        return alert(`Peso normal ${calculo}`)
    }else if(calculo <= 29.9)
    {
        return alert(`Excesso de peso ${calculo}`)
    }else if(calculo <= 34.9)
    {
        return alert(`Obesidade ${calculo}`)
    }else
    {
        return alert(`Obesidade extrema ${calculo}`)
    }
}

// if(numero1 == numero2){
//     alert(`Sim`)
// }else{
//     alert(`Não`)
// }

// alert(soma)