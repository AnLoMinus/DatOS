class ParashotBar {
  constructor() {
    this.parashotData = {
      בראשית: {
        chapters: [1, 2, 3, 4, 5, 6],
        verses: [1, 31],
        description: "בריאת העולם ותחילת האנושות",
      },
      נח: {
        chapters: [6, 7, 8, 9, 10, 11],
        verses: [9, 32],
        description: "סיפור המבול ומגדל בבל",
      },
      "לך לך": {
        chapters: [12, 13, 14, 15, 16, 17],
        verses: [1, 27],
        description: "מסעו של אברהם",
      },
      וירא: {
        chapters: [18, 19, 20, 21, 22],
        verses: [1, 24],
        description: "העקידה וסיפור סדום ועמורה",
      },
      "חיי שרה": {
        chapters: [23, 24, 25],
        verses: [1, 18],
        description: "מות שרה ונישואי יצחק",
      },
      תולדות: {
        chapters: [25, 26, 27, 28],
        verses: [19, 9],
        description: "סיפורי יצחק ויעקב ועשו",
      },
      ויצא: {
        chapters: [28, 29, 30, 31, 32],
        verses: [10, 3],
        description: "יעקב בבית לבן",
      },
      וישלח: {
        chapters: [32, 33, 34, 35, 36],
        verses: [4, 43],
        description: "מפגש יעקב ועשו",
      },
      וישב: {
        chapters: [37, 38, 39, 40],
        verses: [1, 23],
        description: "מכירת יוסף",
      },
      מקץ: {
        chapters: [41, 42, 43, 44],
        verses: [1, 17],
        description: "חלומות פרעה ועליית יוסף",
      },
      ויגש: {
        chapters: [44, 45, 46, 47],
        verses: [18, 27],
        description: "התוודעות יוסף לאחיו",
      },
      ויחי: {
        chapters: [47, 48, 49, 50],
        verses: [28, 26],
        description: "ברכות יעקב ומותו",
      },
    };

    this.activeParasha = null;
    this.highlightedVerses = new Set();

    this.init();
  }

  init() {
    this.createStyles();
    this.createBar();
    this.attachEventListeners();
    this.setupVerseHighlighting();
  }

  createStyles() {
    const existingStyles = this.createBaseStyles();
    const newStyles = `
      .parasha-description {
        font-size: 0.8em;
        color: #666;
        margin-top: 0.25rem;
        display: none;
      }

      .parasha-item:hover .parasha-description {
        display: block;
      }

      .chapter-highlight {
        animation: chapter-glow 2s ease-in-out;
      }

      @keyframes chapter-glow {
        0% { box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); }
        50% { box-shadow: 0 0 20px rgba(0, 123, 255, 0.8); }
        100% { box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); }
      }

      .verse-highlight {
        animation: verse-highlight 2s infinite;
        border: 2px solid #007bff !important;
        background: rgba(0, 123, 255, 0.1) !important;
      }

      @keyframes verse-highlight {
        0% { border-color: #007bff; }
        50% { border-color: #0056b3; }
        100% { border-color: #007bff; }
      }

      .parashot-bar {
        transition: all 0.3s ease;
        opacity: 0.9;
      }

      .parashot-bar:hover {
        opacity: 1;
        transform: translateX(-5px);
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = existingStyles + newStyles;
    document.head.appendChild(styleSheet);
  }

  createBar() {
    // Create toggle button for mobile
    const toggleButton = document.createElement("button");
    toggleButton.className = "toggle-bar";
    toggleButton.textContent = "פרשיות";
    toggleButton.onclick = () => {
      const bar = document.querySelector(".parashot-bar");
      bar.classList.toggle("show");
    };
    document.body.appendChild(toggleButton);

    // Create main bar
    const bar = document.createElement("div");
    bar.className = "parashot-bar";
    bar.innerHTML = `
      <h3>פרשיות השבוע</h3>
      <ul class="parashot-list">
        ${Object.entries(this.parashotData)
          .map(
            ([name, data]) => `
          <li class="parasha-item" data-parasha="${name}">
            <span class="parasha-name">${name}</span>
            <span class="parasha-chapters">פרקים ${data.chapters[0]}-${
              data.chapters[data.chapters.length - 1]
            }</span>
            <div class="parasha-description">${data.description}</div>
          </li>
        `
          )
          .join("")}
      </ul>
    `;

    // Insert the bar into the parashotContainer
    const container = document.getElementById("parashotContainer");
    if (container) {
      container.appendChild(bar);
    } else {
      document.body.appendChild(bar);
    }
  }

  setupVerseHighlighting() {
    // Add verse highlighting functionality
    const verses = document.querySelectorAll(".verse-item");
    verses.forEach((verse) => {
      const chapterNum = verse.dataset.chapter;
      const verseNum = verse.dataset.verseNumber;

      // Find which parasha this verse belongs to
      for (const [parashaName, data] of Object.entries(this.parashotData)) {
        if (data.chapters.includes(Number(chapterNum))) {
          verse.dataset.parasha = parashaName;
          break;
        }
      }
    });
  }

  attachEventListeners() {
    document.querySelectorAll(".parasha-item").forEach((item) => {
      item.addEventListener("click", () => {
        const parashaName = item.dataset.parasha;
        this.highlightParasha(parashaName);
      });
    });
  }

  highlightParasha(parashaName) {
    const parashaData = this.parashotData[parashaName];
    if (!parashaData) return;

    // Clear previous highlights
    this.clearHighlights();

    // Set new active parasha
    this.activeParasha = parashaName;

    // Add active state to clicked item
    const parashaItem = document.querySelector(
      `.parasha-item[data-parasha="${parashaName}"]`
    );
    if (parashaItem) {
      parashaItem.classList.add("active");
    }

    // Highlight relevant verses
    parashaData.chapters.forEach((chapter) => {
      const verses = document.querySelectorAll(
        `.verse-item[data-chapter="${chapter}"]`
      );
      verses.forEach((verse) => {
        verse.classList.add("verse-highlight");
        this.highlightedVerses.add(verse);
      });
    });

    // Scroll to first chapter
    this.scrollToChapter(parashaData.chapters[0]);
  }

  clearHighlights() {
    // Clear previous highlights
    this.highlightedVerses.forEach((verse) => {
      verse.classList.remove("verse-highlight");
    });
    this.highlightedVerses.clear();

    // Clear active parasha
    document.querySelectorAll(".parasha-item.active").forEach((item) => {
      item.classList.remove("active");
    });

    this.activeParasha = null;
  }

  scrollToChapter(chapterNumber) {
    const chapterElement = document.querySelector(
      `.chapter-item[data-chapter="${chapterNumber}"]`
    );
    if (chapterElement) {
      chapterElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Add temporary highlight effect
      chapterElement.classList.add("chapter-highlight");
      setTimeout(() => {
        chapterElement.classList.remove("chapter-highlight");
      }, 2000);
    }
  }
}

// Initialize when DOM is loaded and verses are ready
document.addEventListener("DOMContentLoaded", () => {
  // Wait a short moment to ensure all verses are rendered
  setTimeout(() => {
    const parashotBar = new ParashotBar();

    // Make instance available globally for debugging
    window.parashotBar = parashotBar;
  }, 500);
});
