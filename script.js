$(document).ready(function(){
	$("#quote-btn").on("click", function(){
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(json){
			var html ="";
			html += "<div class='text'>";	
			html += "<h3>" + json.quoteText + "</h3>" + "<p>" + json.quoteAuthor + "</p>";
			html += "</div>"
			
			$(".screen").html(html);
		});
	});
	
	$(".share-tw").on("click", function(){
		var tweetOut = $(".screen").text();
		if(tweetOut != 'Click button to generate random quote'){
			window.open('https://twitter.com/intent/tweet?text="' + tweetOut + '"', "_blank");
		}
	});
	
}); 