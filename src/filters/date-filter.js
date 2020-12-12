const format = require('date-fns/format');
const parseISO = require('date-fns/parseISO');

module.exports = date => {
  if (date === "current") {
    return date;
  } else {
    const dateObject = parseISO(date);
    return format(dateObject, "MMM yyyy");
  }
};
