const username = document.getElementById("UserName");
// const userIdfromlocalstorage = localStorage.getItem("userid");
const usernamefromlocalstorage = localStorage.getItem("Name");
// console.log(userIdfromlocalstorage);
username.innerHTML = usernamefromlocalstorage + "!";
if (username.innerHTML == "null!") {
  window.location.href = "login.html";
}
// const tokenfromlocalstorage = localStorage.getItem("token");
// if (!tokenfromlocalstorage) {
//   window.location.href = "login.html";
// }
