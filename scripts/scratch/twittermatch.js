$('td:contains([twerger]):not(td:has(textarea)), div.search_results:contains([twerger])').each(function() {
	const twitterIdRegexp = new RegExp('https?://[^/]*twitter.com(?:[^/]*/)*(\\d{4,19})');
    const twitterId = $(this).html($(this).html().replace(twitterIdRegexp, $1);
	console.log('found twerger tag:' + twitterId);
});