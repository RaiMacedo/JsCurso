function greetCrew(message, ...names){
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("seja bem vindo", "Arthur", "Jake", "Melissa")