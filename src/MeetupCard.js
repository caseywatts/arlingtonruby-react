import React, { Component } from 'react';

class MeetupCard extends Component {
  render() {
    if (this.props.meetupEvent) {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <a href={this.props.meetupEvent.event_url} target="_blank">{this.props.meetupEvent.name}</a>
          </div>
          <div className="panel-body">
            <div className="col-sm-8">
              <p dangerouslySetInnerHTML={ { __html: this.props.meetupEvent.description }}></p>
            </div>
            <div className="col-sm-4">
              <b>WHEN:</b> {this.props.meetupEvent.formattedDate}
              <br /><b>WHERE:</b> <a href={this.props.meetupEvent.venueLink} target="_blank">{this.props.meetupEvent.venue.name}</a>
              <br /><b>WHO:</b> {this.props.meetupEvent.yes_rsvp_count} already going
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default MeetupCard;
