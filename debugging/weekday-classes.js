// Exercise 10

/**
 * The issue here comes with the string representation of the date. We expect
 * 2 digit months and 2 digit days no matter what, but the toString function
 * doesn't ensure that. This causes the dates "2018-01-01" and "2018-1-1" to
 * be considered not equal and therefore available. To fix this, we need to
 * make sure that the toString function returns months and days that are
 * always 2 digits.
 *
 * Yet another issue! The getMonth Date method returns the month from 0 to 11,
 * not 1 to 12, so we must account for that.
 *
 * Another issue is that the getDay Date method returns a number between 0 and
 * 6 representing the *weekday*. What we want is the getDate Date method to
 * get the month date from 1-31.
 *
 * And finally the last issue is the getYear Date method. It returns how many
 * years it has been since 1900, but that isn't helpful. So let's use the
 * getFullYear Date method. There. All better now.
 *
 * Fixed code below:
 */

var TODAY = toDate("2018-08-05");

function toDate(string) {
  return new Date(string + "T00:00:00");
}

function toString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 &&
    date.getDay() <= 5;
}

var myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
}

var offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    var dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  var compatibleClasses = [];

  Object.keys(classes).forEach(function(className) {
    var classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]
