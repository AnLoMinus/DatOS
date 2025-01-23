document.addEventListener("DOMContentLoaded", function () {
  // ניהול גודל טקסט
  const fontSizeBtn = document.getElementById("fontSizeBtn");
  const fontSizes = ["normal", "large", "larger"];
  let currentFontSize = 0;

  fontSizeBtn.addEventListener("click", function () {
    currentFontSize = (currentFontSize + 1) % fontSizes.length;
    document.querySelectorAll(".prayer-text").forEach((element) => {
      element.className = `prayer-text ${fontSizes[currentFontSize]}`;
    });
  });

  // ניהול נוסח
  const nusachBtn = document.getElementById("nusachBtn");
  const nusachim = ["ספרד", "אשכנז", "עדות המזרח"];
  let currentNusach = 0;

  nusachBtn.addEventListener("click", function () {
    currentNusach = (currentNusach + 1) % nusachim.length;
    // להוסיף לוגיקה להחלפת נוסח
  });

  // ניהול סימניות
  const bookmarkBtn = document.getElementById("bookmarkBtn");

  bookmarkBtn.addEventListener("click", function () {
    const currentPosition = window.scrollY;
    localStorage.setItem("prayerBookmark", currentPosition);
    showNotification("הסימניה נשמרה בהצלחה");
  });

  // ניווט בין חלקי התפילה
  const prevBtn = document.querySelector(".prev-section");
  const nextBtn = document.querySelector(".next-section");
  const sections = document.querySelectorAll(".prayer-section");

  let currentSection = 0;

  function updateNavigation() {
    prevBtn.disabled = currentSection === 0;
    nextBtn.disabled = currentSection === sections.length - 1;

    // עדכון סרגל ההתקדמות
    const progress = ((currentSection + 1) / sections.length) * 100;
    document.querySelector(".progress").style.width = `${progress}%`;
  }

  prevBtn.addEventListener("click", function () {
    if (currentSection > 0) {
      currentSection--;
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
      updateNavigation();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentSection < sections.length - 1) {
      currentSection++;
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
      updateNavigation();
    }
  });

  // התראות
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  // מעקב אחר גלילה
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = Array.from(sections).indexOf(entry.target);
          currentSection = sectionIndex;
          updateNavigation();
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
});
