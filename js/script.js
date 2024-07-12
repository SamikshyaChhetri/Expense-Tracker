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
    calculateTotal();
  } else {
    buttonType = "Expense";
    calculateTotal();
  }
  console.log(radioButtonType.checked);
  const item = {
    Title: titleName,
    Amount: amount,
    Button: buttonType,
  };
  const arrayfromLocalstorage = JSON.parse(localStorage.getItem("items"));
  if (!arrayfromLocalstorage) {
    arr.push(item);
    // calculateTotal();
    localStorage.setItem("items", JSON.stringify(arr));
  } else {
    arrayfromLocalstorage.push(item);
    localStorage.setItem("items", JSON.stringify(arrayfromLocalstorage));
    // calculateTotal();
  }
  function calculateTotal() {
    const displayTotal = document.getElementById("Tamount");
    let totalAmt = 0.0;

    const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));

    itemsFromLocalStorage.forEach((element) => {
      if (element.Button === "income") {
        totalAmt += parseFloat(element.Amount);
      } else {
        totalAmt -= parseFloat(element.Amount);
      }
    });

    localStorage.setItem("totalAmount", totalAmt);
    displayTotal.innerHTML = totalAmt;
  }
  calculateTotal();
});
