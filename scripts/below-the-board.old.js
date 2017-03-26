<script type='text/javascript' src='http://z1.ifrm.com/0/2/0/p401849/bbtags31_xanik.js'></script>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
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

var execScript = function(element, regexp, html)  {  
    element.innerHTML = html;
    //element.innerHTML = element.innerHTML.replace(regexp, html);  
    var codes = element.getElementsByTagName("script");   
    for(var i=0;i<codes.length;i++) {       
       eval(codes[i].text);  
    }  
}

var replaceTweet = function(element, regexp, url)  {  
    $.ajax({
        url: url,
        dataType: "jsonp",
        success: function(){ }
    });
}

function loadx(element, regexp, data) {
 console.log('twitter callback:');
 console.log(data.html);
 execScript(element, regexp, data.html);
}

var loadTweet = undefined;

var twitterTagRegexp = new RegExp('\\[twerger\\].*?\\[/twerger\\]');
$('td:contains([twerger]):not(td:has(textarea)), div.search_results:contains([twerger])').each(function() {
  const twitterIdRegexp = new RegExp('https?://[^/]*twitter.com(?:[^/]*/)*(\\d{4,19})');
    const twitterId = $(this).html().match(twitterIdRegexp)[1];
  console.log('found twerger tag:' + twitterId);

    loadTweet = loadx.bind(null, $(this).get(0), twitterTagRegexp);

  const url = 'https://api.twitter.com/1/statuses/oembed.json?id=' + twitterId + '&callback=loadTweet';

    replaceTweet($(this).get(0), twitterTagRegexp, url);
});
var replaceTweet = undefined;
//]]>
</script>