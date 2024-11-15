class TorahChaptersHighlighter {
  constructor() {
    this.chaptersData = null;
    this.currentParasha = "";
    this.currentDay = "";
    this.currentBook = this.getCurrentBook();
  }

  getCurrentBook() {
    // מזהה את הספר הנוכחי לפי ה-URL או class בדף
    const path = window.location.pathname;
    if (path.includes("bereshit")) return "genesis";
    if (path.includes("shmot")) return "exodus";
    if (path.includes("vayekra")) return "leviticus";
    if (path.includes("bamidbar")) return "numbers";
    if (path.includes("dvarim")) return "deuteronomy";
    return "";
  }

  async init() {
    try {
      const response = await fetch("/data/torah-chapters.json");
      this.chaptersData = await response.json();
      this.currentParasha = await this.getCurrentParasha();
      this.currentDay = this.getDayOfWeek();

      // רק אם אנחנו בדף הנכון
      if (this.shouldHighlight()) {
        this.highlightRelevantChapters();
      }
    } catch (error) {
      console.error("Error loading chapters data:", error);
    }
  }

  shouldHighlight() {
    // בודק אם הפרשה הנוכחית שייכת לספר הנוכחי
    const parashaData = this.chaptersData.parshiot[this.currentParasha];
    return parashaData && parashaData.book === this.currentBook;
  }

  async getCurrentParasha() {
    try {
      // כאן נשתמש ב-API של לוח שנה עברי
      const response = await fetch(
        "https://www.hebcal.com/hebcal?cfg=json&maj=on&month=x&ss=on&mod=on&year=now"
      );
      const data = await response.json();

      // מוצא את פרשת השבוע הקרובה
      const parasha = data.items.find(
        (item) =>
          item.category === "parashat" && new Date(item.date) >= new Date()
      );

      return parasha ? parasha.hebrew : "בראשית";
    } catch (error) {
      console.error("Error fetching current parasha:", error);
      return "בראשית";
    }
  }

  highlightRelevantChapters() {
    const parashaData = this.chaptersData.parshiot[this.currentParasha];
    if (!parashaData) return;

    // מסמן את כל הפרקים הרלוונטיים
    document.querySelectorAll("[data-chapter]").forEach((element) => {
      const chapterRef = element.getAttribute("data-chapter");

      // מסמן פרקים של הפרשה הנוכחית
      if (parashaData.chapters.includes(chapterRef)) {
        element.classList.add("highlighted-chapter", "current-parasha");
      }
      // מסמן פרקים קשורים
      else if (parashaData.related.includes(chapterRef)) {
        element.classList.add("highlighted-chapter");
      }
    });
  }
}

// הפעלת הסקריפט בכל הדפים
document.addEventListener("DOMContentLoaded", () => {
  const highlighter = new TorahChaptersHighlighter();
  highlighter.init();
});
