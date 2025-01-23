// מידע סטטי על ספרי התורה
const TORAH_STATS = {
  total: {
    books: 5,
    chapters: 187,
    verses: 5845,
    words: 79847,
    letters: 304805,
  },
  books: {
    bereshit: {
      name: "בראשית",
      chapters: 50,
      verses: 1533,
      words: 20613,
      letters: 78064,
    },
    shmot: {
      name: "שמות",
      chapters: 40,
      verses: 1209,
      words: 16713,
      letters: 63529,
    },
    vayikra: {
      name: "ויקרא",
      chapters: 27,
      verses: 859,
      words: 11950,
      letters: 44790,
    },
    bamidbar: {
      name: "במדבר",
      chapters: 36,
      verses: 1288,
      words: 16408,
      letters: 63530,
    },
    dvarim: {
      name: "דברים",
      chapters: 34,
      verses: 956,
      words: 14294,
      letters: 54892,
    },
  },
};

// נוסיף בתחילת הקובץ
function handleError(error, context) {
  console.error(`Error in ${context}:`, error);
  // אפשר להוסיף כאן לוגיקה להצגת שגיאות למשתמש
}

class TorahProgressTracker {
  constructor() {
    this.progress = {
      bereshit: { implemented: 0, total: TORAH_STATS.books.bereshit },
      shmot: { implemented: 0, total: TORAH_STATS.books.shmot },
      vayikra: { implemented: 0, total: TORAH_STATS.books.vayikra },
      bamidbar: { implemented: 0, total: TORAH_STATS.books.bamidbar },
      dvarim: { implemented: 0, total: TORAH_STATS.books.dvarim },
    };
  }

  async calculateProgress() {
    try {
      // בדיקת התקדמות לכל ספר
      await this.checkBookProgress("bereshit");
      await this.checkBookProgress("shmot");
      await this.checkBookProgress("vayikra");
      await this.checkBookProgress("bamidbar");
      await this.checkBookProgress("dvarim");

      return this.calculateTotalProgress();
    } catch (error) {
      console.error("Error calculating progress:", error);
      return null;
    }
  }

  async checkBookProgress(bookName) {
    try {
      console.log(`Checking progress for ${bookName}...`);
      const response = await fetch(`/${bookName}/${bookName}.json`);

      if (!response.ok) {
        console.warn(
          `No data file found for ${bookName}, using default values`
        );
        this.progress[bookName].implemented = {
          chapters: 0,
          verses: 0,
          words: 0,
          letters: 0,
        };
        return;
      }

      const data = await response.json();
      console.log(`Loaded data for ${bookName}:`, data);

      // אם יש רק metadata, סימן שהקובץ ריק מתוכן אמיתי
      if (data.metadata && Object.keys(data).length === 1) {
        this.progress[bookName].implemented = {
          chapters: 0,
          verses: 0,
          words: 0,
          letters: 0,
        };
        return;
      }

      // המשך החישוב הרגיל...
      const implementedChapters = Object.keys(data).filter(
        (key) =>
          key.startsWith("chapter") &&
          data[key].verses &&
          data[key].verses.length > 0
      ).length;

      let implementedVerses = 0;
      let implementedWords = 0;
      let implementedLetters = 0;

      Object.keys(data).forEach((key) => {
        if (key.startsWith("chapter") && data[key].verses) {
          implementedVerses += data[key].verses.length;
          data[key].verses.forEach((verse) => {
            if (verse.text) {
              implementedWords += verse.text.trim().split(/\s+/).length;
              implementedLetters += verse.text.replace(
                /[\s\u0591-\u05C7]/g,
                ""
              ).length;
            }
          });
        }
      });

      this.progress[bookName].implemented = {
        chapters: implementedChapters,
        verses: implementedVerses,
        words: implementedWords,
        letters: implementedLetters,
      };
    } catch (error) {
      console.error(`Error checking progress for ${bookName}:`, error);
      // במקרה של שגיאה, נשתמש בערכי ברירת מחדל
      this.progress[bookName].implemented = {
        chapters: 0,
        verses: 0,
        words: 0,
        letters: 0,
      };
    }
  }

