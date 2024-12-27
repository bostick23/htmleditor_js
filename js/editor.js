//Enable form editing mode
function startEditing() {
  let records = document.querySelectorAll(".editable");
  records.forEach(function (record) {
    record.classList.add("element-in-editing");
    record.style.position = "relative";
    // creating hide/show button on div
    let button = document.createElement("BUTTON");
    button.classList.add("hide-button");
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.setAttribute("data-div-id", record.id);
    button.addEventListener("click", changeShowStatus);
    button.setAttribute("data-show-status", "true");
    let text = document.createTextNode("Button");
    text.textContent = "Hide";
    button.appendChild(text);
    record.appendChild(button);
  });
}
// Disable form editing mode
function stopEditing() {
  var records = document.querySelectorAll(".editable");
  records.forEach(function (record) {
    record.classList.remove("element-in-editing");
    record.style.position = "static";
    record.querySelector(".hide-button").remove();
  });
}
/// Function to change the show status of the div
function changeShowStatus() {
  let showStatus = this.getAttribute("data-show-status");
  if (showStatus) {
    this.textContent = showStatus === "true" ? "Hide" : "Show";
    this.setAttribute("data-show-status", showStatus === "true" ? "false" : "true");
  }
  else {
    this.textContent = "Hide";
    this.setAttribute("data-show-status", "false");
  }
  let divId = this.getAttribute("data-div-id");
  let div = document.getElementById(divId);
  //reduce opacitiy of all children
  let children = div.childNodes;
  children.forEach(function (child) {
    if (child.style) {
      if (!showStatus || showStatus === "true")
        child.style.opacity = "0.25";
      else
        child.style.opacity = "1";
    }
  });
  //TODO call the API to update the show status
}