import React, {Fragment} from 'react'
import Planet from './planet';


async

class Planets extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            planets: []
        }
    }

    componentDidMount(){

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