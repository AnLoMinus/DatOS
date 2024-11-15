async function loadMitzvot() {
  try {
    const response = await fetch("mitzvot.json");
    const data = await response.json();

    renderMitzvot(data.positive, "positive");
    renderMitzvot(data.negative, "negative");

    // הוספת מאזיני אירועים למודלים
    addModalListeners();
  } catch (error) {
    console.error("Error loading mitzvot:", error);
  }
}

function renderMitzvot(mitzvotList, type) {
  const container = document.querySelector(
    `.mitzvot-column.${type} .mitzvot-list-numbered`
  );

  mitzvotList.forEach((mitzvah) => {
    const mitzvahElement = createMitzvahElement(mitzvah, type);
    container.appendChild(mitzvahElement);
  });
}

function createMitzvahElement(mitzvah, type) {
  const div = document.createElement("div");
  div.className = "mitzvah-item";
  div.setAttribute("data-mitzvah-id", mitzvah.id);

  div.innerHTML = `
        <span class="mitzvah-number">${mitzvah.id}</span>
        <div class="mitzvah-content">
            <strong>${mitzvah.name}</strong>
            <span class="mitzvah-description">${mitzvah.description}</span>
            <span class="mitzvah-source">מקור: ${mitzvah.source}</span>
            <button class="details-btn" onclick="showMitzvahDetails(${mitzvah.id}, '${type}')">
                פרטים נוספים
            </button>
        </div>
    `;

  return div;
}

function showMitzvahDetails(id, type) {
  // פתיחת מודל עם פרטי המצווה
  const modal = document.createElement("div");
  modal.className = "mitzvah-modal";

  // טעינת הפרטים מה-JSON
  fetch("mitzvot.json")
    .then((response) => response.json())
    .then((data) => {
      const mitzvah = data[type].find((m) => m.id === id);
      if (mitzvah) {
        renderMitzvahModal(modal, mitzvah);
      }
    });
}

function renderMitzvahModal(modal, mitzvah) {
  modal.innerHTML = `
        <div class="mitzvah-modal-content">
            <div class="modal-header">
                <h2>${mitzvah.name}</h2>
                <button class="close-modal-btn" onclick="closeModal(this)">סגור</button>
                <span class="modal-category">${mitzvah.category}</span>
            </div>
            
            <div class="modal-verses">
                ${mitzvah.verses
                  .map(
                    (verse) => `
                    <div class="verse-container">
                        <div class="verse-text">${verse.text}</div>
                        <div class="verse-source">${verse.source}</div>
                    </div>
                `
                  )
                  .join("")}
            </div>

            <div class="mitzvah-details-grid">
                <div class="detail-card">
                    <h3>מקורות</h3>
                    <p><strong>רמב״ם:</strong> ${mitzvah.details.rambam}</p>
                    <p><strong>ספר החינוך:</strong> ${
                      mitzvah.details.chinuch
                    }</p>
                </div>

                <div class="detail-card">
                    <h3>הסבר</h3>
                    <p>${mitzvah.details.explanation}</p>
                </div>

                <div class="detail-card">
                    <h3>מנהגים</h3>
                    <ul>
                        ${mitzvah.details.customs
                          .map(
                            (custom) => `
                            <li>${custom}</li>
                        `
                          )
                          .join("")}
                    </ul>
                </div>

                <div class="detail-card">
                    <h3>יישום מודרני</h3>
                    <ul>
                        ${mitzvah.details.modern_applications
                          .map(
                            (app) => `
                            <li>${app}</li>
                        `
                          )
                          .join("")}
                    </ul>
                </div>
            </div>
            
        </div>
    `;

  document.body.appendChild(modal);
}

function closeModal(button) {
  button.closest(".mitzvah-modal").remove();
}

// טעינת המצוות בטעינת העמוד
document.addEventListener("DOMContentLoaded", loadMitzvot);
