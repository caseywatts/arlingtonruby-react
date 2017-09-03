var EventPresenter = function(event) {
  var formatVenueLink = function(venue) {
    var formattedVenue = "http://maps.google.com/?q=" + encodeURI(venue.address_1) + '+' + encodeURI(venue.city);
    return formattedVenue
  };
  var formatDate = function(date) {
    // Pretty print the event date
    var day = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];

    return day[date.getDay()]  + ', '
    + months[date.getMonth()] + ' '
    + date.getDate() + ', '
    + date.getFullYear()
    + ' at '
    + (date.getHours() % 12) + ':'
    + (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes())
    + ' '
    + (date.getHours() < 12 ? 'AM' : 'PM');
  };

  event.venueLink = formatVenueLink(event.venue);
  event.formattedDate = formatDate(new Date(event.time));
  return event;
}

export default EventPresenter;
