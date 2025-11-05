const linksForm = document.getElementById("the_form");
const linksTextarea = document.getElementById("messages");
const linksList = document.getElementById("the_list");

linksForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear existing list items
  linksList.innerHTML = "";

  // Split textarea input by new lines
  const lines = linksTextarea.value.split(/\r?\n/);

  lines.forEach((line) => {
    // Create list item and anchor elements
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");

    // Ensure URL starts with protocol
    const url = 
      line.startsWith("http://") || line.startsWith("https://")
        ? line
        : `https://${line}`;

    anchor.href = url;
    anchor.target = "_blank"; // Open in new tab

    // Extract domain name for anchor text or fallback to cleaned input
    const domainMatch = line.match(/https?:\/\/(?:www\.)?(.*?)\.[a-z]+/i);
    anchor.textContent = domainMatch ? domainMatch[1] : line.replace(/^www\./, "");

    // Append anchor to list item, then list item to list
    listItem.appendChild(anchor);
    linksList.appendChild(listItem);
  });
});
