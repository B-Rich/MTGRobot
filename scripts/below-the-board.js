<script type='text/javascript' src='http://z1.ifrm.com/0/2/0/p401849/bbtags31_xanik.js'></script>

<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f7000054/postscribe.js"></script>
<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f7000055/htmlParser.js "></script>

<script type="text/javascript">

var quickQuote = {};
$(function() {
quickQuote.button = '<img src="http://z6.ifrm.com/4802/66/0/p3001008/qqdash.png" title="20% Faster Quote" />'; // HTML (<img>, <span>, <div>) accepted
$.ajax({
url: 'http://z6.ifrm.com/4802/66/0/p3001003/qq.js',
dataType: 'script',
cache: true
});
});
</script>
<script type="text/javascript">
//<![CDATA[
$('#c_bbcode button:last').after(' <button type="button" id="tumblr">Tumblr</button>');

$('#tumblr').click(function() {
    var eURL = window.prompt('Insert the Tumblr unique ID and post ID found on the embed post page. The ID\'s will be in this format: PRcUzVYKIe34ZfDg8UcwlQ/114994677164');

    if (eURL !== null) {
        ZetaInsert('[tumblr=' + eURL + ']');
    }
});

$('td:contains([tumblr=):not(td:has(textarea)), div.search_results:contains([tumblr=)').each(function() {
    $(this).html($(this).html().replace(/\[tumblr=(.+?)\]/ig, '<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/$1"></div>'));
});

$.getScript('http://assets.tumblr.com/post.js');

// embedded tweets
$('#c_bbcode button:last').after(' <button type="button" id="tweet">Tweet</button>');
$('#tweet').click(function() {
  ZetaInsert('[tweet][/tweet]');
});

let insertTweet = function(element, payload) {
   postscribe(element, payload.html);
};
var tweetCallbacks = [];

$('td:contains([tweet]):not(td:has(textarea)), div.search_results:contains([tweet])').each(function(index) {
    const twitterIdRegexp = 'https?://(?:[^/])*?twitter.com(?:[^/]*?/)*?(\\d{4,19})';

    tweetCallbacks.push(insertTweet.bind(undefined, $(this).get(0)));

    $(this).html().match(new RegExp(twitterIdRegexp, 'g')).forEach(match => {
            const _match =  match.match(twitterIdRegexp);

            const tweetTag = '[tweet]' + _match[0] + '[/tweet]';
            const twitterId = _match[1];
        const tweetUrl= 'https://api.twitter.com/1/statuses/oembed.json?id=' + twitterId + '&callback=tweetCallbacks[' + index +']';
        $(this).html($(this).html().replace(tweetTag, ''));
        $.ajax({ url: tweetUrl,   dataType: "jsonp"  });
    }); 
});
insertTweet = undefined;
//]]>
</script>