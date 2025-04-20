function login(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "12345") {
    localStorage.setItem("admin", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("login-error").style.display = "block";
  }
}

if (window.location.pathname.includes("admin/index.html")) {
  const isLoggedIn = localStorage.getItem("admin");
  if (isLoggedIn !== "true") {
    window.location.href = "login.html";
  }
}
