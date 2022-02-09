let username = prompt("Kullanıcı Adınızı Giriniz")

let greeting = document.querySelector("#myName")
greeting.innerHTML = `${greeting.innerHTML} <small>${username}</small>`

var span = document.getElementById('myClock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);


