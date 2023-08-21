// Get the slider input element
const slider = document.getElementById("toggleSlider");
const statments = document.getElementById("statments");
const priceOneChange = document.getElementById("price-one");
const priceTwoChange = document.getElementById("price-two");
const priceThreeChange = document.getElementById("price-three");


const monthlyCards = document.getElementById("monthly");

// Function to update card visibility based on slider state
function updateCardVisibility() {
  if (slider.checked) {
    priceOneChange.innerText = "19.99";
    priceTwoChange.innerText = "24.99";
    priceThreeChange.innerText = "39.99";
  }else{
    priceOneChange.innerText = "199.99";
    priceTwoChange.innerText = "249.99";
    priceThreeChange.innerText = "399.99";
  }

}

// Initial call to update card visibility based on default slider state
updateCardVisibility();

// Add an event listener to the slider
slider.addEventListener('click', updateCardVisibility);
