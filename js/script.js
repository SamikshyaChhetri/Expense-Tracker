const username = document.getElementById("UserName");
// const userIdfromlocalstorage = localStorage.getItem("userid");
const usernamefromlocalstorage = localStorage.getItem("Name");
// console.log(userIdfromlocalstorage);
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
  // element.innerHTML = hours + ":" + min;
}, 1000);
