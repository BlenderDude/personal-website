import React, {Component} from 'react'
import s from './Header.css'

export default class Header extends Component {
    render() {
        const {scroll} = this.props
        const HEADER_BREAKPOINT = window.innerHeight - window.innerHeight / 2 - 200
        // const technologiesClass = calculateClass(scroll, 1)
        // const workClass = calculateClass(scroll, 2)
        return (
            <div className={s.container}>
                {/*<div className={[*/}
                    {/*s.sectionTitle,*/}
                    {/*technologiesClass,*/}
                {/*].join(' ')}>*/}
                    {/*Technologies*/}
                {/*</div>*/}
                {/*<div className={[*/}
                    {/*s.sectionTitle,*/}
                    {/*workClass,*/}
                {/*].join(' ')}>*/}
                    {/*Work*/}
                {/*</div>*/}
                <div className={[s.header, s.name, scroll > HEADER_BREAKPOINT ? '' : s.small].join(' ')}>
                    D
                    <span className={[s.lastLetters, s.aniel].join(' ')}>
                        aniel
                    </span>
                    A
                    <span className={[s.lastLetters].join(' ')}>
                        bdelsamed
                    </span>
                </div>
                <div className={s.spacer}/>
                <div className={s.link} onClick={() => this.props.setContact(true)}>
                    Contact
                    <div className={s.bar}/>
                </div>
            </div>
        )
    }
}

// function calculateClass(scroll, slide) {
//     const SLIDE = slide
//     const TOP_BREAKPOINT = SLIDE * window.innerHeight - window.innerHeight / 2 - 200
//     const BOTTOM_BREAKPOINT = (SLIDE + 1) * window.innerHeight - window.innerHeight / 2 - 200
//     let scrollClass
//     if (scroll < BOTTOM_BREAKPOINT && scroll > TOP_BREAKPOINT) {
//         scrollClass = s.on
//     } else if (scroll > BOTTOM_BREAKPOINT) {
//         scrollClass = s.below
//     } else {
//         scrollClass = s.above
//     }
//     return scrollClass
// }