/**
 * ChapterModel.js
 * קובץ זה מכיל את המודל לניהול נתוני הפרקים
 * כולל טעינת נתונים מה-JSON וניהול מצב הנתונים
 */

import { bereshitChapters, sections } from "../data/chapters.js";

class ChapterModel {
  constructor() {
    this.chaptersData = null;
  }

  // פונקציה לטעינת הנתונים מקובץ ה-JSON
  async loadChapterData() {
    try {
      const response = await fetch("bereshit.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.chaptersData = await response.json();
      return this.chaptersData;
    } catch (error) {
      console.error("Error loading chapter data:", error);
      return null;
    }
  }

  // פונקציות נוספות לניהול הנתונים
  getChapter(chapterNumber) {
    return this.chaptersData
      ? this.chaptersData[`chapter${chapterNumber}`]
      : null;
  }

  getVerses(chapterNumber) {
    const chapter = this.getChapter(chapterNumber);
    return chapter ? chapter.verses : null;
  }
}

// יצירת instance יחיד של המודל
const chapterModel = new ChapterModel();

export { chapterModel as default, ChapterModel };
