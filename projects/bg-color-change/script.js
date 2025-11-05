const submitForm = document.getElementById("submit_form");
const colorInput = document.getElementById("main_message");
const previewParagraph = document.getElementById("the_paragraph");
const pageBody = document.getElementById("body");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  previewParagraph.innerHTML = colorInput.value;
  pageBody.style.backgroundColor = colorInput.value;
});
