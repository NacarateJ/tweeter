# Tweeter Project

Tweeter is a simple, single-page application (Twitter clone) focused primarily on the client side of web development while using a pre-built [backend](https://github.com/lighthouse-labs/tweeter).

It allows users to create short posts of up to 140 characters and appends them to the main page. The most recent posts appear at the top of the page. Tweeter fetches a list of posts from a simplified 'server' and allows users to add posts dynamically. The project levarages skills like  DOM manipulation with JavaScript and jQuery to make AJAX requests, along with Flexbox for responsive design layouts. 

## Features
* [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) preventing with Escaping (escape function)
* Using [timeago](https://www.npmjs.com/package/timeago) libray to display the time passed since a tweet 
* Form validation with `jQuery`
* Responsive design using `Flexbox`
* Using `SASS` CSS preprocessor to make `CSS` code more efficient and maintainable
* Form toggle - Using `jQuery` methods to hide or show form on the "Write a new Tweet" button click
* Toggle button - Using `jQuery` methods
    * The toggle button is shown in the lower right-hand corner the page when the user starts scrolling through the tweets and the navigation button disappears
    * The toggle button is hidden and the navigation button reappears when the user scrolls back to the top
    * When clicked, the page scrolls to the top, and the form slides down with the textarea enabled

## Technologies
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [(SASS)](https://sass-lang.com/guide)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [Ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)

## Dependencies
* [body-parser](https://www.npmjs.com/package/body-parser)
* [chance](https://www.npmjs.com/package/chance)
* [express](https://www.npmjs.com/package/express)
* [md5](https://www.npmjs.com/package/md5)

## Development Dependencies
* [nodemon](https://www.npmjs.com/package/nodemon)

## Getting Started
* Clone the repository to your local machine
* Install the project dependencies by running the following command: `npm install`
* Start the server by running the following command: `npm start`
* Open your web browser and visit http://localhost:8080 to access the Tweeter application.

## Final Product

<div align="center">



https://github.com/NacarateJ/tweeter/assets/114256348/c7b5ab68-11d5-4963-b06f-b2d23cc722de



<div/>

**Feel free to explore the code and make any modifications as needed. Enjoy using Tweeter!**
