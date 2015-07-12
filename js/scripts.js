//global variable
var storyCounter = 0;

// jQuery function to load articles based on what's clicked
$("#spaz").on("click", getJSON);
$("#microwaver").on("click", getJSON);
$("#commuter").on("click", getJSON);
$("#sunday").on("click", getJSON);

// command for clicking on the left & right divs
$("#trash").click(trashArticle);
$("#nextStory").click(getJSON)

// bring on the json
// jquery function to pull in article information to article page
// .parseJSON?
function getJSON(){
//needs to empty out existing containers and revert to empty state --> refresh the page
    location.reload();
// get JSON data for next story based on value of storyCounter. storyCounter = 0 is the [0] array in the JSON object; the storyCounter grows by 1 each time it is clicked, returning the next value in the object each time.
    $.getJSON('http://10.90.12.47:5000/articles', function(data) {
        // depending on what story you are reading, when you click next, it will return the next item
        // need to pull in article image
        $('.articleHeadline').html(data.headline[storyCounter]);
        $('.byline').html(data.author[storyCounter]);
        $('.articleText').append('<p>' + data.body[storyCounter] + '</p>');
    // add one to storyCounter
        storyCounter++;

   });
}

function getBullets() {
//needs to empty out existing containers and revert to empty state --> refresh the page
    location.reload();
// get JSON data for next story based on value of storyCounter. storyCounter = 0 is the [0] array in the JSON object; the storyCounter grows by 1 each time it is clicked, returning the next value in the object each time.
    $.getJSON('http://10.90.12.47:5000/articles', function(data) {
        // depending on what story you are reading, when you click next, it will return the next item
        // need to pull in article image
        $('.articleHeadline').html(data.headline[storyCounter]);
        $('.byline').html(data.author[storyCounter]);
        $('.articleText').append('<ul>' + data.body[storyCounter] + '</ul>');
    // add one to storyCounter
        storyCounter++;
       });

}

function trashArticle() {
    // record that they didn't like this article

    // then get the next article
    getJSON();
}

//
//
// $("#NAMEHEREHEREHERe").click(function(event){
//
// });
