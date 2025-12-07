class ParashotBar {
  constructor() {
    this.parashotData = [];
    this.activeParasha = null;
    this.highlightedVerses = new Set();

    this.init();
  }

  async init() {
    await this.loadParashotData();
    this.createStyles();
    this.createBar();
    this.attachEventListeners();
    this.setupVerseHighlighting();
  }

  async loadParashotData() {
    try {
      const response = await fetch("../parashiot.md");
      const text = await response.text();
      const lines = text.split(/\r?\n/);
      let current = null;

      lines.forEach((line) => {
        const nameMatch = line.match(/^\d+\. \*\*(.+?)\*\*/);
        if (nameMatch) {
          current = { name: nameMatch[1].trim(), description: "" };
          this.parashotData.push(current);
          return;
        }

        if (!current) return;
        const descMatch = line.match(/^\s*- \*\*תיאור\*\*: (.+)/);
        if (descMatch) {
          current.description = descMatch[1].trim();
        }
      });
    } catch (error) {
      console.error("Failed to load parashiot:", error);
      this.parashotData = [];
    }
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
    const parashaItems =
      this.parashotData.length === 0
        ? "<li class=\"parasha-item\">לא נמצאו פרשיות</li>"
        : this.parashotData
            .map(
              (parasha) => `
            <li class="parasha-item" data-parasha="${parasha.name}">
              <span class="parasha-name">${parasha.name}</span>
              ${
                parasha.description
                  ? `<div class="parasha-description">${parasha.description}</div>`
                  : ""
              }
            </li>
          `
            )
            .join("");

    bar.innerHTML = `
      <h3>פרשיות השבוע</h3>
      <ul class="parashot-list">${parashaItems}</ul>
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
      const chapterNum = Number(verse.dataset.chapter);

      this.parashotData.forEach((parasha) => {
        if (parasha.chapters && parasha.chapters.includes(chapterNum)) {
          verse.dataset.parasha = parasha.name;
        }
      });
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
    const parashaData = this.parashotData.find(
      (item) => item.name === parashaName
    );
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
    if (parashaData.chapters && parashaData.chapters.length) {
      parashaData.chapters.forEach((chapter) => {
        const verses = document.querySelectorAll(
          `.verse-item[data-chapter="${chapter}"]`
        );
        verses.forEach((verse) => {
          verse.classList.add("verse-highlight");
          this.highlightedVerses.add(verse);
        });
      });

      this.scrollToChapter(parashaData.chapters[0]);
    }
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
