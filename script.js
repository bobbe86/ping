// document
//   .getElementById("notify-me")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the form from auto-submitting

//     const emailInput = document.getElementById("email");
//     const emailError = document.getElementById("email-error");
//     const emailValue = emailInput.value;

//     if (isValidEmail(emailValue)) {
//       emailError.textContent = "";
//       emailInput.style.border = "1px solid var(--PaleBlue)";
//       emailInput.value = ""; // Clear the input field after a valid submission
//     } else {
//       emailError.textContent = "Please provide a valid email address";
//       emailInput.style.border = "2px solid var(--LightRed)";
//     }
//   });

// function isValidEmail(email) {
//   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//   return emailRegex.test(email);
// }

document
  .getElementById("notify-me")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailValue = emailInput.value;

    isValidEmail(emailValue)
      ? ((emailError.textContent = ""),
        (emailInput.style.border = "1px solid var(--PaleBlue)"),
        (emailInput.value = ""))
      : ((emailError.textContent = "Please provide a valid email address"),
        (emailInput.style.border = "2px solid var(--LightRed)"));
  });

function isValidEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}
