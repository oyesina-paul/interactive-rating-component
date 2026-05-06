const ratingContainer = document.querySelector(".rating-content")
const thankYouContainer = document.querySelector(".thank-you-content")

const submitButton = document.querySelector("#submit")
const rateAgain = document.querySelector("#rate-again")
const rating = document.querySelector("#rating")
const rates = document.querySelectorAll("#number")

submitButton.addEventListener("click", e => {
   thankYouContainer.classList.remove("hidden")
   ratingContainer.style.display = "none";
})

rateAgain.addEventListener("click", e => {
   thankYouContainer.classList.add("hidden")
   ratingContainer.style.display = "block";
})

rates.forEach((rate) =>{
   rate.addEventListener("click", e => {
      rating.innerHTML = rate.innerHTML
      rate.style.backgroundColor = "#fff"
   })
})


