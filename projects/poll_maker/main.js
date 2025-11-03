console.log("js is running")

const poll_question = document.getElementById("question");
const the_option = document.getElementById("option");
const option_button = document.getElementById("add_option");
const new_options = document.getElementById("options")

option_button.addEventListener("click", () => {
    console.log("button click");
    const option = document.createElement("span");
    option.textContent = the_option.value;
    the_option.value = "";
    the_option.placeholder = "";
    new_options.appendChild(option);
    new_options.appendChild(document.createElement("br"));
})