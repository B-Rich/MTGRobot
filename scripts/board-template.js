ACP Home Get Help
Get Help AutoTools
AutoTools History & Logs
History & Logs Board Themes
Board Themes Forums
Forum Sections Users & Groups
Users & Groups Board Settings
Board Settings
9:31 PM Apr 3 Welcome MindWarped [Sign Out] [Return to board]
ZetaBoards Service
Admin CP Controls
Account Info
Feedback & Surveys
Support Tickets
Ad Removal
ZetaBoards Premium
Directory Options
Domain Manager
File Manager
Support Forum
Documentation
Board Customization
Preferences
Emoticons
Filters
Website Maker
Avatar Gallery
Portal Manager
Shoutbox
Users & Groups
Member Search
Remove Members
Authorization List
Banning
Name Changes
Bulk Mail
Titles
Profile Fields
Groups
Forum Access
Joinable Groups
Pre-Register Member
IP Address Manager
Staff Security Portal
Forum Sections
Create Sections
Section Manager
Section Ordering
Themes
Themes
Board Template
History
Moderator History
Admin History
Email History
Warning History
Board Statistics
AutoTools
Topic AutoTools
Member AutoTools
Admin CP → Board Template → Edit Board Template
Notice: Board template edited

Edit Board Template
Javascripts:
Any scripts that must be placed before the start of the board.  
<style>
  .editby {
    display: none;
  }
</style>
<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/p3001027/cardtags.js"></script>
<script type='text/javascript' src="http://www.devilsbiscuit.com/ML/enablehtmlvideotags.js"></script>
<link rel="shortcut icon" href="http://z6.ifrm.com/4802/66/0/p1000012/favicon.ico" />

<!-- hack to restore hidden pages lost in the db crash of September 2013 -->
<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f5018676/missingpagehack.js"></script>


<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f5019164/signature.js"></script>

<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f5019598/lodashmin.js"></script>

Top of the page:
Content that goes at the very top of the page.  
Above the Board:
Content that goes before the main content of the board. 
<a href="http://s6.zetaboards.com/EmpireLost">Home</a> · <a href="http://s6.zetaboards.com/EmpireLost/search/?c=5">Active Topics</a><br />
<a href="http://www.goodgamery.com/">GoodGamery</a> · <a href="http://forums.goodgamery.com">Forums</a> - Our friend and ally in these dark times
<br />
<br />
Below the Board:
Content that goes after the main content of the board.  
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

var tweetCallbacks = [];
var tweetCount = 0;
$('td:contains([tweet]):not(td:has(textarea)), div.search_results:contains([tweet])').each(function() {
    var twitterIdRegexp = '\\[tweet\\]https?://(?:[^/])*?twitter.com(?:[^/]*?/)*?(\\d{4,20})(?:/.*?)?\\[/tweet\\]';

    $(this).html().match(new RegExp(twitterIdRegexp, 'g')).forEach(match => {
          const _match =  match.match(twitterIdRegexp);
            const spanId = 'embedded-tweet-' + Math.floor((Math.random() * 100000000000));
        
      $(this).html($(this).html().replace(_match[0], '<span id="' + spanId + '"></span>'));

            tweetCallbacks.push(payload => postscribe($('span#'+spanId).get(0), payload.html));

      const tweetUrl= 'https://api.twitter.com/1/statuses/oembed.json?id=' +  _match[1] + '&callback=tweetCallbacks[' + (tweetCount++) +']';
      $.ajax({ url: tweetUrl,   dataType: "jsonp"  });
    }); 
});
//]]>
</script>
Above the copyright:
Content just before the copyright and end of the page 
<script type="text/javascript"> installCardTags(); </script> 
<script type="text/javascript"> installQuoteUnnester(); </script>
<script type="text/javascript" src="http://z6.ifrm.com/4802/66/0/f7000065/clnfy.js"></script>
<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f5019614/sn_ps.js"></script>

