class TorahChaptersHighlighter {
  constructor() {
    this.chaptersData = null;
  }

  async init() {
    try {
      const response = await fetch("/data/torah-chapters.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.chaptersData = await response.json();
      this.highlightCurrentChapter();
    } catch (error) {
      console.error("Error loading chapters data:", error);
    }
  }

  highlightCurrentChapter() {
    // הלוגיקה להדגשת הפרק הנוכחי
  }
}

// נחכה שהדף יטען לפני הפעלת הקוד
document.addEventListener("DOMContentLoaded", () => {
  const highlighter = new TorahChaptersHighlighter();
  highlighter.init();
});
