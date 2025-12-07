class DailyLearningSystem {
  constructor() {
    this.addNavLink();

    this.dailyContent = {
      torah: {
        title: "תורה",
        icon: "🕊️",
        content: {
          parasha: "",
          aliya: "",
          verses: [],
        },
      },
      mishna: {
        title: "משנה",
        icon: "📚",
        content: {
          masechet: "",
          perek: "",
          mishna: "",
        },
      },
      gemara: {
        title: "גמרא",
        icon: "📜",
        content: {
          masechet: "",
          daf: "",
          amud: "",
        },
      },
      halacha: {
        title: "הלכה",
        icon: "⚖️",
        content: {
          topic: "",
          source: "",
          details: "",
        },
      },
    };

    this.learningStats = {
      pagesLearned: 0,
      minutesLearned: 0,
      completionRate: 0,
    };

    this.createModal();
    this.init();
  }

  async init() {
    // טעינת התוכן היומי
    await this.loadDailyContent();
    // טעינת הסטטיסטיקות
    this.loadStats();
    // הוספת מאזיני אירועים
    this.addEventListeners();
    // עדכון התצוגה
    this.updateUI();
  }

  async loadDailyContent() {
    try {
      // כאן יש להוסיף קריאת API אמיתית לקבלת התוכן היומי
      // לדוגמה, נשתמש בתוכן סטטי
      this.dailyContent.torah.content = {
        parasha: "וירא",
        aliya: "שלישי",
        verses: ["בראשית י״ח:א׳-ט״ו"],
      };

      this.dailyContent.mishna.content = {
        masechet: "ברכות",
        perek: "א",
        mishna: "א-ב",
      };

      this.dailyContent.gemara.content = {
        masechet: "ברכות",
        daf: "ב",
        amud: "א",
      };

      this.dailyContent.halacha.content = {
        topic: "הלכות תפילה",
        source: "שולחן ערוך או״ח",
        details: "סימן פ״ט: זמן תפילת שחרית",
      };
    } catch (error) {
      console.error("Error loading daily content:", error);
    }
  }

  loadStats() {
    const savedStats = localStorage.getItem("learningStats");
    if (savedStats) {
      this.learningStats = JSON.parse(savedStats);
    }
  }

  updateUI() {
    // עדכון סטטיסטיקות (אם קיימות על הדף)
    const stats = document.querySelectorAll(".stat .number");
    if (stats.length >= 3) {
      stats[0].textContent = this.learningStats.pagesLearned;
      stats[1].textContent = this.learningStats.minutesLearned;
      stats[2].textContent = `${this.learningStats.completionRate}%`;
    }

    const progress = document.querySelector(".daily-progress .progress");
    const progressText = document.querySelector(".daily-progress .progress-text");
    if (progress && progressText) {
      progress.style.width = `${this.learningStats.completionRate}%`;
      progressText.textContent = `${this.learningStats.completionRate}%`;
    }

    // עדכון תוכן הלימוד
    this.updateContentSection("torahContent", this.dailyContent.torah);
    this.updateContentSection("mishnaContent", this.dailyContent.mishna);
    this.updateContentSection("gemaraContent", this.dailyContent.gemara);
    this.updateContentSection("halachaContent", this.dailyContent.halacha);
  }

  updateContentSection(elementId, data) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = `
        <h4>${data.title}</h4>
        ${this.formatContent(data.content)}
      `;
    }
  }

  formatContent(content) {
    return Object.entries(content)
      .map(
        ([key, value]) => `
        <div class="content-item">
          <strong>${key}:</strong> ${value}
        </div>
      `
      )
      .join("");
  }

  addEventListeners() {
    // כפתור התחלת לימוד
    document.querySelector(".start-learning")?.addEventListener("click", () => {
      this.startLearning();
    });

    // כפתור שמירת התקדמות
    document.querySelector(".save-progress")?.addEventListener("click", () => {
      this.saveProgress();
    });

    // כפתור שיתוף
    document.querySelector(".share-progress")?.addEventListener("click", () => {
      this.shareProgress();
    });

    // מעקב אחר זמן למידה
    document.querySelectorAll(".section-content").forEach((section) => {
      section.addEventListener("click", () => {
        this.trackLearningTime();
      });
    });
  }

  startLearning() {
    // פתיחת חלון למידה או הפעלת טיימר
    this.learningStats.pagesLearned++;
    this.updateUI();
    alert("התחלת ללמוד! בהצלחה! 🎉");
  }

  saveProgress() {
    localStorage.setItem("learningStats", JSON.stringify(this.learningStats));
    alert("ההתקדמות נשמרה! 💾");
  }

  shareProgress() {
    const shareText = `
      למדתי היום:
      📚 ${this.learningStats.pagesLearned} דפים
      ⏱️ ${this.learningStats.minutesLearned} דקות
      🎯 ${this.learningStats.completionRate}% מהיעד
    `;

    if (navigator.share) {
      navigator.share({
        title: "הלימוד היומי שלי",
        text: shareText,
      });
    } else {
      alert("שיתוף התקדמות: \n" + shareText);
    }
  }

  trackLearningTime() {
    // הוספת דקת לימוד
    this.learningStats.minutesLearned++;
    // חישוב אחוז השלמה
    this.learningStats.completionRate = Math.min(
      Math.round((this.learningStats.minutesLearned / 60) * 100),
      100
    );
    this.updateUI();
  }

  addNavLink() {
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) {
      const dailyLearningLink = document.createElement("a");
      dailyLearningLink.href = "daily-learning/daily-learning.html";
      dailyLearningLink.className = "nav-link daily-learning-btn";
      dailyLearningLink.innerHTML = `
        <span class="icon">📚</span>
        לימוד יומי
      `;
      navLinks.appendChild(dailyLearningLink);

      // הוספת מאזין אירועים לפתיחת המודל
      dailyLearningLink.addEventListener("click", (e) => {
        if (document.getElementById("dailyLearningModal")) {
          e.preventDefault();
          this.openModal();
        }
      });
    }
  }

  createModal() {
    const modal = document.createElement("div");
    modal.className = "daily-learning-modal";
    modal.id = "dailyLearningModal";

    modal.innerHTML = `
      <div class="daily-learning-content">
        <button class="close-modal">×</button>
        <h2>📚 סדר לימוד יומי</h2>
        <div class="learning-schedule">
          ${this.createScheduleHTML()}
        </div>
        <div class="daily-progress">
          <h3>🎯 התקדמות יומית</h3>
          <div class="progress-bar">
            <div class="progress" style="width: 0%"></div>
          </div>
          <span class="progress-text">0%</span>
        </div>
        <div class="action-buttons">
          <button class="start-learning">
            <span class="icon">▶️</span>
            התחל ללמוד
          </button>
          <button class="save-progress">
            <span class="icon">💾</span>
            שמור התקדמות
          </button>
          <a href="daily-learning/daily-learning.html" class="full-page-link">
            <span class="icon">📑</span>
            למעבר לעמוד המלא
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // הוספת מאזין אירועים לסגירת המודל
    modal.querySelector(".close-modal").addEventListener("click", () => {
      this.closeModal();
    });

    // סגירת המודל בלחיצה מחוץ לתוכן
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });
  }

  createScheduleHTML() {
    const scheduleItems = {
      תורה: ["חומש", "נביאים", "כתובים"],
      משנה: ["זרעים", "מועד", "נשים", "נזיקין", "קדשים", "טהרות"],
      גמרא: ["דף יומי", "הלכה יומית", "עמוד יומי"],
      הלכה: ["שולחן ערוך", "משנה ברורה", "קיצור שולחן ערוך"],
    };

    return Object.entries(scheduleItems)
      .map(
        ([category, items]) => `
        <div class="learning-category">
          <h3>${category}</h3>
          <div class="learning-items">
            ${items
              .map(
                (item) => `
              <div class="learning-item">
                <input type="checkbox" id="${item.replace(/\s+/g, "_")}">
                <label for="${item.replace(/\s+/g, "_")}">${item}</label>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `
      )
      .join("");
  }

  openModal() {
    const modal = document.getElementById("dailyLearningModal");
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  closeModal() {
    const modal = document.getElementById("dailyLearningModal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }
}

// הפעלת המערכת כשהדף נטען
document.addEventListener("DOMContentLoaded", () => {
  new DailyLearningSystem();
});
