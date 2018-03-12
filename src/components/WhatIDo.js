import React, {Component} from 'react'
import s from './WhatIDo.css'

export default class WhatIDo extends Component {
    state = {
        build: [
            "Web Applications",
            "Mobile Applications",
            "Websites",
            "Databases",
            "APIs",

        ],
        buildIndex: 0,
    }

    componentDidMount() {
        setInterval(() => {
            const {buildIndex, build} = this.state
            this.setState({
                buildIndex: buildIndex + 1 !== build.length ? buildIndex + 1 : 0
            })
        }, 4500)
    }

    render() {

        return (
            <div className={s.container}>
                <h2>Hello, I'm</h2>
                <h1>Daniel Abdelsamed</h1>
                <h2>and I build</h2>
                {this.state.build.map((build, index) => {
                    return (
                        <h1
                            key={index}
                            className={[s.build, index === this.state.buildIndex ? s.active : ''].join(' ')}
                        >
                            {build}
                        </h1>
                    )
                })}

            </div>
        )
    }
}