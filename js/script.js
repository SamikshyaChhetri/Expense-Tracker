const username = document.getElementById("UserName");
// const userIdfromlocalstorage = localStorage.getItem("userid");
const usernamefromlocalstorage = localStorage.getItem("Name");
// console.log(userIdfromlocalstorage);
username.innerHTML = usernamefromlocalstorage;
const tokenfromlocalstorage = localStorage.getItem("token");
if (!tokenfromlocalstorage) {
  window.location.href = "login.js";
}
