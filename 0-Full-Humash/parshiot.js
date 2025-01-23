// מודל נתונים של הפרשות בספר בראשית
const parshiot = {
  bereshit: {
    name: "בראשית",
    chapters: [1, 2, 3, 4, 5, 6],
    startChapter: 1,
    endChapter: 6,
    aliyot: {
      first: { start: "1:1", end: "1:5" },
      second: { start: "1:6", end: "1:8" },
      // להוסיף את שאר העליות
    },
  },
  noach: {
    name: "נח",
    chapters: [7, 8, 9, 10, 11],
    startChapter: 7,
    endChapter: 11,
    aliyot: {
      // להוסיף את העליות
    },
  },
  // להוסיף את שאר הפרשות
};

// פונקציה לטעינת פרשה ספציפית
function loadParasha(parashaId) {
  // TODO: להוסיף לוגיקה לטעינת תוכן הפרשה
}
