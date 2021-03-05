const format = require('date-fns/format');
const parseISO = require('date-fns/parseISO');

// defaults to short date if no variant provided.
// @variant "short" | "full"

module.exports = (date, variant = 'short') => {
  if (date === 'current') return date;

  const dateObject = parseISO(date);
  if (variant === 'full') return format(dateObject, 'd MMM yyyy');
  return format(dateObject, 'MMM yyyy');
};
