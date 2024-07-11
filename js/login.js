const continueElement = document.getElementById("continue");
continueElement.addEventListener("click", () => {
  const inputname = document.getElementById("input").value;
  localStorage.setItem("Name", inputname);
});
