/**
 * ui.js
 * קובץ זה מכיל את כל הפונקציות הקשורות לממשק המשתמש
 *
 * הפונקציות הנדרשות להעתקה:
 * - loadChapters() - טעינת הפרקים לממשק
 * - showChapterDetails() - הצגת פרטי פרק במודל
 * - closeChapterDetails() - סגירת מודל פרטי פרק
 * - toggleVerseDetails() - פתיחה/סגירה של פרטי פסוק
 */

import { chaptersData } from "../models/ChapterModel.js";
import { numberToHebrewLetter } from "./converters.js";
import { calculateBookProgress } from "./analytics.js";

// העתק לכאן את הפונקציות:
// - loadChapters()
// - showChapterDetails()
// - closeChapterDetails()
// - toggleVerseDetails()

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // העתק לכאן את כל ה-event listeners מהקובץ המקורי
});

export {
  loadChapters,
  showChapterDetails,
  closeChapterDetails,
  toggleVerseDetails,
};
