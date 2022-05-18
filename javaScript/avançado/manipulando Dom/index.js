function addNewPhones(){
    const phoneForm = document.querySelector("form#phones")
    const newPhone = phoneForm.children[0].cloneNode(true)
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector("label").innerText = `Telefone ${phonePosition}:` 
    phoneForm.appendChild(newPhone)
}
function printPhones(){
    let message = ``
    const phones =  document.querySelectorAll(`input[name='phone']`)
    phones.forEach((element, index) => {
        message += `Telefone ${index + 1}: ${element.value}\n `
    });
    alert(message)
}