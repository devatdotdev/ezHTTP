// Testing ezHTTP
//

// Selectors
const selectors = {
  sGetTXT : "#getTXT",
  sGetJSON: "#getJSON",
  sGetAPI : "#getAPI",
  sOutput : "#output"
}

// Elements
const elements = {
  eGetTXT : document.querySelector(selectors.sGetTXT),
  eGetJSON: document.querySelector(selectors.sGetJSON),
  eGetAPI : document.querySelector(selectors.sGetAPI),
  eOutput : document.querySelector(selectors.sOutput)
};

// After DOM loads..
// Event Handlers
//
document.addEventListener("DOMContentLoaded", function() {
  // Element events
  for (let key in elements) {
    // Buttons Clicked
    if (elements[key].classList.contains("button")) {
      elements[key].addEventListener("click", function(e) {
        e.preventDefault();
        click(e.target.id);
      })
    }
  };
})

function click(id) {
  switch (id) {
    case "getTXT":
      getTXT();
      break;
    case "getJSON":
      getJSON();
      break;
    case "getAPI":
      getAPI();
      break;
    default:
      console.log("Unexpected element.");
  }
};

function getTXT() {
  console.log("getTXT was fired...");
  fetch("sample/text.txt")
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      elements.eOutput.innerHTML = data;
    })
    .catch(function(err) {
      console.error(err);
    });
}
function getJSON() {
  console.log("getJSON was fired...");
}
function getAPI() {
  console.log("getAPI was fired...");
}
