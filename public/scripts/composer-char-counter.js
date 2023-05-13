// Ensures that the code inside it is executed only after the page has finished loading
$(document).ready(function () {
  // The function will execute  whenever the user types or pastes text into the textarea
  // input event is used to detect the correct length of an input
  $("textarea").on("input", function() {
    const length = $(this).val().length;
    const remaining = 140 - length;
  });
});
