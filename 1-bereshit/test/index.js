/**
 * index.js
 * קובץ ראשי המחבר את כל המודולים של האפליקציה
 */

// ייבוא המודולים
import chapterModel from "./models/ChapterModel.js";
import { bereshitChapters, sections } from "./data/chapters.js";
import {
  calculateStats,
  displayChapter,
  calculateBookProgress,
  getDayNumber,
} from "./utils/analytics.js";
import {
  numberToHebrewLetter,
  convertHebrewLetterToNumber,
} from "./test/utils/converters.js";
import {
  searchChapters,
  highlightSearchResults,
  debounce,
} from "./utils/search.js";
import {
  loadChapters,
  showChapterDetails,
  closeChapterDetails,
  toggleVerseDetails,
} from "./utils/ui.js";

// אתחול האפליקציה
async function initializeApp() {
  try {
    // טעינת נתוני הפרקים
    await chapterModel.loadChapterData();

    // טעינת הפרקים לממשק המשתמש
    await loadChapters();

    // הגדרת מאזיני אירועים
    setupEventListeners();

    console.log("Application initialized successfully");
  } catch (error) {
    console.error("Error initializing application:", error);
  }
}

// הגדרת מאזיני אירועים
function setupEventListeners() {
  // חיפוש
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) =>
      debounce(searchChapters(e.target.value), 300)
    );
  }

  // מודל פרטי פרק
  const modal = document.getElementById("chapterDetailsModal");
  if (modal) {
    window.onclick = function (event) {
      if (event.target === modal) {
        closeChapterDetails();
      }
    };
  }

  // כפתור התקדמות
  const progressBtn = document.getElementById("showProgressBtn");
  if (progressBtn) {
    progressBtn.addEventListener("click", () => {
      const progress = calculateBookProgress();
      showProgressModal(progress);
    });
  }
}

// ייצוא פונקציות וערכים שצריכים להיות זמינים גלובלית
window.toggleVerseDetails = toggleVerseDetails;
window.showChapterDetails = showChapterDetails;
window.closeChapterDetails = closeChapterDetails;

// הפעלת האפליקציה כשהדף נטען
document.addEventListener("DOMContentLoaded", initializeApp);

// ייצוא לשימוש במודולים אחרים
export { initializeApp, setupEventListeners };
