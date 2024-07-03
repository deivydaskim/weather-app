const formatDate = (enteredDate) => {
  const date = new Date(enteredDate);

  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    date
  );
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
    date
  );

  const ordinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
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

  const dayWithSuffix = `${day}${ordinalSuffix(day)}`;

  return `${dayWithSuffix} ${month}, ${weekday}`;
};

const convertTo24Hour = (time12h) => {
  const [time, period] = time12h.split(' ');
  let [hours, minutes] = time.split(':');

  hours = parseInt(hours);
  if (period === 'PM' && hours < 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, '0')}:${minutes.padStart(2, '0')}`;
};

export { formatDate, convertTo24Hour };
