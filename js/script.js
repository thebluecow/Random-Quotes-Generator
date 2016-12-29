// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
  quotes array is used to store quote objects.
*/
var quotes = [
  {
    quote: "COBRA Commander is hatred and evil personified. Corrupt. A man without scruples. Probably the most dangerous man alive!",
    source: "Anonymous",
    citation: "GI Joe file card",
    year: 1983,
    tags: "toys, gi joe, fun",
    figure: "Cobra Commander",
    viewed: 0
  },
  {
    quote: "Charlie is a Shaman, a medicine man. He's not a healer or a priest or a witch-doctor. There isn't any equivalent in our culture for what he is unless we had shrinks that could actually help people.",
    source: "Anonymous",
    citation: "GI Joe file card",
    year: 1984,
    tags: "toys, gi joe, spirit",
    figure: "Spirit",
    viewed: 0
  },
  {
    quote: "The harder the world, the fiercer the honour.",
    source: "Steven Erickson",
    citation: "Memories of Ice",
    year: 2001,
    tags: "malazan, fantasy, novels",
    viewed: 0
  },
  {
    quote: "I've never seen anything this beautiful in the entire galaxy - alright, give me the bomb.",
    source: "Transformers",
    citation: "Transformers cartoon",
    tags: "cartoon, world, transformers",
    character: "Ultra Magnus",
    viewed: 0
  },
  {
    quote: "Your knowledge is only overshadowed by your stupidity!",
    source: "Transformers",
    citation: "Transformers cartoon",
    tags: "cartoon, world, transformers",
    character: "Megatron",
    viewed: 0
  },
  {
    quote: "Ariel! Ookla! Ride!",
    source: "Thundarr the Barbarian",
    citation: "Thundarr the Barbarian cartoon",
    tags: "cartoon, world, thundarr, hanna-barbera",
    character: "Thundarr",
    viewed: 0
  },
  {
    quote: "I've come to understand that the truth isn't really what's important...what really matters is what people agree is the truth.",
    source: "Ian C. Esslemont",
    citation: "Stonewielder",
    year: 2010,
    tags: "malazan, fantasy, novels",
    character: "Greymane",
    viewed: 0
  },
  {
    quote: "Chaos needs no allies, for it dwells like a poison in every one of us.",
    source: "Steven Erickson",
    citation: "Midnight Tides",
    year: 2004,
    tags: "malazan, fantasy, poison",
    viewed: 0
  },
  {
    quote: "What makes a Malazan soldier so dangerous? They’re allowed to think.",
    source: "Steven Erickson",
    citation: "Deadhouse Gates",
    year: 2000,
    tags: "malazan, fantasy, dangerous",
    viewed: 0
  },
  {
    quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    source: "F. Scott Fitzgerald",
    citation: "The Great Gatsby",
    year: 1925,
    tags: "literature, great, nick",
    character: "Nick Carraway",
    viewed: 0
  },
  {
    quote: "Every one suspects himself of at least one of the cardinal virtues, and this is mine: I am one of the few honest people that I have ever known.",
    source: "F. Scott Fitzgerald",
    citation: "The Great Gatsby",
    year: 1925,
    tags: "literature, great, nick",
    character: "Nick Carraway",
    viewed: 0
  },
  {
    quote: "A pain stabbed my heart, as it did every time I saw a girl I loved who was going the opposite direction in this too-big world.",
    source: "Jack Kerouac",
    citation: "On the Road",
    year: 1957,
    tags: "kerouac, beat, literature",
    character: "Sal Paradise",
    viewed: 0
  },
  {
    quote: "A friend is one who walks in when the rest of the world walks out.",
    source: "Anonymous",
    tags: "anonymous, friend, world",
    viewed: 0
  },
  {
    quote: "Contentment is not the fulfillment of what you want, but the realization of how much you already have.",
    source: "Anonymous",
    tags: "anonymous, friend, world",
    viewed: 0
  },
  {
    quote: "If you really do put a small value upon yourself, rest assured that the world will not raise your price.",
    source: "Anonymous",
    tags: "anonymous, friend, world",
    viewed: 0
  },
  {
    quote: "Remember, a Cobra is a snake and snake is sneak spelled sideways!",
    source: "A Real American Hero",
    citation: "GI Joe cartoon",
    tags: "gi joe, flint, cartoon",
    character: "Flint",
    viewed: 0
  },
  {
    quote: "Give your hearts to America, Joes, 'cause your butts belong to me!",
    source: "A Real American Hero",
    citation: "GI Joe cartoon",
    tags: "gi joe, slaughter, cartoon",
    character: "Sgt. Slaughter",
    viewed: 0
  },
  {
    quote: "Let's reconnoiter, Snake Eyes, and try not to attract attention. Sure. Who'd notice a wet sailor with a parrot and a silent, masked man with a timber wolf? I think we're in major trouble!",
    source: "A Real American Hero",
    citation: "GI Joe cartoon",
    tags: "gi joe, shipwreck, cartoon",
    character: "Shipwreck",
    viewed: 0
  },
  {
    quote: "The world is full of abandoned meanings. In the commonplace I find unexpected themes and intensities.",
    source: "Don DeLillo",
    citation: "White Noise",
    year: 1984,
    tags: "literature, toxic cloud, commercialism",
    character: "Jack",
    viewed: 0
  },
  {
    quote: "It's like everyone tells a story about themselves inside their own head. Always. All the time. That story makes you what you are. We build ourselves out of that story.",
    source: "Patrick Rothfuss",
    citation: "The Name of the Wind",
    year: 2007,
    tags: "fantasy, world, abandoned",
    character: "Kvothe",
    viewed: 0
  },
  {
    quote: "Words are pale shadows of forgotten names. As names have power, words have power. Words can light fires in the minds of men. Words can wring tears from the hardest hearts.",
    source: "Patrick Rothfuss",
    citation: "The Name of the Wind",
    year: 2007,
    tags: "fantasy, words, shadows, power",
    character: "Kvothe",
    viewed: 0
  }
];

