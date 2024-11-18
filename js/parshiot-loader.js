class ParshiotLoader {
  constructor() {
    this.data = null;
    this.container = document.querySelector(".container");
  }

  async loadParshiot() {
    try {
      const response = await fetch("/data/parshiot.json");
      this.data = await response.json();
      this.renderBooks();
    } catch (error) {
      console.error("Error loading parshiot:", error);
      this.showError();
    }
  }

  renderBooks() {
    this.data.books.forEach((book) => {
      const bookSection = this.createBookSection(book);
      this.container.appendChild(bookSection);
    });
  }

  createBookSection(book) {
    const section = document.createElement("section");
    section.className = "book-section";
    section.id = book.id;

    section.innerHTML = `
            <h2 class="section-title">
                <span class="section-icon">${book.icon}</span>
                ספר ${book.name}
                <div class="section-divider"></div>
            </h2>
            
            <div class="book-description">
                <p>${book.description}</p>
            </div>

            <div class="parshiot-table">
                <table>
                    <thead>
                        <tr>
                            <th>פרשה</th>
                            <th>פרקים</th>
                            <th>נושא מרכזי</th>
                            <th>תקציר</th>
                            <th>פירושים</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.renderParshiot(book.parshiot)}
                    </tbody>
                </table>
            </div>
        `;

    return section;
  }

  renderParshiot(parshiot) {
    return parshiot
      .map(
        (parasha) => `
            <tr>
                <td class="parasha-name">${parasha.name}</td>
                <td>${parasha.chapters}</td>
                <td>${parasha.mainTopic}</td>
                <td>${parasha.summary}</td>
                <td>
                    <button class="commentary-btn" 
                            onclick="parshiotLoader.showCommentary('${
                              parasha.name
                            }', ${JSON.stringify(parasha.commentary).replace(
          /"/g,
          "&quot;"
        )})">
                        הצג פירושים
                    </button>
                </td>
            </tr>
        `
      )
      .join("");
  }

  showCommentary(parashaName, commentary) {
    const modal = document.createElement("div");
    modal.className = "commentary-modal";

    modal.innerHTML = `
        <div class="commentary-content">
            <button class="close-commentary-btn" onclick="this.parentElement.parentElement.remove()">×</button>
            <h3>פירושים לפרשת ${parashaName}</h3>
            
            <div class="commentary-grid">
                <div class="commentary-item">
                    <h4>רש״י</h4>
                    <p>${commentary.rashi}</p>
                </div>
                <div class="commentary-item">
                    <h4>רמב״ן</h4>
                    <p>${commentary.ramban}</p>
                </div>
                <div class="commentary-item">
                    <h4>אור החיים</h4>
                    <p>${commentary.orHachaim}</p>
                </div>
            </div>

            ${
              commentary.additional
                ? `
                <div class="additional-commentaries">
                    <h4>פירושים נוספים</h4>
                    <div class="additional-grid">
                        ${Object.entries(commentary.additional)
                          .map(
                            ([name, text]) => `
                            <div class="additional-item">
                                <h5>${name}</h5>
                                <p>${text}</p>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `
                : ""
            }
        </div>
    `;

    // סגירת המודל בלחיצה מחוץ לתוכן
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    // סגירה בלחיצה על ESC
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") {
          modal.remove();
        }
      },
      { once: true }
    );

    document.body.appendChild(modal);
  }

  showError() {
    const error = document.createElement("div");
    error.className = "error-message";
    error.innerHTML = `
            <p>😢 מצטערים, אירעה שגיאה בטעינת הפרשיות.</p>
            <p>אנא נסו לרענן את העמוד.</p>
        `;
    this.container.appendChild(error);
  }
}

// יצירת המופע והפעלתו
const parshiotLoader = new ParshiotLoader();
document.addEventListener("DOMContentLoaded", () =>
  parshiotLoader.loadParshiot()
);

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("backgroundAudio");

  // מנסה להפעיל את הסרטון אוטומטית
  try {
    audio.play().catch(function (error) {
      console.log("Auto-play prevented:", error);
    });
  } catch (e) {
    console.log("Audio playback error:", e);
  }
});
