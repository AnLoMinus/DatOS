document.addEventListener("DOMContentLoaded", function () {
  const openPositions = document.querySelectorAll(".open-position");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close-modal");
  const contactButtons = document.querySelectorAll(".contact-button");

  // Map positions to their respective modals
  const modalMap = {
    "Front-end": "frontendModal",
    "Back-end": "backendModal",
    DevOps: "devopsModal",
    QA: "qaModal",
    Translator: "translatorModal",
    "Community Manager": "communityModal",
  };

  // Function to create WhatsApp message
  function createWhatsAppMessage(modal, formData) {
    const title = modal.querySelector("h2").textContent;
    const description = modal.querySelector(".modal-body p").textContent;
    const requirements = Array.from(
      modal.querySelectorAll(".modal-body ul")[0].children
    )
      .map((li) => li.textContent)
      .join("\n- ");
    const responsibilities = Array.from(
      modal.querySelectorAll(".modal-body ul")[1].children
    )
      .map((li) => li.textContent)
      .join("\n- ");

    const message = `
שלום, אני ${formData.name} מעוניין/ת בתפקיד ${title}

פרטי התקשרות:
טלפון: ${formData.phone}
אימייל: ${formData.email}

ניסיון קודם:
${formData.experience}

הערות נוספות:
${formData.notes}

תיאור התפקיד:
${description}

דרישות התפקיד:
- ${requirements}

תחומי אחריות:
- ${responsibilities}
    `.trim();

    return encodeURIComponent(message);
  }

  // Function to show contact form modal
  function showContactForm(modal) {
    const contactFormHTML = `
      <div class="contact-form-modal">
        <div class="contact-form-content">
          <span class="close-form">&times;</span>
          <h3>פרטי התקשרות</h3>
          <form id="contactForm" class="contact-form">
            <div class="form-group">
              <label for="name">שם מלא *</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="phone">טלפון *</label>
              <input type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-group">
              <label for="email">אימייל *</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="experience">ניסיון קודם</label>
              <textarea id="experience" name="experience" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="notes">הערות נוספות</label>
              <textarea id="notes" name="notes" rows="3"></textarea>
            </div>
            <div class="form-actions">
              <button type="submit" class="submit-form">שלח לוואטסאפ</button>
              <button type="button" class="cancel-form">ביטול</button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", contactFormHTML);

    const contactFormModal = document.querySelector(".contact-form-modal");
    const closeForm = document.querySelector(".close-form");
    const cancelForm = document.querySelector(".cancel-form");
    const contactForm = document.getElementById("contactForm");

    contactFormModal.style.display = "block";
    setTimeout(() => contactFormModal.classList.add("show"), 10);

    function closeContactForm() {
      contactFormModal.classList.remove("show");
      setTimeout(() => {
        contactFormModal.remove();
      }, 300);
    }

    closeForm.addEventListener("click", closeContactForm);
    cancelForm.addEventListener("click", closeContactForm);

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: this.name.value,
        phone: this.phone.value,
        email: this.email.value,
        experience: this.experience.value || "לא צוין",
        notes: this.notes.value || "אין הערות נוספות",
      };

      const message = createWhatsAppMessage(modal, formData);
      const whatsappURL = `https://wa.me/972543285967?text=${message}`;
      window.open(whatsappURL, "_blank");
      closeContactForm();
    });
  }

  // Add click event to contact buttons
  contactButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const modal = this.closest(".modal");
      showContactForm(modal);
    });
  });

  // Rest of the modal functionality...
  openPositions.forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".contributor-card");
      const role = card.querySelector("h3").textContent;
      const modalId = modalMap[role];

      if (modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      }
    });
  });

  function closeModal(modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      closeModal(modal);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modals.forEach((modal) => {
        if (modal.classList.contains("show")) {
          closeModal(modal);
        }
      });
    }
  });

  // הוספת פונקציונליות לתוכנית החניכה
  const mentorshipBtn = document.querySelector(".mentorship-btn");

  function createMentorshipModal() {
    const modalHTML = `
      <div class="mentorship-modal">
        <div class="mentorship-content">
          <span class="close-modal">&times;</span>
          <h2>🎓 תוכנית החניכה שלנו</h2>
          <p>הצטרפו לתוכנית החניכה המקיפה שלנו ולמדו מהמומחים המובילים בתחום</p>
          
          <div class="mentorship-tracks">
            <div class="track-card">
              <h3>🎨 Front-end Track</h3>
              <p>למדו פיתוח צד לקוח מתקדם</p>
              <ul>
                <li>React & Vue.js</li>
                <li>Modern CSS</li>
                <li>Performance Optimization</li>
              </ul>
              <button class="contact-button" data-track="frontend">הרשמה למסלול</button>
            </div>
            
            <div class="track-card">
              <h3>⚙️ Back-end Track</h3>
              <p>למדו פיתוח שרת ותשתיות</p>
              <ul>
                <li>Node.js & Python</li>
                <li>Database Design</li>
                <li>API Development</li>
              </ul>
              <button class="contact-button" data-track="backend">הרשמה למסלול</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    const modal = document.querySelector(".mentorship-modal");
    const closeBtn = modal.querySelector(".close-modal");
    const trackButtons = modal.querySelectorAll(".contact-button");

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      setTimeout(() => modal.remove(), 300);
    });

    trackButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const track = e.target.dataset.track;
        const message = createMentorshipMessage(track);
        window.open(
          `https://wa.me/972543285967?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      });
    });

    modal.classList.add("show");
  }

  function createMentorshipMessage(track) {
    const tracks = {
      frontend: "Front-end Development",
      backend: "Back-end Development",
    };

    return `
שלום, אני מעוניין/ת להצטרף לתוכנית החניכה במסלול ${tracks[track]}

אשמח לקבל פרטים נוספים על:
- תכני הקורס
- משך התוכנית
- דרישות קדם
- עלויות

תודה!
    `.trim();
  }

  mentorshipBtn.addEventListener("click", createMentorshipModal);
});
