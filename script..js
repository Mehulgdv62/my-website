
(function () {
  emailjs.init("USwGeER01MM323Vhf");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_iqn3dtz", "template_j4n4uak", this)
      .then(function () {
        alert("Message sent successfully!");
        form.reset();
      }, function (error) {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  });
});

