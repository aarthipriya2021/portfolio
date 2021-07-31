import React, { Component } from 'react'
import cert from '../images/cert.jpg'

export class certification extends Component {
    render() {
        return (
            <div id="certification" style={{width:'auto',margin:'0 auto'}}>
                <img style={{maxWidth:'100%'}} alt="certificate" src={cert}></img>
            </div>
        )
    }
}

export default certification
