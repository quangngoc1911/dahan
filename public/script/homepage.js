if (document.querySelector(".container").offsetWidth <= 500) {
  document.querySelector(".background").src = "/img/background-phone.jpg";
}
function move() {
  const input = document.querySelector(".input > input");
  if (input.value != "") {
    location.replace("/app.html");
    localStorage.setItem("name", input.value);
  } else {
    alert("Nhập tên cái đi nè :3");
  }
}
