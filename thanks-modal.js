class ThanksModal {
  constructor() {
    this.init();
  }

  async init() {
    // יצירת לינק ל-CSS
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "thanks-modal.css";
    document.head.appendChild(cssLink);

    // טעינת תבנית ה-HTML
    const response = await fetch("thanks-modal.html");
    const html = await response.text();

    // הוספת המודל לדף
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);

    // שמירת רפרנס למודל
    this.modal = document.getElementById("thanksModal");

    // הגדרת אירועים
    const closeBtn = this.modal.querySelector(".close-modal");
    closeBtn.addEventListener("click", () => this.close());

    // סגירת המודל בלחיצה מחוץ לתוכן
    this.modal.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.close();
      }
    });

    // סגירת המודל בלחיצה על ESC
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    });
  }

  show() {
    this.modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

// יצירת מופע גלובלי
window.thanksModal = new ThanksModal();