// globally scoped variable to hold "viewed" quotes
var quotesUsed = [];

function getRandomNumber(max) {
  // returns random number
  return randomNumber = Math.floor(Math.random() * max);
}

function getRandomColor() {
  var rgb = "rgb(";

  for (var i = 0; i < 3; i++) {
    rgb += getRandomNumber(256);
    i === 2 ? rgb += ")" : rgb += ", ";
  }
  return rgb
}

// retrieves a random record from the quotes array contained in the
// quotes array
// returns a quote object
function getRandomQuote() {
  // declare two variables for random number and the quote
  var randomNumber;
  var quote;

  // check to see if the quotes array is populated
  if (quotes.length > 0) {
    // get a random number and a quote
    randomNumber = getRandomNumber(quotes.length);
    quote = quotes[randomNumber];

    // Add 1 to the viewed property (in case this will be used in the future)
    quote.viewed += 1;

    // to ensure unique quotes, remove the quote from the quotes array
    // and place in the quotesUsed array
    quotes.splice(randomNumber, 1);
    quotesUsed.push(quote);

  } else {
    // copy all the entries in the quotesUsed array to quotes.
    quotes = quotesUsed.slice(0);
    // reset quotesUsed to an empty array
    quotesUsed = [];
    // call self to grab a quote
    quote = getRandomQuote();
  }

  return quote;
};

function sortProperties(quote) {
  // variable to store the properties that exist in the quote object
  var properties = Object.getOwnPropertyNames(quote);

  // used to ensure the tags property is always last
  // did this in case new properties were added to the objects in the future
  // such as the addition of viewed
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

  // write quote to console
  console.log(quote.quote, "remaining quotes: " + quotes.length, "this quote has been viewed " + quote.viewed + " total time(s).");

  // loops through the properties array to add additional information to
  // the htmlString.
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];

    if (property !== 'quote' && property !== 'source' && property !== 'viewed') {
      // add each property to the htmlString
      htmlString += '<span class="' + property + '">' + quote[property] + '</span>';
      }
  }

  // change the background color each time a quote is generated
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  document.getElementById('loadQuote').style.backgroundColor = randomColor;

  // sets the div#quote-box with the htmlString
  document.getElementById('quote-box').innerHTML = htmlString;

};

// set an interval to generate a new quote every 30 seconds
window.onload = function() {
  setInterval(printQuote, 30000);
};
