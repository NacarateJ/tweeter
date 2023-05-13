// Ensures that the code inside it is executed only after the page has finished loading
$(document).ready(function () {
  // The function will execute  whenever the user types or pastes text into the textarea
  // input event is used to detect the correct length of an input
  $("textarea").on("input", function() {
    // 'this' refers to the textarea
    const length = $(this).val().length;
    const remaining = 140 - length;

    // UPDATE THE COUNTER
    // The siblings() method gets all the sibling elements
    // of the textarea element that are of type div
    // The find() method is used to find the element
    // with a .counter class inside the div element
    // The text() method is used to set the text content of
    // the element with a .counter class to the number of remaining characters
    const counter = $(this).siblings("div").find(".counter");
    counter.text(remaining);
  });
});
