const continueElement = document.getElementById("continue");
continueElement.addEventListener("click", () => {
  const inputname = document.getElementById("input").value;
  if (inputname == "") {
    alert("Name cannot be null");
  } else {
    localStorage.setItem("Name", inputname);
    window.location.href = "index.html";
  }
});