<script type="text/javascript">
function getMember() {var x = document.getElementById('top_info').getElementsByTagName('a')[0];if( x.href.match(/\/login\//) ) {return 'Guest';}else{return x.innerHTML;}}ubb_tag("You","you",getMember(),-1,"Display member logged in");</script>
<script type="text/javascript"> window.onload=function(){
image_resizer();
} </script>
<script type='text/javascript'>
//<![CDATA[
$("#c_post-text").each(function(){
if (!$(this).html().match("(showEdit)")){
$("input[name=show_edit]").removeAttr("checked");
}
});

$(".c_post").each(function(){
this.innerHTML = this.innerHTML.replace("(showEdit)", "");
});
//]]>
</script>

<script type="text/javascript"> fixMissingPages(); </script>
<script type="text/javascript"> replaceVideoTags(); </script>
<script type="text/javascript"> mERFSig(); </script> 
<script type="text/javascript"> snPs(); </script>

<script type="text/javascript">
window.onload = function() {
  if(window.location.href.includes('topic')) {
    url = $("ul#nav li:nth-last-child(3) a").attr('href');
    $.get(url);
  }
}</script>
Menu:
Additional menus that are placed right after the submenu  
<script id="twitter-wjs" type="text/javascript" async defer src="//platform.twitter.com/widgets.js"></script>
Edit Board Template
Hosted for free by ZetaBoards ‐ © 2004-2016 Zathyus Networks, Inc.
Dump Template Script
// Javascripts

<style>
  .editby {
    display: none;
  }
</style>
<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/p3001027/cardtags.js"></script>
<script type='text/javascript' src="http://www.devilsbiscuit.com/ML/enablehtmlvideotags.js"></script>
<link rel="shortcut icon" href="http://z6.ifrm.com/4802/66/0/p1000012/favicon.ico" />

<!-- hack to restore hidden pages lost in the db crash of September 2013 -->
<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f5018676/missingpagehack.js"></script>


<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f5019164/signature.js"></script>

<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f5019598/lodashmin.js"></script>

// Top of the page

// Above the Board

<a href="http://s6.zetaboards.com/EmpireLost">Home</a> · <a href="http://s6.zetaboards.com/EmpireLost/search/?c=5">Active Topics</a><br />
<a href="http://www.goodgamery.com/">GoodGamery</a> · <a href="http://forums.goodgamery.com">Forums</a> - Our friend and ally in these dark times
<br />
<br />

// Below the Board

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

var tweetCallbacks = [];
var tweetCount = 0;
$('td:contains([tweet]):not(td:has(textarea)), div.search_results:contains([tweet])').each(function() {
    var twitterIdRegexp = '\\[tweet\\]https?://(?:[^/])*?twitter.com(?:[^/]*?/)*?(\\d{4,20})(?:/.*?)?\\[/tweet\\]';

    $(this).html().match(new RegExp(twitterIdRegexp, 'g')).forEach(match => {
          const _match =  match.match(twitterIdRegexp);
            const spanId = 'embedded-tweet-' + Math.floor((Math.random() * 100000000000));
        
      $(this).html($(this).html().replace(_match[0], '<span id="' + spanId + '"></span>'));

            tweetCallbacks.push(payload => postscribe($('span#'+spanId).get(0), payload.html));

      const tweetUrl= 'https://api.twitter.com/1/statuses/oembed.json?id=' +  _match[1] + '&callback=tweetCallbacks[' + (tweetCount++) +']';
      $.ajax({ url: tweetUrl,   dataType: "jsonp"  });
    }); 
});
//]]>
</script>

// Above the copyright

<script type="text/javascript"> installCardTags(); </script> 
<script type="text/javascript"> installQuoteUnnester(); </script>
<script type="text/javascript" src="http://z6.ifrm.com/4802/66/0/f7000065/clnfy.js"></script>
<script type='text/javascript' src="http://z6.ifrm.com/4802/66/0/f5019614/sn_ps.js"></script>

<script type="text/javascript">
function getMember() {var x = document.getElementById('top_info').getElementsByTagName('a')[0];if( x.href.match(/\/login\//) ) {return 'Guest';}else{return x.innerHTML;}}ubb_tag("You","you",getMember(),-1,"Display member logged in");</script>
<script type="text/javascript"> window.onload=function(){
image_resizer();
} </script>
<script type='text/javascript'>
//<![CDATA[
$("#c_post-text").each(function(){
if (!$(this).html().match("(showEdit)")){
$("input[name=show_edit]").removeAttr("checked");
}
});

$(".c_post").each(function(){
this.innerHTML = this.innerHTML.replace("(showEdit)", "");
});
//]]>
</script>

<script type="text/javascript"> fixMissingPages(); </script>
<script type="text/javascript"> replaceVideoTags(); </script>
<script type="text/javascript"> mERFSig(); </script> 
<script type="text/javascript"> snPs(); </script>

<script type="text/javascript">
window.onload = function() {
  if(window.location.href.includes('topic')) {
    url = $("ul#nav li:nth-last-child(3) a").attr('href');
    $.get(url);
  }
}</script>

// Menu

<script id="twitter-wjs" type="text/javascript" async defer src="//platform.twitter.com/widgets.js"></script>