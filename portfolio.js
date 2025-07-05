 document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const sections = document.querySelectorAll("section, .div1, .main-about");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

  
        const contactData = {
            name: name,
            email: email,
            message: message
        };

    
        localStorage.setItem("contactFormData", JSON.stringify(contactData));

    
        alert("Your message has been saved!");
        form.reset();
        alert("Your Data has been send");
    });
});
const Data = ()=>{
  console.log(JSON.parse(localStorage.getItem("contactFormData")));
}

