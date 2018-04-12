'use strict';

/**
 * @name parseExif
 * @description Parse unsplash api exif data
 * 
 * @param {Object} source 
 */
const parseExif = source => {
	if (source.exif) {
		const exif = [];

		Object.keys(source.exif).forEach(item => {
			const current = {};
			current.name = item;
			if (source.exif[item] === undefined || source.exif[item] === null || source.exif[item] === '') {
				current.value = '--';
			} else {
				current.value = source.exif[item];
			}

			exif.push(current);
		});

		return exif;
	}

	return false;
};

parseExif.promise = source => {
	return new Promise((resolve, reject) => {
		resolve(parseExif(source));
	});
}

module.exports = parseExif.promise = parseExif