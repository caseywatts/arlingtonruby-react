import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MeetupCard from './MeetupCard';
import EventPresenter from './EventPresenter'
import fetchMeetups from './fetchMeetups'

class MeetupCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetupEvents: [],
      errorText: null
    };
  }

  componentDidMount() {
    fetchMeetups().then((responseData) => {
      const someEvents = (responseData.results || []).slice(0, this.props.numOfCardsToShow);
      const decoratedMeetupEvents = someEvents.map((rawEventData) => EventPresenter(rawEventData));
      this.setState({meetupEvents: decoratedMeetupEvents});
    }).catch((e) => {
      console.error(`Unable to fetch data.`, e);
      this.setState({errorText: `Encountered error while trying to fetch meetup data.  Please wait and reload the page.`})
    });
  }

  render() {
    const { errorText, meetupEvents } = this.state;
    return (
      <div>
        {
          !errorText && (meetupEvents || []).map((meetupEvent) =>
            <MeetupCard meetupEvent={meetupEvent} key={meetupEvent.id} />)
        }

        {
          errorText && <p className="text-danger">{errorText}</p>
        }
      </div>
    );
  }
}

MeetupCardList.propTypes = {
  numOfCardsToShow: PropTypes.number
};

MeetupCardList.defaultProps = {
  numOfCardsToShow: 5
};

export default MeetupCardList;
