function newQuote(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(quoteArray) { //loads an array with random quotes
    $('p').html(quoteArray[0].content);
    $('blockquote footer cite').html(quoteArray[0].title);

    var tweetBaseUrl = "https://twitter.com/intent/tweet";
    var tweetText = "?text=" + $('blockquote > p').text();
    $("#tweet-button").attr('href', tweetBaseUrl +  tweetText);
  });
}

newQuote();

$('#new-quote-button').click(function(){
  newQuote();
});