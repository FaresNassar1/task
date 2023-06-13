document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const quoteContainer = document.getElementById("quoteContainer");
    let quotes = [];
  
    fetch("https://api.example.com/quotes")
      .then(response => response.json())
      .then(data => {
        quotes = data;
  
        displayQuotes(quotes);
  
        searchInput.addEventListener("input", filterQuotes);
      })
      .catch(error => console.log(error));
  
    function displayQuotes(quotesToShow) {
      quoteContainer.innerHTML = "";
      quotesToShow.forEach(quote => {
        const quoteText = document.createElement("p");
        quoteText.textContent = quote.text;
        quoteContainer.appendChild(quoteText);
      });
    }
  
    function filterQuotes() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredQuotes = quotes.filter(quote => quote.text.toLowerCase().includes(searchTerm));
      displayQuotes(filteredQuotes);
    }
  });
  