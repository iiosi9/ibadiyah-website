function showContact() {
  const email = document.getElementById("email");
  email.style.display = "block";
}

function changeLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      for (const key in data) {
        const el = document.querySelector(`[data-key="${key}"]`);
        if (el) el.textContent = data[key];
      }
    });
}
