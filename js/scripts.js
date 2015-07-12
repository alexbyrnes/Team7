//global variable
var storyCounter = 0;

// jQuery function to load articles based on what's clicked
$("#spaz").on("click", getJSON;
$("#microwaver").on("click", getJSON);
$("#commuter").on("click", getJSON);
$("#sunday").on("click", getJSON);

// bring on the json
// jquery function to pull in article information to article page
// .parseJSON?
function getJSON(){
    $.getJSON('http://10.90.12.47:5000/articles', function(data) {
        // depending on what story you are reading, when you click next, it will return the next item
        // need to pull in article image
        $('.articleHeadline').html(data.headline[storyCounter]);
        $('.byline').html(data.author[storyCounter]);
        $('.articleText').append('<p>' + data.body[storyCounter] + '</p>');
        storyCounter++;

    });
}


//
//
// $("#NAMEHEREHEREHERe").click(function(event){
//
// });
