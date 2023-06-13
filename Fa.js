document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const quoteContainer = document.getElementById("quoteContainer");
    let quotes = [];
  
    // Fetch quotes from the API
    fetch("https://api.example.com/quotes")
      .then(response => response.json())
      .then(data => {
        quotes = data;
  
        // Display all quotes initially
        displayQuotes(quotes);
  
        // Add event listener for input changes
        searchInput.addEventListener("input", filterQuotes);
      })
      .catch(error => console.log(error));
  
    // Display quotes
    function displayQuotes(quotesToShow) {
      quoteContainer.innerHTML = "";
      quotesToShow.forEach(quote => {
        const quoteText = document.createElement("p");
        quoteText.textContent = quote.text;
        quoteContainer.appendChild(quoteText);
      });
    }
  
    // Filter quotes based on search input
    function filterQuotes() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredQuotes = quotes.filter(quote => quote.text.toLowerCase().includes(searchTerm));
      displayQuotes(filteredQuotes);
    }
  });
  