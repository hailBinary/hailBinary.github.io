const questionInput = document.getElementById("question");
const optionInput = document.getElementById("option");
const addOptionBtn = document.getElementById("add_option");
const questionDisplay = document.getElementById("question_display");
const pageBody = document.getElementById("body");

addOptionBtn.addEventListener("click", () => {
  // Update question display if input is not empty
  if (questionInput.value.trim()) {
    questionDisplay.textContent = questionInput.value;
  }

  // Initialize vote count for this option
  let voteCount = 0;

  // Create option button and vote count badge elements
  const optionBtn = document.createElement("button");
  const voteBadge = document.createElement("span");

  optionBtn.textContent = optionInput.value;

  // Increment vote count on option button click
  optionBtn.addEventListener("click", () => {
    voteCount++;
    voteBadge.textContent = `  ( ${voteCount} )`;
  });

  // Clear input field and placeholder
  optionInput.value = "";
  optionInput.placeholder = "";

  // Append option button, badge, and line break to the page
  pageBody.appendChild(optionBtn);
  pageBody.appendChild(voteBadge);
  pageBody.appendChild(document.createElement("br"));
});
