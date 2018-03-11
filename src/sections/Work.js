import React, {Component} from 'react'
import s from './Work.css'

//Images
import granvilleBandsiPhone8 from '../img/projects/granvillebands/iPhone8.png'
import granvilleBandsAdministration from '../img/projects/granvillebands/administration.png'
import granvilleBandsItinerary from '../img/projects/granvillebands/itinerary.png'

import Stars from "../components/Stars";

const PROJECTS = [
    {
        title: "Granville Bands",
        type: "MOBILE_APP",
        image: granvilleBandsiPhone8,
        description: 'This app was designed for Granville High School Band with the intent to allow students to share photos and keep updates about their trip to the Outback Bowl. Students could share their photos and they would be posted on the main feed of the app. Other users are then able to like and comment on the photos. The app also integrated a trip planning feature to allow the director to update the app and keep the students up-to-date on last minute changes to the trip agenda.',
        stars: 5,
        reviews: 24,
        quote: {
            content: "Here is a placeholder quote for something Mr. Jerod Smith might possibly say",
            saidBy: "Jerod Smith (Band Director)"
        },
        keyFeatures: [
            {
                title: "Administration",
                description: "Admins of the app are able to delete posts that they deem inappropriate. That's assuming the post managed to slip past the automatic content filter. Admins are also able to approve accounts to allow them to upload photos and comment on others' photos. Admins are also able to change the trip data and have the app send a push notification to the users notifying them of the change.",
                image: granvilleBandsAdministration,
            },
            {
                title: "Itinerary",
                description: "On this page, users are able to see what events were upcoming on the trip and see any special information needed for the day. As the day progresses, the next event will always be the one at the top so the user does not have to compare the current time against the itinerary.",
                image: granvilleBandsItinerary,
            },
        ]
    }
]

export default class Work extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.projects}>
                    {PROJECTS.map((project, index) => <Project {...project} key={index}/>)}
                </div>
            </div>
        )
    }
}

class Project extends Component {
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
            <div>
                <div className={[s.project, this.state.active ? s.active : ''].join(' ')}
                     ref={ref => this.container = ref}>
                    <div className={s.descriptionContainer}>
                        <div className={s.description}>
                            <div className={s.title}>
                                {this.props.title}
                            </div>
                            <div className={s.reviews}>
                                <Stars stars={this.props.stars} filled={this.state.active}/>
                                <div className={s.reviewCount}>
                                    {this.props.reviews}<span>reviews</span>
                                </div>
                            </div>
                            <div className={s.story}>
                                {this.props.description}
                            </div>

                        </div>
                    </div>
                    <div className={s.image}>
                        <img src={this.props.image}/>
                    </div>
                </div>
                <div>
                    <Quote quote={this.props.quote}/>
                </div>
                {this.props.keyFeatures.map((feature, index) => <Feature key={index} {...feature}/>)}
            </div>
        )
    }
}

class Quote extends Component {
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
        const {quote} = this.props
        return (
            <div className={[this.state.active ? s.active : ''].join(' ')}
                 ref={ref => this.container = ref}>
                <div className={s.quote}>
                    <div className={s.quoteContent}>
                        "{quote.content}" <span className={s.quoteSaidBy}>- {quote.saidBy}</span>
                    </div>
                </div>
            </div>
        )
    }
}

class Feature extends Component {
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
            <div className={[s.project, this.state.active ? s.active : ''].join(' ')}
                 ref={ref => this.container = ref}>
                <div className={s.featureImage}>
                    <img src={this.props.image}/>
                </div>
                <div className={s.featureDescription}>
                    <div className={s.featureTitle}>
                        {this.props.title}
                    </div>
                    <div className={s.featureStory}>
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}
