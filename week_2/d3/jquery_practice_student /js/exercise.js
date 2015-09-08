/**
 * Javascript Exercise: DOM and jQuery!
 */

/**
 * Question 1:
 * Select all paragraphs on the page with jQuery. Store the results in q1.
 */
var q1 = $("p");


/**
 * Question 2:
 * Select all items on this page that have the class "title". Store that in q2.
 */
var q2 = $(".title");

/**
 * Question 3:
 * Select all img tags that are inside a figure tag. Store that in q3.
 */
var q3 = $("figure img");
 

/**
 * Question 4: 
 * Select all list items that are in an order list that have the class "falseFact"
 */
 var q4 = $("ol li.falseFact");

/**
 * Question 5:
 * Using jQuery, change the text in the header's h1 tag to "My Page"
 */
$("h1").html("My Page");

/**
 * Question 6:
 * Using jQuery, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */
 var span = $("<span>").text("no quote");
 $("blockquote").html("").append(span);


/**
 * Question 7:
 * Using jQuery, change the color of all h2's to "green"
 */
 $("h2").css("color", "green");
  

/**
 * Question 8:
 * Using jQuery, change the background color of the whole page to "pink"
 */
$("body").css("background-color", "pink");

/**
 * Question 9:
 * Using jQuery, select all paragraphs and change their color to blue and font to Georgia.
 * Try to do this with only one jQuery call. 
 */
 // $("p").css("font-")
$("p").css({"color": "blue", "font-family": "Georgia"});

/**
 * Question 10:
 * Using jQuery, when you mouseover the image change the image to a new image, when you mouseout, revert back to the original image (remember you will need a document.ready function here. You can have as many document.ready functions as you like, although normally you only have one per js file. In this case imagine each question is in its own js file and create a separate document.ready function for each question); 
 */
function changeImage(e){
  console.log(e);
}

$(document).ready(function(){
  $("img.kitty").on("mouseover", changeImage());
})

/**
 * Question 11:
 * Using jQuery, when you input content into the input box, convert it to upcase and replace the paragraph tag with a class of result with this new text; 
 */


/**
 * Question 12:
 * Using jQuery, when you mouseover the ordered list slide it up (using slideUp) and then slide it back up again (make sure this only happens once); 
 */


/**
 * Question 13:
 * Give every other list item a color of purple (hint look at jQuery docs); 
 */


/**
 * Question 14:
 * Using jQuery, replace the content from the first paragraph on the page with a reversed version of the origional content;  
 */




