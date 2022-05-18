function show(){
    let elements = document.getElementsByName(`phone`)
    elements.forEach(element => {
        console.log(element.value)
    })
}