console.log("hello world");

function complimentUser(event) {
  event.preventDefault();
  alert("This duck is almost as dapper as you are;)");
}

function handleSubmit(evt) {
  evt.preventDefault();
  alert("Success!");
  console.log("form submit");
}

let complimentGiver = document.querySelector("img");
let form = document.querySelector("form#contact");

complimentGiver.addEventListener("mouseover", complimentUser);
form.addEventListener("submit", handleSubmit);
