/* global $ */

var fetchMeetups = function(meetupURL) {
	meetupURL = (typeof meetupURL!=='undefined') ? meetupURL :
	"https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=techcorridorio&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=168857872&sig=e659cc6038d27adf6eae600a44905c69196c77df";

  return $.ajax({
    url: meetupURL,
    dataType: 'jsonp'
  })
};

export default fetchMeetups;
