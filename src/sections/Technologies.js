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
    `AWS`,
    `React Native`,
    `Objective-C`,
    `Wordpress`,
]

export default class Technologies extends Component {

    state = {
        active: false,
    }

    TRIGGER_POINT = 650

    _handleScroll() {
        this.setState({
            active: this.container.getBoundingClientRect().y < this.TRIGGER_POINT
        })
    }

    componentDidMount() {
        this.bound_handleScroll = this._handleScroll.bind(this)
        this.bound_handleScroll()
        document.addEventListener('scroll', this.bound_handleScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.bound_handleScroll)
    }

    render() {
        return (
            <div
                className={[s.container, this.state.active ? s.active : ''].join(' ')}
                ref={ref => this.container = ref}
            >
                <h1 className={s.header}>Technologies I Work With</h1>
                <div className={s.technologies}>
                    {TECHNOLOGIES.map((technology, i) =>
                        <div
                            key={i}
                            className={[s.technology].join(' ')}
                            style={{
                                transitionDelay: i * 150 + "ms"
                            }}
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