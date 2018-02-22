import React, {Component} from 'react'
import s from './Technologies.css'

const TECHNOLOGIES = [
    `<HTML/>`,
    `.CSS3{}`,
    `javascript()`,
    `<?PHP?>`,
    `<React/>`,
    `mySQL`,
    `()=>nodeJS`,
    `Redux{}`,
    `<-Socket.IO->`,
    `React Native`,
    `Objective-C`,
    `Wordpress`,
]

export default class Technologies extends Component {

    render() {
        return (
            <div
                className={s.container}
            >
                {/*<h1 className={s.header}>Technologies</h1>*/}
                <div className={s.technologies}>
                    {TECHNOLOGIES.map((technology, i) =>
                        <div
                            key={i}
                            className={[s.technology].join(' ')}
                        >
                            <div>
                                <div className={s.language}>{technology}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}