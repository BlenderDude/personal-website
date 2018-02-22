import React, {Component} from 'react'
import s from './Slider.css'


export default class Slider extends Component {
    state = {
        clicked: false,
        x0: 0,
        offset: 0,
    }

    componentWillMount() {
        this.bound_move = this._move.bind(this)
        this.bound_unclick = this._unclick.bind(this)
    }

    _click(e) {
        document.body.style.cursor = 'none'
        document.body.style.userSelect = 'none'
        document.body.addEventListener('mousemove', this.bound_move)
        document.body.addEventListener('touchmove', this.bound_move)
        document.body.addEventListener('mouseup', this.bound_unclick)
        document.body.addEventListener('touchend', this.bound_unclick)
        let x
        if (e.touches) {
            x = e.touches[0].clientX || 0
        } else {
            x = e.clientX
        }
        this.setState({
            clicked: true,
            x0: x,
        })
    }

    _unclick(e) {
        e.preventDefault()
        document.body.style.cursor = 'auto'
        document.body.style.userSelect = 'auto'
        this.setState({clicked: false})
        document.body.removeEventListener('mousemove', this.bound_move)
        document.body.removeEventListener('touchmove', this.bound_move)
        document.body.removeEventListener('mouseup', this.bound_unclick)
        document.body.removeEventListener('touchend', this.bound_unclick)
    }

    _move(e) {
        let x
        if (e.touches) {
            x = e.touches[0].clientX || 0
        } else {
            x = e.clientX
        }
        const dx = x - this.state.x0
        const width = this.rail.getBoundingClientRect().width
        const offset = Math.max(Math.min(this.state.offset + dx, width), 0)
        this.setState({
            x0: x,
            offset,
        })
        if (this.props.onChange) {
            this.props.onChange(offset / width)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value) {
            const value = nextProps.value
            const offset = value * this.rail.getBoundingClientRect().width
            this.setState({
                offset,
            })
        }
    }

    render() {
        const {leftLabel, rightLabel} = this.props
        return (
            <div
                className={s.container}
            >
                <div className={[s.label, s.left].join(' ')}>
                    {leftLabel}
                </div>
                <div
                    className={s.slider}
                >
                    <div className={s.rail} ref={ref => this.rail = ref}/>
                    <div
                        className={[s.dot, this.state.clicked ? s.clicked : ''].join(' ')}
                        onMouseDown={this._click.bind(this)}
                        onTouchStart={this._click.bind(this)}
                        style={{
                            left: this.state.offset,
                        }}
                    />
                </div>
                <div className={[s.label, s.right].join(' ')}>
                    {rightLabel}
                </div>
            </div>
        )
    }
}