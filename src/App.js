import React, {Component} from 'react'
import s from './App.css'
import Header from "./sections/Header"
import Main from "./sections/Main"
import Technologies from "./sections/Technologies"
import ContactModal from "./components/ContactModal"
import Work from "./sections/Work";
import Footer from "./sections/Footer";

class App extends Component {
    state = {
        scroll: window.pageYOffset,
        contactModal: false,
    }

    componentDidMount() {
        this.bound_scroll = this.handleScroll.bind(this)
        window.addEventListener('scroll', this.bound_scroll)
        document.ontouchmove = (e) => {
            if (this.state.contactModal) {
                e.preventDefault()
            }
            return true
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.bound_scroll)
    }

    handleScroll() {
        this.setState({scroll: window.pageYOffset, scrollDir: window.pageYOffset > this.state.scroll})
    }

    _setContact(state) {
        if (state) {
            document.body.classList.add(s.noScroll)
        } else {
            document.body.classList.remove(s.noScroll)
        }
        this.setState({
            contactModal: state,
        })
    }

    render() {
        return (
            <div className={s.container}>
                <Header
                    scroll={this.state.scroll}
                    open={this.state.contactModal}
                    setContact={this._setContact.bind(this)}
                />
                <Main/>
                <Technologies
                    scroll={this.state.scroll}
                />
                <Work/>
                <ContactModal
                    open={this.state.contactModal}
                    setContact={this._setContact.bind(this)}
                />
                <Footer
                    open={this.state.contactModal}
                    setContact={this._setContact.bind(this)}
                />
            </div>
        )
    }
}

export default App
