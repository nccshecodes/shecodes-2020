const format = require('date-fns/format');

// parseISO() not needed as page date already in ISO format
// Mon Mar 15 2021 00:33:23 GMT+0000 (Greenwich Mean Time)

module.exports = (date) => {
	return format(date, 'yyyy-MM-dd');
};
