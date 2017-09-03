import React, { Component } from 'react';
import MeetupCard from './MeetupCard';
import EventPresenter from './EventPresenter'
import fetchMeetups from './fetchMeetups'

class MeetupCardList extends Component {
  static defaultProps = { numOfCardsToShow: 5 }
  constructor() {
    super();
    this.state = { meetupEvents: [] };
  }
  componentDidMount() {
    fetchMeetups().then((responseData) => {
      const someEvents = responseData.results.slice(0,this.props.numOfCardsToShow);
      const decoratedMeetupEvents = someEvents.map((rawEventData) => {
        return EventPresenter(rawEventData);
      })
      this.setState({meetupEvents: decoratedMeetupEvents});
    })
  }
  render() {
    if (this.state.meetupEvents) {
      return (
        <div>
          {this.state.meetupEvents.map((meetupEvent) =>
            <MeetupCard meetupEvent={meetupEvent} key={meetupEvent.id} />
          )}
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default MeetupCardList;
