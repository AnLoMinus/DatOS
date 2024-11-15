class ToolsBar {
  constructor() {
    this.init();
    this.isOpen = false;
  }

  init() {
    // יצירת כפתור הפעלה
    const toggle = document.createElement("div");
    toggle.className = "tools-toggle";
    toggle.innerHTML = '<span class="icon">⚙️</span>';
    toggle.addEventListener("click", () => this.toggleTools());

    // יצירת סרגל הכלים
    const toolsBar = document.createElement("div");
    toolsBar.className = "tools-bar";

    // כותרת ראשית
    const header = document.createElement("h2");
    header.className = "tools-header";
    header.innerHTML = "כלים שימושיים 🛠️";
    toolsBar.appendChild(header);

    // יצירת כלי הגימטריה
    const gematriaSection = this.createGematriaSection();
    toolsBar.appendChild(gematriaSection);

    // יצירת מחשבון תאריכים
    const dateSection = this.createDateConverterSection();
    toolsBar.appendChild(dateSection);

    // הוספת סקציית הפרשיות
    const parashaSection = this.createParashaSection();
    toolsBar.appendChild(parashaSection);

    // הוספה לדף
    document.body.appendChild(toggle);
    document.body.appendChild(toolsBar);
  }

  toggleTools() {
    const toolsBar = document.querySelector(".tools-bar");
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      toolsBar.classList.add("active");
    } else {
      toolsBar.classList.remove("active");
    }
  }

  createGematriaSection() {
    const section = document.createElement("div");
    section.className = "tool-section";

    const title = document.createElement("h3");
    title.innerHTML = '<span class="icon">🔢</span> גימטריה';
    section.appendChild(title);

    // טבלת ערכי גימטריה
    const table = document.createElement("table");
    table.className = "gematria-table";

    const gematriaValues = {
      א: 1,
      ב: 2,
      ג: 3,
      ד: 4,
      ה: 5,
      ו: 6,
      ז: 7,
      ח: 8,
      ט: 9,
      י: 10,
      כ: 20,
      ל: 30,
      מ: 40,
      נ: 50,
      ס: 60,
      ע: 70,
      פ: 80,
      צ: 90,
      ק: 100,
      ר: 200,
      ש: 300,
      ת: 400,
    };

    // יצירת טבלה של 4 עמודות
    let html = "<tr><th>אות</th><th>ערך</th><th>אות</th><th>ערך</th></tr>";
    let entries = Object.entries(gematriaValues);

    for (let i = 0; i < entries.length; i += 2) {
      html += "<tr>";
      html += `<td>${entries[i][0]}</td><td>${entries[i][1]}</td>`;
      if (entries[i + 1]) {
        html += `<td>${entries[i + 1][0]}</td><td>${entries[i + 1][1]}</td>`;
      }
      html += "</tr>";
    }

    table.innerHTML = html;
    section.appendChild(table);

    // אזור הזנת טקסט וחישוב
    const inputSection = document.createElement("div");
    inputSection.className = "gematria-input-section";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "gematria-input";
    input.placeholder = "הכנס מילה לחישוב...";
    input.addEventListener("input", (e) =>
      this.calculateGematria(e.target.value)
    );

    const result = document.createElement("span");
    result.className = "gematria-result";

    inputSection.appendChild(input);
    inputSection.appendChild(result);
    section.appendChild(inputSection);

    return section;
  }

  calculateGematria(text) {
    const gematriaValues = {
      א: 1,
      ב: 2,
      ג: 3,
      ד: 4,
      ה: 5,
      ו: 6,
      ז: 7,
      ח: 8,
      ט: 9,
      י: 10,
      כ: 20,
      ל: 30,
      מ: 40,
      נ: 50,
      ס: 60,
      ע: 70,
      פ: 80,
      צ: 90,
      ק: 100,
      ר: 200,
      ש: 300,
      ת: 400,
      ך: 20,
      ם: 40,
      ן: 50,
      ף: 80,
      ץ: 90,
    };

    let sum = 0;
    for (let char of text) {
      if (gematriaValues[char]) {
        sum += gematriaValues[char];
      }
    }

    const resultElement = document.querySelector(".gematria-result");
    resultElement.textContent = sum > 0 ? `ערך גימטרי: ${sum}` : "";
  }

  createDateConverterSection() {
    const section = document.createElement("div");
    section.className = "tool-section";

    const title = document.createElement("h3");
    title.innerHTML = '<span class="icon">📅</span> המרת תאריכים';
    section.appendChild(title);

    // המרה מלועזי לעברי
    const gregorianSection = document.createElement("div");
    gregorianSection.className = "date-input-section";

    const gregorianLabel = document.createElement("label");
    gregorianLabel.textContent = "תאריך לועזי:";

    const gregorianInput = document.createElement("input");
    gregorianInput.type = "date";
    gregorianInput.className = "date-input";
    gregorianInput.addEventListener("change", (e) =>
      this.convertToHebrew(e.target.value)
    );

    const hebrewResult = document.createElement("div");
    hebrewResult.className = "date-result";
    hebrewResult.id = "hebrewResult";

    gregorianSection.appendChild(gregorianLabel);
    gregorianSection.appendChild(gregorianInput);
    gregorianSection.appendChild(hebrewResult);

    // המרה מעברי ללועזי
    const hebrewSection = document.createElement("div");
    hebrewSection.className = "date-input-section";

    const hebrewLabel = document.createElement("label");
    hebrewLabel.textContent = "תאריך עברי:";

    // יצירת תיבות בחירה לתאריך עברי
    const hebrewDay = this.createSelect(1, 30, "יום");
    const hebrewMonth = this.createHebrewMonthSelect();
    const hebrewYear = this.createSelect(5700, 5900, "שנה");

    const convertButton = document.createElement("button");
    convertButton.textContent = "המר";
    convertButton.className = "convert-button";
    convertButton.addEventListener("click", () =>
      this.convertToGregorian(
        hebrewDay.value,
        hebrewMonth.value,
        hebrewYear.value
      )
    );

    const gregorianResult = document.createElement("div");
    gregorianResult.className = "date-result";
    gregorianResult.id = "gregorianResult";

    hebrewSection.appendChild(hebrewLabel);
    hebrewSection.appendChild(hebrewDay);
    hebrewSection.appendChild(hebrewMonth);
    hebrewSection.appendChild(hebrewYear);
    hebrewSection.appendChild(convertButton);
    hebrewSection.appendChild(gregorianResult);

    section.appendChild(gregorianSection);
    section.appendChild(hebrewSection);

    return section;
  }

  createSelect(start, end, placeholder) {
    const select = document.createElement("select");
    select.className = "hebrew-date-select";

    const option = document.createElement("option");
    option.value = "";
    option.textContent = placeholder;
    select.appendChild(option);

    for (let i = start; i <= end; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }
    return select;
  }

  createHebrewMonthSelect() {
    const months = [
      "תשרי",
      "חשון",
      "כסלו",
      "טבת",
      "שבט",
      "אדר",
      "ניסן",
      "אייר",
      "סיון",
      "תמוז",
      "אב",
      "אלול",
    ];

    const select = document.createElement("select");
    select.className = "hebrew-date-select";

    const option = document.createElement("option");
    option.value = "";
    option.textContent = "חודש";
    select.appendChild(option);

    months.forEach((month, index) => {
      const option = document.createElement("option");
      option.value = index + 1;
      option.textContent = month;
      select.appendChild(option);
    });

    return select;
  }

  convertToHebrew(gregorianDate) {
    const [year, month, day] = gregorianDate.split("-");
    const date = new Date(year, month - 1, day);

    const formatter = new Intl.DateTimeFormat("he-u-ca-hebrew", {
      day: "numeric",
      month: "long",
      year: "numeric",
      calendar: "hebrew",
    });

    const hebrewDate = formatter.format(date);
    document.getElementById("hebrewResult").textContent = hebrewDate;
  }

  convertToGregorian(day, month, year) {
    // כאן צריך להשתמש בספריית המרה מתאימה
    // לצורך הדוגמה נציג הודעה
    document.getElementById(
      "gregorianResult"
    ).textContent = `יתווסף בקרוב - המרה מתאריך עברי ${day}/${month}/${year}`;
  }

  createParashaSection() {
    const section = document.createElement("div");
    section.className = "tool-section";

    const title = document.createElement("h3");
    title.innerHTML = '<span class="icon">📖</span> פרשיות השבוע';

    const openButton = document.createElement("button");
    openButton.className = "convert-button";
    openButton.textContent = "פתח רשימת פרשיות";
    openButton.addEventListener("click", () => this.openParashaModal());

    section.appendChild(title);
    section.appendChild(openButton);

    return section;
  }

  createParashaModal() {
    const overlay = document.createElement("div");
    overlay.className = "parasha-overlay";

    const modal = document.createElement("div");
    modal.className = "parasha-modal";

    const header = document.createElement("div");
    header.className = "parasha-modal-header";

    const title = document.createElement("h2");
    title.className = "parasha-modal-title";
    title.innerHTML = '<span class="icon">📖</span> פרשיות התורה';

    const closeButton = document.createElement("button");
    closeButton.className = "close-modal";
    closeButton.innerHTML = "×";
    closeButton.onclick = () => this.closeParashaModal();

    header.appendChild(title);
    header.appendChild(closeButton);

    const content = document.createElement("div");
    content.className = "parasha-content";

    // נטען את תוכן הפרשיות
    this.loadParashiot().then((parashaData) => {
      content.innerHTML = this.formatParashiot(parashaData);
    });

    modal.appendChild(header);
    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  async loadParashiot() {
    try {
      const response = await fetch("parashiot.md");
      const text = await response.text();
      return text;
    } catch (error) {
      console.error("Error loading parashiot:", error);
      return null;
    }
  }

  formatParashiot(markdownText) {
    if (!markdownText) return "<p>שגיאה בטעינת הפרשיות</p>";

    const parashaList = document.createElement("div");
    parashaList.className = "parasha-list";

    const books = markdownText.split("## **");
    books.shift();

    books.forEach((book) => {
      const bookSection = document.createElement("div");
      bookSection.className = "book-section";

      const bookNameMatch = book.match(/(.*?)\*\*/);
      if (bookNameMatch) {
        const bookName = bookNameMatch[1].trim();
        const parashotCount = book.match(/\((\d+) פרשיות\)/);

        const bookTitle = document.createElement("h3");
        bookTitle.className = "book-title";
        bookTitle.innerHTML = `${bookName} ${
          parashotCount ? parashotCount[0] : ""
        }`;
        bookSection.appendChild(bookTitle);

        const parashotText = book.split("\n\n");
        parashotText.forEach((parashaText) => {
          const parashaMatch = parashaText.match(/\d+\. \*\*(.*?)\*\*/);
          if (parashaMatch) {
            const parashaItem = document.createElement("div");
            parashaItem.className = "parasha-item";

            // שם הפרשה
            const nameDiv = document.createElement("div");
            nameDiv.className = "parasha-name";
            nameDiv.textContent = parashaMatch[1];
            parashaItem.appendChild(nameDiv);

            // תיאור
            const descMatch = parashaText.match(
              /\*\*תיאור\*\*: (.*?)(?=\s+\*\*פרקים|$)/
            );
            if (descMatch) {
              const descDiv = document.createElement("div");
              descDiv.className = "parasha-details";
              descDiv.textContent = descMatch[1].trim();
              parashaItem.appendChild(descDiv);
            }

            // סטטיסטיקה מורחבת
            const statsDiv = document.createElement("div");
            statsDiv.className = "parasha-stats";

            // פרקים
            const chaptersMatch = parashaText.match(/\*\*פרקים\*\*: ([^*]+)/);
            if (chaptersMatch) {
              const chaptersSpan = document.createElement("span");
              chaptersSpan.innerHTML = `<i class="icon">📖</i> פרקים: ${chaptersMatch[1].trim()}`;
              statsDiv.appendChild(chaptersSpan);
            }

            // פסוקים
            const versesMatch = parashaText.match(/\*\*פסוקים\*\*: (\d+)/);
            if (versesMatch) {
              const versesSpan = document.createElement("span");
              versesSpan.innerHTML = `<i class="icon">📝</i> ${versesMatch[1]} פסוקים`;
              statsDiv.appendChild(versesSpan);
            }

            // מילים
            const wordsMatch = parashaText.match(/\*\*מילים\*\*: ([\d,]+)/);
            if (wordsMatch) {
              const wordsSpan = document.createElement("span");
              wordsSpan.innerHTML = `<i class="icon">📚</i> ${wordsMatch[1]} מילים`;
              statsDiv.appendChild(wordsSpan);
            }

            // אותיות
            const lettersMatch = parashaText.match(/\*\*אותיות\*\*: ([\d,]+)/);
            if (lettersMatch) {
              const lettersSpan = document.createElement("span");
              lettersSpan.innerHTML = `<i class="icon">✍️</i> ${lettersMatch[1]} אותיות`;
              statsDiv.appendChild(lettersSpan);
            }

            parashaItem.appendChild(statsDiv);

            // מידע נוסף
            const additionalInfo = document.createElement("div");
            additionalInfo.className = "parasha-additional-info";

            // מיקום
            const locationMatch = parashaText.match(/\*\*מיקום\*\*: ([^*]+)/);
            if (locationMatch) {
              const locationDiv = document.createElement("div");
              locationDiv.className = "parasha-location";
              locationDiv.innerHTML = `<i class="icon">📍</i> ${locationMatch[1].trim()}`;
              additionalInfo.appendChild(locationDiv);
            }

            // מצוות
            const mitzvotMatch = parashaText.match(/\*\*מצוות\*\*: ([^*]+)/);
            if (mitzvotMatch) {
              const mitzvotDiv = document.createElement("div");
              mitzvotDiv.className = "parasha-mitzvot";
              mitzvotDiv.innerHTML = `<i class="icon">📜</i> ${mitzvotMatch[1].trim()}`;
              additionalInfo.appendChild(mitzvotDiv);
            }

            // מילים ראשונות
            const firstWordsMatch = parashaText.match(
              /\*\*מילים ראשונות\*\*: ([^*]+)/
            );
            if (firstWordsMatch) {
              const firstWordsDiv = document.createElement("div");
              firstWordsDiv.className = "parasha-first-words";
              firstWordsDiv.innerHTML = `<i class="icon">🔤</i> מילים ראשונות: ${firstWordsMatch[1].trim()}`;
              additionalInfo.appendChild(firstWordsDiv);
            }

            parashaItem.appendChild(additionalInfo);
            bookSection.appendChild(parashaItem);
          }
        });

        parashaList.appendChild(bookSection);
      }
    });

    return parashaList.outerHTML;
  }

  openParashaModal() {
    if (!document.querySelector(".parasha-modal")) {
      this.createParashaModal();
    }
    document.querySelector(".parasha-overlay").classList.add("active");
    document.querySelector(".parasha-modal").classList.add("active");
  }

  closeParashaModal() {
    document.querySelector(".parasha-overlay").classList.remove("active");
    document.querySelector(".parasha-modal").classList.remove("active");
  }
}

// אתחול סרגל הכלים כשהדף נטען
document.addEventListener("DOMContentLoaded", () => {
  new ToolsBar();
});
