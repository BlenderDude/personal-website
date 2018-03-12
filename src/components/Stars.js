import React, {Component} from 'react'
import s from './Stars.css'

export default class Stars extends Component {

    componentDidMount() {

    }

    render() {
        const {stars, filled} = this.props
        return (
            <div className={s.stars}>
                <Star filled={stars >= 0.5 && filled} index={0}/>
                <Star filled={stars >= 1.5 && filled} index={1}/>
                <Star filled={stars >= 2.5 && filled} index={2}/>
                <Star filled={stars >= 3.5 && filled} index={3}/>
                <Star filled={stars >= 4.5 && filled} index={4}/>
            </div>
        )
    }
}

class Star extends Component {
    state = {
        filled: false,
    }

    componentDidMount() {
        this.setState({
            filled: this.props.filled
        })
    }

    componentWillReceiveProps(){
        this.setState({
            filled: this.props.filled
        })
    }


    render() {
        return (
            <svg viewBox="0 0 80 80" className={s.starContainer}>
                <polygon
                    className={[s.star, this.state.filled ? s.filled : ''].join(" ")}
                    ref={ref => this.star = ref}
                    style={{
                        transition: `stroke-dashoffset 1000ms ease-in-out ${this.props.filled?this.props.index * 100:0}ms, fill 1000ms ease-out ${this.props.filled?1750:0}ms` ,
                    }}
                    points="41.3 1.13 53.73 26.32 81.52 30.35 61.41 49.96 66.16 77.64 41.3 64.57 16.44 77.64 21.19 49.96 1.07 30.35 28.87 26.32 41.3 1.13"
                />
            </svg>
        )
    }
}