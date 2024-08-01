const inputText = document.getElementById("todo");
const itemList = document.getElementById("item-list");
displayitems();
let button = document.getElementById("Add-Button");
button.addEventListener("click", function () {
  if (inputText.value === "") {
    alert("Text Input Empty!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    itemList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputText.value = "";
  savingitems();
});

itemList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savingitems();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savingitems();
    }
  },
  false
);

function savingitems() {
  localStorage.setItem("item", itemList.innerHTML);
}

function displayitems() {
  itemList.innerHTML = localStorage.getItem("item");
}
