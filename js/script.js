// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// retrieves a random record from the quotes array contained in the
// js/quotes.js file
// returns a quote object
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomNumber];

  return quote;
};

function sortProperties(quote) {
  // variable to store the properties that exist in the quote object
  var properties = Object.getOwnPropertyNames(quote);

  // used to ensure the tags property is always last
  // did this in case new properties were added to the objects in the future
  // such as boolean for already shown
  for (var x in properties)properties[x] === "tags" ? properties.push(properties.splice(x,1)[0]) : 0;

  return properties;

}

// constructs the HTML formatted string to be displayed on the index.html page
function printQuote() {
  // variable to store the returned quote object
  var quote = getRandomQuote();

  // create and initialize the string
  var htmlString = "";

  var properties = sortProperties(quote);

  // add the quote and source to the htmlString since these will always
  // be present for each quote
  htmlString += '<p class="quote">' + quote.quote + '</p>';
  htmlString += '<p class="source">' + quote.source;

  // loops through the properties array to add additional information to
  // the htmlString.
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];

    if (property !== 'quote' && property !== 'source') {
      // add each property to the htmlString
      htmlString += '<span class="' + property + '">' + quote[property] + '</span>';
      }
  }

  // sets the div#quote-box with the htmlString
  document.getElementById('quote-box').innerHTML = htmlString;

};
