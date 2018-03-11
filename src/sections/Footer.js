import React, {Component} from 'react'
import s from './Footer.css'

import linkedin from '../img/logos/linkedin.png'
import github from '../img/logos/github.png'
import facebook from '../img/logos/facebook.png'

export default class Footer extends Component {
    render() {
        return (
            <div className={s.container}>
                <div>
                    <div className={s.callToAction}>Got an idea?</div>
                    <div className={s.contact} onClick={() => this.props.setContact(true)}>
                        Contact
                    </div>
                    <div className={s.callToAction}>or, get to know me</div>
                    <div className={s.logos}>
                        <a href="https://www.linkedin.com/in/daniel-abdelsamed/" target="_blank">
                            <img src={linkedin} className={s.logo}/>
                        </a>
                        <a href="https://github.com/BlenderDude" target="_blank">
                            <img src={github} className={s.logo}/>
                        </a>
                        <a href="https://www.facebook.com/daniel.abdelsamed" target="_blank">
                            <img src={facebook} className={s.logo}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}