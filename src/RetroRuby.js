import React, { Component } from 'react';
import logo from './logo.svg';

class MeetupCard extends Component {
  render() {
    return (
      <div class="retrocession">
        <h2>RetroRuby</h2>
        One day unconference covering all things Ruby on {this.props.date}. More at <a href="http://retroruby.org/">retroruby.org</a>.
      </div>
    );
  }
}

export default MeetupCard;
