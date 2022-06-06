import React from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWLink from '../../shared/DescriptionWithLink/DescriptionWithLink'


class Planet extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            satellites: []
        }
    }
    
    getSatellites = async () => {
        const response = await fetch(`http://localhost:3000/api/${this.props.id}.json`)
        const data = response.json()
        return data
    }

    componentDidMount(){
        this.getSatellites().then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }

    render(){

        let title
        if (this.props.titleUnderline) {
            title = <h4><u>{this.props.name}</u></h4>
        }else{
            title = <h4>{this.props.name}</h4>
        }
    
        return (
            <div>
                {title}
                <DescriptionWLink description={this.props.description} link={this.props.link}/>
                <GrayImg gray={this.props.gray} img_url={this.props.img_url}/>
                <br/>
                <h3>Satellites</h3>
                <ul>
                    {this.state.satellites.map((satellites, index) => 
                        <li key={index}>{satellites.name}</li>
                    )}
                        
                </ul>
                <hr/>
            </div>
            
        )
    }

}


export default Planet;