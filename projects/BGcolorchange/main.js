const form = document.getElementById("submit_form");
const message = document.getElementById("main_message");
const paragraph = document.getElementById("the_paragraph");
const the_body = document.getElementById("body");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  paragraph.innerHTML = message.value;
  the_body.style.backgroundColor = message.value;
});
