(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("form[data-mail]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var message = String(data.get("message") || "").trim();
      var kind = form.getAttribute("data-mail");
      var subject;
      var body;

      if (kind === "newsletter") {
        subject = "MuzafarLex newsletter";
        body = "Please add this address to the MuzafarLex newsletter:\n" + email;
      } else {
        subject = "Message for MuzafarLex" + (name ? " — " + name : "");
        body = message + "\n\n— " + (name || "Reader") + "\n" + email;
      }

      var note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Your mail app is opening with this message addressed to Muzafar.";
      }

      window.location.href =
        "mailto:muzafarbhurt1@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  });
})();
