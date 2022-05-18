function showinfo(){
    let name = document.querySelector("input[name='name']").value
    let cor = document.querySelector("select[name='color'] option:checked").text
    let gostaProgramar = document.querySelector("input[name='like-programming']:checked").value
    let opcaoDesenvolvedor = document.querySelectorAll("input[name='developer-options']:checked")
    let optionValue = []
    opcaoDesenvolvedor.forEach(element => {optionValue.push(element.value)});
    let optionsChecked = optionValue.join(", ")
    alert(`Nome: ${name}, \nCor primaria ${cor} \nGosta de Programar? ${gostaProgramar} \nConhecimentos em programação web:${optionsChecked}`)
}

