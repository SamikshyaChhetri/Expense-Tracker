const username = document.getElementById("UserName");
const usernamefromlocalstorage = localStorage.getItem("Name");
username.innerHTML = usernamefromlocalstorage + "!";

// Check if logged in
if (username.innerHTML == "null!") {
  window.location.href = "login.html";
}

// To check morinming/evening
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

// Control add item modal
addItembtn.addEventListener("click", () => {
  addItem.classList.replace("-top-96", "top-[3.5em]");
});

const add = document.getElementById("add");

// Add an item
add.addEventListener("click", () => {
  addItem.classList.replace("top-[3.5em]", "-top-96");
  const titleName = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const radioButtonType = document.getElementById("income");
  const current = document.getElementById("addDate");
  let currentDate = new Date();
  let curr_year = currentDate.getFullYear();
  let curr_month = currentDate.getMonth();
  let curr_day = currentDate.getDay();
  const fullDate = curr_year + ":" + curr_month + ":" + curr_day;
  console.log(curr_year);
  let buttonType;

  // if income button is selected
  if (radioButtonType.checked) {
    buttonType = "income";
    // localStorage.setItem("IncomeAmount", amount);
  } else {
    buttonType = "Expense";
    // localStorage.setItem("ExpenseAmount", amount);
  }
  // console.log(radioButtonType.checked);
  if (!titleName || !amount || !radioButtonType) {
    alert("Cannot proceed with empty input fields.");
    return;
  } else {
    // Define the item
    const item = {
      Title: titleName,
      Amount: amount,
      Button: buttonType,
      Date: fullDate,
    };
    // Get the previous items stored in local storage, if doesnot exists set fallback to empty array
    const arrayfromLocalstorage =
      JSON.parse(localStorage.getItem("items")) || [];

    // Push tghe current item to the array
    arrayfromLocalstorage.push(item);

    // replace the old items by new array in local storage
    localStorage.setItem("items", JSON.stringify(arrayfromLocalstorage));

    // Calculate the total amounts
    calculateTotal();
  }
});
//function to calculate total amounts
function calculateTotal() {
  let totalAmt = 0.0;
  let totalIncomes = 0.0;
  let totalExpenses = 0.0;
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items")) || 0; //[] also valid
  itemsFromLocalStorage.forEach((element) => {
    if (element.Button === "income") {
      totalIncomes += parseFloat(element.Amount);
    } else {
      totalExpenses += parseFloat(element.Amount);
    }
  });
  totalAmt = totalIncomes - totalExpenses;
  localStorage.setItem("totalAmount", totalAmt);
  localStorage.setItem("totalIncome", totalIncomes);
  localStorage.setItem("totalExpense", totalExpenses);
  displayTotals();
}

function displayTotals() {
  const totalIncomeFromLS =
    parseFloat(localStorage.getItem("totalIncome")) || 0;
  const totalExpensesFromLS =
    parseFloat(localStorage.getItem("totalExpense")) || 0;
  const totalAmountFromLS =
    parseFloat(localStorage.getItem("totalAmount")) || 0;

  const displayTotalIncome = document.getElementById("incomeAmount");
  const displayTotalExpenses = document.getElementById("expenseAmount");
  const displayTotalAmount = document.getElementById("Tamount");

  displayTotalIncome.innerHTML = totalIncomeFromLS;
  displayTotalExpenses.innerHTML = totalExpensesFromLS;
  displayTotalAmount.innerHTML = totalAmountFromLS;
  displayItems();
}
function displayItems() {
  const displayAll = document.getElementById("display");
  displayAll.innerHTML = "";
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  itemsFromLocalStorage.forEach((items) => {
    if (items.Button === "income") {
      displayAll.innerHTML += `<div class="flex justify-between items-center bg-gradient-to-r from-lime-500 to-lime-400 p-3 rounded-md mt-2 text-white font-sans text-lg">
      <div>
        <i
          class="fa fa-arrow-down bg-white text-green-500 p-2 rounded-full w-8 text-center bg-opacity-50 font-bold"
          aria-hidden="true"
        ></i>   
        ${items.Title}
      </div>
      <div class="flex flex-col">
        <div>${items.Amount}</div>
        <div class="text-gray-500 font-normal text-sm">${items.Date}</div>

      </div>
    </div>`;
    } else {
      displayAll.innerHTML += `<div class="flex justify-between items-center bg-gradient-to-r from-red-400 to-red-300 p-3 rounded-md mt-2 font-sans text-white text-lg">
      <div>
        <i
          class="fa fa-arrow-up bg-white text-red-600 p-2 rounded-full w-8 text-center bg-opacity-50 font-bold"
          aria-hidden="true"
        ></i>
        ${items.Title}
      </div>
      <div class="flex flex-col">
        <div>${items.Amount}</div>
        <div class="text-gray-500 font-normal text-sm">${items.Date}</div>
      </div>
    </div>`;
    }
  });
}
displayItems();
