import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MeetupCard extends Component {
  render() {
    const { name, event_url, description, formattedDate, venueLink, venue, yes_rsvp_count } = this.props.meetupEvent;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <a href={event_url} target="_blank">{name}</a>
        </div>
        <div className="panel-body">
          <div className="col-sm-8">
            <p dangerouslySetInnerHTML={ { __html: description }}></p>
          </div>
          <div className="col-sm-4">
            <b>WHEN:</b> {formattedDate}
            <br /><b>WHERE:</b> <a href={venueLink} target="_blank">{venue.name}</a>
            <br /><b>WHO:</b> {yes_rsvp_count} already going
          </div>
        </div>
      </div>
    );
  }
}

MeetupCard.propTypes = {
  meetupEvent: PropTypes.object.isRequired
};

export default MeetupCard;
