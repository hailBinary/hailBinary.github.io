const form = document.getElementById("the_form");
const message = document.getElementById("messages");
const list = document.getElementById("the_list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML = "";
  const list_items = message.value.split(/\r?\n/);
  for (let item of list_items) {
    const li = document.createElement("li");
    const url = document.createElement("a");
    url.href = url.href =
      item.startsWith("http://") || item.startsWith("https://")
        ? item
        : `https://${item}`;

    url.target = "_blank"; //opens in a new tab

    const match = item.match(/https?:\/\/(?:www\.)?(.*?)\.[a-z]+/i);
    url.textContent = match ? match[1] : item.replace(/^www\./, "");

    li.appendChild(url);
    list.appendChild(li);
  }
});
