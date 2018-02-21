const hero = document.querySelector("body");
const text = document.querySelector("h1");
const walk = 7.5; //px

let quoteText = "";
let author = "";
const endpoint =
  "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

  // User Story: I can click a button to show me a new random quote.
    function getQuote() {
      $("#quote").fadeOut(1000, function() {
        $("#quote").text(quoteText);
      });
      $("#author").fadeOut(1400, function() {
              $("#author").text(author);
      });
    // Make API call
    $.getJSON(endpoint, function(data) {
      // console.log(data)
      quoteText = `"${data.quoteText}"`;
      author = " - " + data.quoteAuthor;
      $("#quote").fadeIn(1000);
      $("#author").fadeIn(1400);
    });
  }

// User Story: I can press a button to tweet out a quote.
$("#tweet-button").click(function() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quoteText + author,
    "_blank",
    "height=570,width=520"
  );
});

$(document).ready(function() {
  getQuote();
  $("#quote-button").click(getQuote);
});

//add mouse cursor shadow box
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const yWalk = Math.round(y / height * walk) - walk / 2;
  const xWalk = Math.round(x / width * walk) - walk / 2;
  
  text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(0,0,0,.50)
        `;
}

$(hero).on("mousemove", shadow);