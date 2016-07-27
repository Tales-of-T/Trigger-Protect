(function () {
    //TODO(whomever wrote this): This won't ever work; it violates Chrome security by loading the ga.js script.
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


var _gaq = _gaq || [];
// Did we set up our own GAQ account for this, or are we using someone else's?
_gaq.push(['_setAccount', 'UA-47039723-2']);
_gaq.push(['_trackPageview']);

chrome.runtime.onMessage.addListener(function( request, sender, sendResponse ) {
    if(request.action == "removeTrigger"){
        _gaq.push(['_trackEvent', 'removeTrigger', 'removed']);
    }
});



