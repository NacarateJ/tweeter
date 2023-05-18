/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];


// Ensure the web page is loaded:
$(document).ready(() => {
  // Takes in an array of tweets objects and appends each one to the #tweets-container
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      $(".tweets-container").append(createTweetElement(tweet));
    }

  };

  // Generate the DOM structure for a tweet, given a tweet object
  const createTweetElement = function (data) {
    const $tweet = $(`
        <article class="tweet">
          <header>
            <div class="header-left">
              <img src=${data.user.avatars} alt="user's profile picture">
              <p>${data.user.name}</p>
            </div>
            <p class="user-handle">${data.user.handle}</p>
          </header>
          <p class="text">${data.content.text}</p>
          <footer>
            <p class="time">${data.created_at}</p>
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

  renderTweets(data);
})
