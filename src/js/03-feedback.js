import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const feedbackValue = "feedback-form-state";
const input = document.querySelector(".email");
const text = document.querySelector(".text");
form.addEventListener("input", throttle(handleInput, 500));
function StorageCheck(){
    if (localStorage.getItem(feedbackValue) !== null) {
        const {email, message} = JSON.parse(localStorage.getItem(feedbackValue));
          form.email.value = email;
       form.message.value = message;
}
}
StorageCheck();
function handleInput(event) {

        const emailValue = form.email.value;
  const messageValue = form.message.value;
  if (emailValue === "" ||  emailValue === null ) {
          input.style.borderColor = "red";
     return;
  } else if ( messageValue === ""|| messageValue === null) {
     text.style.borderColor = "red";
  return;
}

        const feedbackFormState = {
            email: emailValue,
            message: messageValue
        };

      localStorage.setItem(feedbackValue, JSON.stringify(feedbackFormState))
    // console.log(feedbackFormState);
    }
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 
  if (localStorage.getItem(feedbackValue) === null) {
    return;
}
const info = JSON.parse(localStorage.getItem(feedbackValue));
console.log(info);
  localStorage.removeItem(feedbackValue);
  form.reset();
}

