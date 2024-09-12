let userName = prompt("Lütfen Adınızı Giriniz: ")

if(userName) {
    document.getElementById("myName").innerText = userName;
} else {
    document.getElementById("myName").innerText = "Misafir";
}

function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();


hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

document.getElementById("myClock").innerText = hours + ":" + minutes + ":" + seconds;

setTimeout(showTime, 1000);
}

window.onload = function() {
    showTime();
}
