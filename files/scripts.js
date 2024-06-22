document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Typing animation for the role
  const roles = ["Web Developer", "Designer", "Engineer", "Competitive Programmer"];
  let currentRole = 0;
  let charIndex = 0;
  const roleElement = document.getElementById("role");

  function typeRole() {
    if (charIndex < roles[currentRole].length) {
      roleElement.textContent += roles[currentRole].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100);
    } else {
      setTimeout(eraseRole, 2000);
    }
  }

  function eraseRole() {
    if (charIndex > 0) {
      roleElement.textContent = roles[currentRole].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, 50);
    } else {
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(typeRole, 500);
    }
  }

  typeRole();
});

function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = document.getElementById("contactForm");
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector("textarea").value;

  const subject = `Contact Form Submission from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  const mailtoLink = `mailto:saptarshisen0@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
