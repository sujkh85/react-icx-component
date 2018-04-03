export function parseQueryString(locationSearch) {
	let query = {}
	if (locationSearch) {
		locationSearch = locationSearch.replace('?', '');
		const params = locationSearch.split('&');
		params.forEach((param, idx) => {
			const keyValue = param.split('=');
			query[keyValue[0]] = decodeURIComponent(keyValue[1]);
		});
	}
	return query;
}