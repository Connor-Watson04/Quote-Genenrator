//https://jacintodesign.github.io/quotes-api/data/quotes.json

let apiQuotes = [];

// Show new quote
function newQuote() {
  // pick a random quote from the apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
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

// On Load
getQuotes();
