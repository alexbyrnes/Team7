//global variable
var storyCounter = 0;

// command for clicking on the left & right divs
$("#trash").click(trashArticle);
$("#nextStory").click(getJSON)

$(window).load(function() {
    getJSON();
});
// bring on the json. jquery-->ajax function to pull in article information to article page
function getJSON(){
   $.ajax({
       url: "http://10.90.11.128:5000/articles",
        //force to handle it as text
        dataType: "text",
        success: function(data) {
            // store the parsed json as a variable
            json = $.parseJSON(data);
            // get data for next story based on value of storyCounter. storyCounter = 0 is the [0] array in the JSON object; the storyCounter grows by 1 each time it is clicked, returning the next value in the object each time.
            $('.byline').html("By " + json[storyCounter].author);
            $('.articleHeadline').html(json[storyCounter].headline);
            $('.articleText').html(json[storyCounter].copy);
            // change value of story counter
            storyCounter++;
            }
        });

}

// function getBullets() {

//     // $.getJSON('http://10.90.12.47:5000/articles', function(data) {
//     //     // depending on what story you are reading, when you click next, it will return the next item
//     //     // need to pull in article image
//     //     $('.articleHeadline').html(data.headline[storyCounter]);
//     //     $('.byline').html(data.author[storyCounter]);
//     //     $('.articleText').append('<ul>' + data.body[storyCounter] + '</ul>');
//     // add one to storyCounter
//         storyCounter++;
//        });

//}

function trashArticle() {
    // store that this was an article the person didn't like
    // get the next story
    getJSON();

}
