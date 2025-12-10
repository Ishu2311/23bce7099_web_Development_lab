// Button handlers
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const form = document.getElementById("registrationForm");

  backBtn.addEventListener("click", () => {
    // Redirect to home page
    window.location.href = "index.html";
  });

  cancelBtn.addEventListener("click", () => {
    // Clear form fields or reload current page
    form.reset();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    // You can add form submit logic here
  });
});
