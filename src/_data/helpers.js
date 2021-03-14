module.exports = {
	/**
	 * Returns back some attributes based on whether the
	 * link is active or a parent of an active item
	 *
	 * @param {String} itemUrl The link in question
	 * @param {String} pageUrl The page context
	 * @returns {String} The attributes or empty string
	 */
	getLinkActiveState(itemUrl, pageUrl) {
		let response = '';

		if (itemUrl === pageUrl) {
			response = ' aria-current="page"';
		}

		if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
			response += ' data-state="active"';
		}

		return response;
	},

	/**
	 * Filters out item (usually latest post) from the passed collection
	 * and limits number of items returned based on flag
	 *
	 * @param {Array} collection The 11ty collection
	 * @param {Object} item The item to exclude
	 * @param {Number} limit How many items to return. Default of zero does not apply a limit.
	 * @returns {Array} The resulting collection
	 */
	getSiblingContent(collection, item, limit = 0) {
		if (!collection) return null;
		let filteredItems = collection.filter((x) => x.date !== item.date);

		if (limit > 0) {
			filteredItems = filteredItems.slice(-limit);
		}

		return filteredItems;
	},

	getYear() {
		return new Date().getFullYear();
	},
};
