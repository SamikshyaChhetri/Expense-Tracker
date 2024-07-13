const username = document.getElementById("UserName");
const usernamefromlocalstorage = localStorage.getItem("Name");
username.innerHTML = usernamefromlocalstorage + "!";
if (username.innerHTML == "null!") {
  window.location.href = "login.html";
}
setInterval(() => {
  const element = document.getElementById("time");
  let curr_date = new Date();
  let hours = curr_date.getHours();
  let min = curr_date.getMinutes();
  if (hours >= "12" && hours < "16") {
    element.innerHTML = "Good Afternoon";
  } else if (hours >= "16" && hours < "24") {
    element.innerHTML = "Good Evening";
  } else {
    element.innerHTML = "Good Morning";
  }
}, 1000);
const arr = [];
const addItem = document.getElementById("addItem");
const addItembtn = document.getElementById("addItemBtn");
addItembtn.addEventListener("click", () => {
  addItem.classList.replace("-top-96", "top-[3.5em]");
});
const add = document.getElementById("add");
add.addEventListener("click", () => {
  addItem.classList.replace("top-[3.5em]", "-top-96");
  const titleName = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const radioButtonType = document.getElementById("income");
  let buttonType;
  if (radioButtonType.checked) {
    buttonType = "income";
  } else {
    buttonType = "Expense";
  }
  console.log(radioButtonType.checked);
  // if(radioButtonType.)
  const item = {
    Title: titleName,
    Amount: amount,
    Button: buttonType,
  };
  arr.push(item);
  localStorage.setItem("items", JSON.stringify(arr));
});
