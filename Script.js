//
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Show new quote - using API
let apiQuotes = [];

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  showLoadingSpinner();

  // pick a random quote from the apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //check IF author field is blank and replace with 'unknown'

  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //Check for quote length to determine styling

  if (quote.text.length > 50) {
    quoteText.classList.add("meduim-quote");
  } else {
    quoteText.classList.remove("meduim-quote");
  }

  if (quote.text.length > 100) {
    quoteText.classList.add("Long-quote");
    authorText.classList.add("small-author");
  } else {
    quoteText.classList.remove("Long-quote");
    authorText.classList.remove("small-author");
  }

  //set Quote & hide loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// Get Quotes from API
async function getQuotes() {
  showLoadingSpinner();

  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    //only sets the response when theres actual data
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // catch error here
  }
}

//Tweet a Quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();

//Show new quote - Local data

//function newQuote() {
// pick a random quote from the apiQuotes array
//  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// console.log(quote);
//}
//async function getQuotes() {
//    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//    try {
//      //only sets the response when theres actual data
//      const response = await fetch(apiUrl);
//      apiQuotes = await response.json();
//      newQuote();
//    } catch (error) {
//      // catch error here
//    }
//  }
//newQuote();
