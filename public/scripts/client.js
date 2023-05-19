/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Ensure the web page is loaded:
$(document).ready(() => {
  // Use the jQuery library to add an event listener for submit
  $("form").on("submit", function(event) {
    // Prevent the default form submission behaviour
    event.preventDefault();

    // Convert form value into a query string format
    // (easier to send via HTTP requests)
    const formData = $(this).serialize();

    // Capture val in text area for form validation
    const newTweet = $(event.currentTarget).find("#tweet-text").val();

    // Check if the tweet exceeds the character limit
    if (newTweet.length > 140) {
      // Display an error message
      alert("Tweet exceeds 140 characters");
      return;
    }

    // Check if text area is empty
    if ($("#tweet-text").val() === "") {
      // Display an error message
      alert("Please share your thoughts...");
      return;
    }

    $.ajax({
      method: "POST",
      url: "/tweets",
      data: formData,
      success: function() {
        $.ajax({
          method: "GET",
          url: "http://localhost:8080/tweets",
          dataType: "json",
          success: function(res) {
            $(".tweets-container").prepend(
              createTweetElement(res[res.length - 1])
            );

            // Clear the text area after posting a new tweet
            $("#tweet-text").val("");

            // Set the counter back to 140 after posting a new tweet
            $(".counter").val("140");
          }
        });
      },

      // If an error occurred, log the issue
      error: function(error) {
        console.error(
          `Error Encountered: ${error.status} - ${error.statusText}`
        );
      },
    });
  });

  const loadTweets = function() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/tweets",
      dataType: "json",
      success: function(res) {
        renderTweets(res);
      },
      // If an error occurred, log the issue
      error: function(error) {
        console.error(
          `Error Encountered: ${error.status} - ${error.statusText}`
        );
      },
    });
  };

  // Takes in an array of tweets objects and appends each one to the #tweets-container
  const renderTweets = function(tweets) {
    const reversedTweets = tweets.reverse();
    for (const tweet of reversedTweets) {
      $(".tweets-container").append(createTweetElement(tweet));
    }
  };

  // Returns an escaped version of a str to ensure that any
  // special characters or HTML entities present in the input string are properly encoded
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Generate the DOM structure for a tweet, given a tweet object
  const createTweetElement = function(data) {
    const formatedDate = timeago.format(data.created_at);
    const $tweet = $(`
        <article class="tweet">
          <header>
            <div class="header-left">
              <img src=${data.user.avatars} alt="user's profile picture">
              <p>${data.user.name}</p>
            </div>
            <p class="user-handle">${data.user.handle}</p>
          </header>
          <p class="text">${escape(data.content.text)}</p>
          <footer>
            <p class="time">${formatedDate}</p>
             <div class="icons">
              <i class="fa-solid fa-flag" />
              <i class="fa-sharp fa-solid fa-retweet" />
              <i class="fa-sharp fa-solid fa-heart" />
            </div>
          </footer>
        </article>
    `);
    return $tweet;
  };

  // Render all tweets
  loadTweets();
})
