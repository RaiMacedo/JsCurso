import React, {Fragment} from 'react'
import Planet from './planet';

class Planets extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            planets: [
                {
                    name: "Mecúrio" 
                    ,descriptionWLink: "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
                    ,href: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    ,aDescription: "Clique para saber de Mercúrio"
                    ,img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
                    ,titleUnderline: true
                    ,gray: true
                },

                {
                   name: "Plutão" 
                   ,descriptionWLink: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno. Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume."
                   ,href: "https://pt.wikipedia.org/wiki/Plut%C3%A3o"
                   ,aDescription: "Clique para saber de Plutão"
                   ,img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
                   ,gray: true
                }
            ]
        }
    }

    removelast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }
    
    

    render(){
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removelast}>Remove Last</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Last</button>
                <hr/>
                {this.state.planets.map((planet) =>
                    <Planet name={planet.name}
                    descriptionWLink={planet.descriptionWLink}
                    href={planet.href}
                    aDescription={planet.aDescription}
                    img_url={planet.img_url}
                    titleUnderline={planet.titleUnderline}
                    gray={planet.gray}
                    />
                    
                )}
            </Fragment>
        )
    }
}


export default Planets;