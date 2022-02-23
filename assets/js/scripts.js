let loginBtn = document.getElementById("login-btn");
let popup = document.getElementById("popup-login");
let close = document.getElementById("close-btn");

loginBtn.onclick = function () {
    popup.style.display = "block";
}

close.onclick = function () {
    popup.style.display = "none";
}
