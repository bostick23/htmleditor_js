function startEditing() {
  var records = document.querySelectorAll(".editable");
  records.forEach(function (record) {
    record.classList.add("element-in-editing");
    record.style.position = "relative";
    // creating button element
    let button = document.createElement("BUTTON");
    button.classList.add("hide-button");
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.setAttribute("data-div-id", record.id);
    button.addEventListener("click", function () {
      let divId = this.getAttribute("data-div-id");
      let div = document.getElementById(divId);
      div.style.display = "none";
    });
    // creating text to be displayed on button
    let text = document.createTextNode("Button");
    text.textContent = "X";
    // appending text to button
    button.appendChild(text);
    // appending button to div
    record.appendChild(button);
  });
}
function stopEditing() {
  var records = document.querySelectorAll(".editable");
  records.forEach(function (record) {
    record.classList.remove("element-in-editing");
    record.style.position = "static";
    record.querySelector(".hide-button").remove();
  });
}
