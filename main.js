// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
// Select the modal and message
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");

// Select all heart icons
const hearts = document.querySelectorAll(".like-glyph");

// Loop through each heart and attach event listener
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // On success: toggle heart and class
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // On failure: show error modal
        modal.classList.remove("hidden");
        modalMessage.textContent = error;

        // Hide modal after 3 seconds
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
