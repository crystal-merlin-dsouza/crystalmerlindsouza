let btn = document.querySelector(".darkmode");


btn.addEventListener("click", () => {
  if (btn.innerHTML === `<i class="fi fi-tr-brightness"></i>`) {
    btn.innerHTML = `<i class="fi fi-tr-moon"></i>`;
    btn.style.color = "black";
    btn.style.backgroundColor = "grey";
    
    document.body.classList.add("lightmode");
  } else {
    btn.innerHTML = `<i class="fi fi-tr-brightness"></i>`;
    btn.style.color = "orange";
    btn.style.backgroundColor = "rgb(43, 43, 43)";
    document.body.classList.remove("lightmode");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Function to show the clicked section and hide others
  function showSection(event) {
      event.preventDefault();

      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove("active"));

      // Hide all sections
      sections.forEach(section => section.style.display = "none");

      // Add active class to the clicked link
      this.classList.add("active");

      // Show the clicked section
      const sectionId = this.getAttribute("href").substring(1);
      document.getElementById(sectionId).style.display = "block";
  }

  // Add click event listener to each nav link
  navLinks.forEach(link => {
      link.addEventListener("click", showSection);
  });
});

function toggleVisibility(idToShow) {
  // Hide both sections
  document.getElementById('lang-icon').classList.add('hidden');
  document.getElementById('tools-icon').classList.add('hidden');
  
  // Show the selected section
  document.getElementById(idToShow).classList.remove('hidden');
}

// Initialize by showing the language section
document.addEventListener("DOMContentLoaded", function() {
  toggleVisibility('lang-icon');
});
