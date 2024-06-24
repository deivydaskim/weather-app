const formatDate = (enteredDate) => {
  // Parse the date string
  const date = new Date(enteredDate);

  // Helper function to get the ordinal suffix
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // exceptions for 11th, 12th, 13th
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  // Get the day of the month with ordinal suffix
  const day = date.getDate();
  const dayWithSuffix = day + getOrdinalSuffix(day);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Get the month name
  const month = monthNames[date.getMonth()];

  const weekdayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Get the weekday name
  const weekday = weekdayNames[date.getDay()];

  // Format the final string
  const formattedDate = `${dayWithSuffix} ${month}, ${weekday}`;

  return formattedDate; // Output: "24th Jun, Monday"
};

const convertTo24Hour = (time12h) => {
  // Extract the time parts
  const [time, period] = time12h.split(' ');

  // Extract hours and minutes
  const [hours, minutes] = time.split(':');

  // Convert to 24-hour format
  let hours24 = parseInt(hours);
  if (period === 'PM' && hours24 < 12) {
    hours24 += 12;
  } else if (period === 'AM' && hours24 === 12) {
    hours24 = 0;
  }

  // Format hours and minutes to have leading zeros if necessary
  const hours24Str = hours24.toString().padStart(2, '0');
  const minutesStr = minutes.padStart(2, '0');

  // Return the 24-hour formatted time
  return `${hours24Str}:${minutesStr}`;
};

export { formatDate, convertTo24Hour };