  calculateTotalProgress() {
    const total = {
      chapters: 0,
      verses: 0,
      words: 0,
      letters: 0,
    };

    const implemented = {
      chapters: 0,
      verses: 0,
      words: 0,
      letters: 0,
    };

    Object.keys(this.progress).forEach((book) => {
      const bookStats = this.progress[book];
      total.chapters += bookStats.total.chapters;
      total.verses += bookStats.total.verses;
      total.words += bookStats.total.words;
      total.letters += bookStats.total.letters;

      implemented.chapters += bookStats.implemented.chapters;
      implemented.verses += bookStats.implemented.verses;
      implemented.words += bookStats.implemented.words;
      implemented.letters += bookStats.implemented.letters;
    });

    return {
      total,
      implemented,
      percentages: {
        chapters: (implemented.chapters / total.chapters) * 100,
        verses: (implemented.verses / total.verses) * 100,
        words: (implemented.words / total.words) * 100,
        letters: (implemented.letters / total.letters) * 100,
      },
    };
  }

  createProgressDisplay() {
    try {
      const container = document.createElement("div");
      container.className = "torah-progress-container";
      container.innerHTML = `
        <div class="progress-header">
          <h2>התקדמות כתיבת ספר התורה</h2>
          <div class="progress-summary"></div>
        </div>
        <div class="books-progress"></div>
        <div class="total-progress-bars"></div>
      `;

      this.calculateProgress().then((progress) => {
        if (!progress) return;

        // הצגת סיכום כללי
        const summaryDiv = container.querySelector(".progress-summary");
        summaryDiv.innerHTML = `
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-label">פרקים:</span>
              <span class="stat-value">${progress.implemented.chapters}/${
          progress.total.chapters
        }</span>
              <span class="stat-percentage">(${progress.percentages.chapters.toFixed(
                1
              )}%)</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">פסוקים:</span>
              <span class="stat-value">${progress.implemented.verses}/${
          progress.total.verses
        }</span>
              <span class="stat-percentage">(${progress.percentages.verses.toFixed(
                1
              )}%)</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">מילים:</span>
              <span class="stat-value">${progress.implemented.words}/${
          progress.total.words
        }</span>
              <span class="stat-percentage">(${progress.percentages.words.toFixed(
                1
              )}%)</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">אותיות:</span>
              <span class="stat-value">${progress.implemented.letters}/${
          progress.total.letters
        }</span>
              <span class="stat-percentage">(${progress.percentages.letters.toFixed(
                1
              )}%)</span>
            </div>
          </div>
        `;

        // הצגת התקדמות לפי ספרים
        const booksDiv = container.querySelector(".books-progress");
        Object.keys(this.progress).forEach((book) => {
          const bookProgress = this.progress[book];
          const percentageChapters =
            (bookProgress.implemented.chapters / bookProgress.total.chapters) *
            100;

          booksDiv.innerHTML += `
            <div class="book-progress">
              <div class="book-title">${TORAH_STATS.books[book].name}</div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentageChapters}%"></div>
                <span class="progress-text">${percentageChapters.toFixed(
                  1
                )}%</span>
              </div>
              <div class="book-stats">
                פרקים: ${bookProgress.implemented.chapters}/${
            bookProgress.total.chapters
          }
              </div>
            </div>
          `;
        });

        // הצגת סרגלי התקדמות כלליים
        const progressBarsDiv = container.querySelector(".total-progress-bars");
        ["chapters", "verses", "words", "letters"].forEach((type) => {
          progressBarsDiv.innerHTML += `
            <div class="total-progress-item">
              <div class="progress-label">${this.getHebrewLabel(type)}</div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${
                  progress.percentages[type]
                }%"></div>
                <span class="progress-text">${progress.percentages[
                  type
                ].toFixed(1)}%</span>
              </div>
            </div>
          `;
        });
      });

      return container;
    } catch (error) {
      handleError(error, "createProgressDisplay");
      return document.createElement("div"); // מחזיר אלמנט ריק במקרה של שגיאה
    }
  }

  getHebrewLabel(type) {
    const labels = {
      chapters: "פרקים",
      verses: "פסוקים",
      words: "מילים",
      letters: "אותיות",
    };
    return labels[type];
  }
}
