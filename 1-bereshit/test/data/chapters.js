/**
 * chapters.js
 * קובץ זה מכיל את הנתונים הבסיסיים של פרקי ספר בראשית
 * כולל מספר פרק, כותרת, מספר פסוקים ותיאור
 */

const bereshitChapters = [
  // העתק לכאן את כל המערך bereshitChapters מהקובץ המקורי
];

// חלוקת הפרקים לשלושה חלקים עיקריים
const sections = {
  creation: {
    title: "בריאת העולם והאנושות",
    chapters: [1, 2, 3, 4, 5],
    description: "סיפור הבריאה ותחילת האנושות",
  },
  flood: {
    title: "המבול ודור הפלגה",
    chapters: [6, 7, 8, 9, 10, 11],
    description: "סיפור המבול, בני נח ומגדל בבל",
  },
  patriarchs: {
    title: "סיפורי האבות",
    chapters: Array.from({ length: 39 }, (_, i) => i + 12),
    description: "סיפורי אברהם, יצחק, יעקב ויוסף",
  },
};

export { bereshitChapters, sections };
