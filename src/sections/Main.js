import React, {Component} from 'react'
import pConfig from '../p.json'
import s from './Main.css'
import WhatIDo from "../components/WhatIDo"

export default class Main extends Component {
    state = {
        width: document.documentElement.clientWidth,
        height: window.innerHeight
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize.bind(this))
        require('particles.js')
        window.particlesJS('canvas', pConfig)
    }

    _resize() {
        this.setState({
            width: document.documentElement.clientWidth,
            height: window.innerHeight,
        })
    }


    render() {
        return (
            <div className={s.container}>
                <div className={s.canvas} ref="canvas" id="canvas"/>
                <WhatIDo/>
            </div>
        )
    }
}