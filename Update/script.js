const roles = ["Web Developer", "Python Developer", "Programmer", "Designer"];
const h4 = document.getElementById("role");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
  const currentFullText = roles[roleIndex];
  
  if (isDeleting) {
    // Remove a character
    h4.innerHTML = currentFullText.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // Deleting is usually faster
  } else {
    // Add a character
    h4.innerHTML = currentFullText.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150;
  }

  // Logic: Switch to deleting if word is finished
  if (!isDeleting && charIndex === currentFullText.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at the end of the word
  } 
  // Logic: Switch to typing if word is fully deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500; // Small pause before starting next word
  }

  setTimeout(type, typeSpeed);
}

// Initial call
type();
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the class when the element is in view
      entry.target.classList.add('visible');
    }
    else {
      // Scrolled OUT of view: Remove the class to reset
      entry.target.classList.remove('visible');
    }
  }),{threshold: 0.1};
});

// Start watching the H1
const targets = document.querySelectorAll('.sectionheading');
targets.forEach((el)=>{
  observer.observe(el);
});

let hamburger = document.getElementById('hamburger');
let navmenu = document.getElementById('navmenu');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
});;