function collapseFunction() {
  var container = document.getElementById("collapse-text");
  if (container.style.display === "none") {
    container.style.display = "block";
    container.style.maxHeight = container.scrollHeight + "px";
  } else {
    container.style.maxHeight = null;
    container.style.display = "none";
  } 
}