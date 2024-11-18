document.addEventListener("DOMContentLoaded", function () {
  // הוספת אנימציות לכרטיסי הספרים
  const bookCards = document.querySelectorAll(".book-card-mini");

  bookCards.forEach((card) => {
    card.addEventListener("click", function () {
      const bookPage = this.dataset.bookPage;
      if (bookPage) {
        window.location.href = bookPage;
      }
    });
  });

  // אפקט הופעה הדרגתית לסקציות
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.5s ease-in-out";
    observer.observe(section);
  });
});
