/**
 * This is the entry point for our JavaScript program
 */
function main() {
    //your code goes here
    //alert("hello world!");
    var s  = new Spotter("twitter.search",
	{q:"bieber",period:120},
	{buffer:true,bufferTimeOut:750});
    
	var count = true;
	var totCount = 1;
    s.register(function(tweet) {
    	
        var profile_image = "<img src=\"" + tweet.profile_image_url+ "\" />";
	if(totCount==11){
	    $("#tweets p:last-child").remove();
            totCount=10;
	}
	if(count){
	$("#tweets").prepend($("<p class='red'>"+profile_image+tweet.text+"</p>").slideDown());
	}else{
	$("#tweets").prepend($("<p class='blue'>"+profile_image+tweet.text+"</p>").slideDown());
	}
        count = !count;	 	
    	totCount++;
});

    s.start();
    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
    //2. Add profile images (tweet.profile_image_url)
    //3. Make the tweets occur so the most recent are at the top
    //4. Make the tweets slide down
    //5. Alternate the colors or the background of the tweets
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)


}

main();
