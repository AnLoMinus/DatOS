const bereshitChapters = [
  {
    number: 1,
    title: "בריאת העולם בששת ימי המעשה והשבת",
    verses: 31,
    description: "בריאת העולם בששת ימי המעשה והשבת",
  },
  {
    number: 2,
    title: "בריאת האדם, גן עדן וחטא עץ הדעת",
    verses: 25,
    description: "בריאת האדם, גן עדן והאישה",
  },
  {
    number: 3,
    title: "החטא, העונש והגירוש מגן עדן לעולם",
    verses: 24,
    description: "חטא אדם וחוה, העונש והגירוש מגן עדן",
  },
  {
    number: 4,
    title: "קין והבל, הרצח הראשון ותולדות קין",
    verses: 26,
    description: "סיפור קין והבל, צאצאי קין",
  },
  {
    number: 5,
    title: "ספר תולדות אדם מאדם ועד נח",
    verses: 32,
    description: "רשימת הדורות מאדם עד נח",
  },
  {
    number: 6,
    title: "השחתת דור המבול וציווי בניית תיבת נח",
    verses: 22,
    description: "השחתת דור המבול וציווי בניית התיבה",
  },
  {
    number: 7,
    title: "המבול מתחיל ונח נכנס לתיבה עם משפחתו",
    verses: 24,
    description: "תחילת המבול וכניסת בעלי החיים לתיבה",
  },
  {
    number: 8,
    title: "סיום המבול ויציאת נח מהתיבה לארץ החדשה",
    verses: 22,
    description: "סיום המבול ויציאת נח מהתיבה",
  },
  {
    number: 9,
    title: "ברית הקשת בענן וברכת ה' לנח",
    verses: 29,
    description: "ברית ה' עם נח וסימן הקשת",
  },
  {
    number: 10,
    title: "תולדות בני נח ומשפחות העמים בעולם",
    verses: 32,
    description: "רשימת העמים שיצאו מבני נח",
  },
  {
    number: 11,
    title: "מגדל בבל, בלילת השפות ותולדות שם",
    verses: 32,
    description: "סיפור מגדל בבל ותולדות שם עד אברם",
  },
  {
    number: 12,
    title: "קריאת ה' לאברם והליכתו לארץ כנען",
    verses: 20,
    description: "ה' קורא לאברם ללכת לארץ כנען",
  },
  {
    number: 13,
    title: "הפרדות אברם ולוט והבטחת הארץ מחדש",
    verses: 18,
    description: "הפרדות אברם ולוט, הבטחת הארץ",
  },
  {
    number: 14,
    title: "מלחמת המלכים והצלת לוט על ידי אברם",
    verses: 24,
    description: "מלחמת ארבעת המלכים, מלכי-צדק",
  },
  {
    number: 15,
    title: "ברית בין הבתרים והבטחת הזרע לאברם",
    verses: 21,
    description: "ברית ה' עם אברם והבטחת הזרע",
  },
  {
    number: 16,
    title: "הגר שפחת שרי והולדת ישמעאל בן אברם",
    verses: 16,
    description: "לידת ישמעאל להגר",
  },
  {
    number: 17,
    title: "ברית המילה ושינוי השמות אברם ושרי",
    verses: 27,
    description: "שינוי השם לאברהם, ברית המילה",
  },
  {
    number: 18,
    title: "ביקור המלאכים והבטחת הבן לשרה הזקנה",
    verses: 33,
    description: "הבשורה על יצחק, תפילת אברהם על סדום",
  },
  {
    number: 19,
    title: "הפיכת סדום ועמורה והצלת לוט ובנותיו",
    verses: 38,
    description: "הצלת לוט, חורבן סדום ועמורה",
  },
  {
    number: 20,
    title: "אברהם ושרה בגרר ותפילתו על אבימלך",
    verses: 18,
    description: "אברהם ושרה בארץ פלשתים",
  },
  {
    number: 21,
    title: "לידת יצחק וגירוש הגר וישמעאל מהבית",
    verses: 34,
    description: "לידת יצחק, גירוש הגר וישמעאל",
  },
  {
    number: 22,
    title: "עקידת יצחק וניסיון אמונתו של אברהם",
    verses: 24,
    description: "ניסיון העקידה בהר המוריה",
  },
  {
    number: 23,
    title: "מות שרה וקניית מערת המכפלה לקבורה",
    verses: 20,
    description: "מות שרה וקניית מערת המכפלה",
  },
  {
    number: 24,
    title: "שליחת אליעזר למצוא אישה ליצחק מחרן",
    verses: 67,
    description: "שליחת אליעזר למצוא אישה ליצחק",
  },
  {
    number: 25,
    title: "מות אברהם, תולדות ישמעאל ולידת התאומים",
    verses: 34,
    description: "מות אברהם, תולדות ישמעאל",
  },
  {
    number: 26,
    title: "יצחק בגרר, הבארות והברית עם אבימלך",
    verses: 35,
    description: "יצחק בארץ פלשתים, הבארות והברית",
  },
  {
    number: 27,
    title: "יעקב מקבל את ברכות יצחק במקום עשו",
    verses: 46,
    description: "יעקב מקבל את ברכות יצחק במקום עשו",
  },
  {
    number: 28,
    title: "בריחת יעקב לחרן וחלום הסולם בבית-אל",
    verses: 22,
    description: "בריחת יעקב לחרן, חלום הסולם",
  },
  {
    number: 29,
    title: "יעקב בבית לבן ונישואיו ללאה ורחל",
    verses: 35,
    description: "נישואי יעקב ללאה ורחל, לידת הבנים",
  },
  {
    number: 30,
    title: "לידת בני יעקב והסכם הצאן עם לבן",
    verses: 43,
    description: "לידת יתר בני יעקב, הסכם הצאן",
  },
  {
    number: 31,
    title: "בריחת יעקב מלבן והברית בגלעד עימו",
    verses: 55,
    description: "יעקב בורח מלבן, הברית בגלעד",
  },
  {
    number: 32,
    title: "מחניים והמאבק של יעקב עם המלאך",
    verses: 33,
    description: "הכנות למפגש עם עשו, המאבק עם המלאך",
  },
  {
    number: 33,
    title: "המפגש המחודש בין יעקב ועשו אחיו",
    verses: 20,
    description: "פיוס יעקב ועשו, ההתיישבות בשכם",
  },
  {
    number: 34,
    title: "מעשה דינה בשכ ונקמת שמעון ולוי",
    verses: 31,
    description: "מעשה דינה ונקמת שמעון ולוי",
  },
  {
    number: 35,
    title: "חזרה לבית-אל, מות רחל ומות יצחק",
    verses: 29,
    description: "חזרה לבית אל, מות רחל, מות יצחק",
  },
  {
    number: 36,
    title: "תולדות עשו ורשימת אלופי אדום וזרעו",
    verses: 43,
    description: "צאצאי עשו ואלופי אדום",
  },
  {
    number: 37,
    title: "חלומות יוסף ומכירתו למצרים בידי אחיו",
    verses: 36,
    description: "חלומות יוסף ומכירתו למצרים",
  },
  {
    number: 38,
    title: "מעשה יהודה ותמר ולידת פרץ וזרח",
    verses: 30,
    description: "סיפור יהודה ותמר, לידת פרץ וזרח",
  },
  {
    number: 39,
    title: "יוסף בבית פוטיפר והשלכתו לבית הסוהר",
    verses: 23,
    description: "יוסף בבית פוטיפר והשלכתו לכלא",
  },
  {
    number: 40,
    title: "יוסף פותר חלומות שר המשקים והאופים",
    verses: 23,
    description: "יוסף פותר את חלומות שר המשקים והאופים",
  },
  {
    number: 41,
    title: "יוס פותר חלומות פרעה ועולה לגדולה",
    verses: 57,
    description: "יוסף פותר חלומות פרעה ועולה לגדולה",
  },
  {
    number: 42,
    title: "ירידת בני יעקב למצרים לשבור אוכל",
    verses: 38,
    description: "אחי יוסף יורדים למצרים לשבר",
  },
  {
    number: 43,
    title: "האחים חוזרים למצרים עם בנימין הקטן",
    verses: 34,
    description: "האחים חוזרים למצרים עם בנימין",
  },
  {
    number: 44,
    title: "עלילת גביע הכסף ותחנוני יהודה ליוסף",
    verses: 34,
    description: "העלילה על בנימין ותחנוני יהודה",
  },
  {
    number: 45,
    title: "התוודעות יוסף לאחיו והזמנת יעקב למצרים",
    verses: 28,
    description: "יוסף מתגלה לאחיו ושולח להביא את יעקב",
  },
  {
    number: 46,
    title: "ירידת יעקב למצרים עם כל משפחתו",
    verses: 34,
    description: "יעקב יורד למצרים, רשימת צאצאיו",
  },
  {
    number: 47,
    title: "התיישבות בני ישראל בארץ גושן במצרים",
    verses: 31,
    description: "משפחת יעקב מתיישבת בגושן",
  },
  {
    number: 48,
    title: "ברכת יעקב לאפרים ומנשה בני יוסף",
    verses: 22,
    description: "יעקב מברך את בני יוסף",
  },
  {
    number: 49,
    title: "ברכות יעקב לשנים עשר בניו לפני מותו",
    verses: 33,
    description: "ברכות יעקב לבניו לפני מותו",
  },
  {
    number: 50,
    title: "מות יעקב, קבורתו בכנען ומות יוסף",
    verses: 26,
    description: "קבורת יעקב בכנען ומות יוסף",
  },
];

// חלוקת הפרקים לושה חלקים עקרים
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

// פונקציה לחישוב סטטיסטיקות
function calculateStats() {
  const totalVerses = bereshitChapters.reduce(
    (sum, chapter) => sum + chapter.verses,
    0
  );
  const averageVerses = (totalVerses / bereshitChapters.length).toFixed(1);

  return {
    chapters: bereshitChapters.length,
    verses: totalVerses,
    average: averageVerses,
  };
}

// פונקציה להצגת פרק
function displayChapter(chapterNumber) {
  const chapter = bereshitChapters[chapterNumber - 1];
  if (!chapter) return null;

  return {
    title: chapter.title,
    verses: chapter.verses,
    description: chapter.description,
    number: chapter.number,
  };
}

// נוסיף משתנה גלובלי לשמירת הנתונים
let chaptersData = null;

// נעדכן את פונקציית loadChapters
async function loadChapters() {
  const creationList = document.getElementById("creationChapters");
  const floodList = document.getElementById("floodChapters");
  const patriarchList = document.getElementById("patriarchChapters");

  try {
    const response = await fetch("bereshit.json");
    chaptersData = await response.json(); // שמירת הנתונים במשתנה הגלובלי

    bereshitChapters.forEach((chapter, index) => {
      const li = document.createElement("li");
      li.className = "chapter-item";

      li.innerHTML = `
        <div class="chapter-header">
          <div class="chapter-info">
            <div class="chapter-title">פרק ${numberToHebrewLetter(
              chapter.number
            )}: ${chapter.title}</div>
            <div class="chapter-stats">מספר פסוקים: ${chapter.verses}</div>
          </div>
          <button class="chapter-details-btn">פרטים נוספים</button>
        </div>
        <div class="chapter-accordion"></div>
      `;

      const detailsBtn = li.querySelector(".chapter-details-btn");
      detailsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showChapterDetails(chapter.number);
      });

      // הוספת מאזין לחיצה לכותרת הפרק
      const chapterHeader = li.querySelector(".chapter-header");
      const accordion = li.querySelector(".chapter-accordion");

      chapterHeader.addEventListener("click", async () => {
        const isActive = li.classList.contains("active");
        const currentChapter = chapter.number;

        // סגירת כל האקורדיונים האחרים
        document.querySelectorAll(".chapter-item.active").forEach((item) => {
          if (item !== li) {
            item.classList.remove("active");
            item.querySelector(".chapter-accordion").classList.remove("active");
          }
        });

        // פתיחה/סגירה של האקורדיון הנוכחי
        if (!isActive) {
          li.classList.add("active");
          accordion.classList.add("active");

          // טעינת תוכן הפרק אם עוד לא נטען
          if (!accordion.hasChildNodes()) {
            const chapterData = chaptersData[`chapter${currentChapter}`];
            if (chapterData && chapterData.verses) {
              const versesHtml = chapterData.verses
                .map((verse, verseIndex) => {
                  const wordCount = verse.text.trim().split(/\s+/).length;
                  const letterCount = verse.text.replace(
                    /[\s\u0591-\u05C7]/g,
                    ""
                  ).length;
                  const dayNumber = getDayNumber(verse.number);
                  const hebrewLetter = numberToHebrewLetter(verse.number);

                  // בניית ניתוח המילים
                  const wordsAnalysis = verse.detailed_analysis?.words
                    ? `
                                    <div class="words-analysis">
                                        <h4>ניתוח מילים</h4>
                                        <div class="words-grid">
                                            ${verse.detailed_analysis.words
                                              .map(
                                                (word) => `
                                                <div class="word-card">
                                                    <div class="word-header">
                                                        <span class="word-text">${
                                                          word.word
                                                        }</span>
                                                        <span class="word-meaning">${
                                                          word.meaning
                                                        }</span>
                                                    </div>
                                                    <div class="word-details">
                                                        ${
                                                          word.root
                                                            ? `<div class="word-root">שורש: ${word.root}</div>`
                                                            : ""
                                                        }
                                                        <div class="word-analysis">${
                                                          word.analysis
                                                        }</div>
                                                        ${
                                                          word.connections
                                                            ? `
                                                            <div class="word-connections">
                                                                <h5>קשרים ורמזים:</h5>
                                                                <ul>
                                                                    ${word.connections
                                                                      .map(
                                                                        (
                                                                          connection
                                                                        ) =>
                                                                          `<li>${connection}</li>`
                                                                      )
                                                                      .join("")}
                                                                </ul>
                                                            </div>
                                                        `
                                                            : ""
                                                        }
                                                    </div>
                                                </div>
                                            `
                                              )
                                              .join("")}
                                        </div>
                                    </div>
                                `
                    : "";

                  // בניית צירופי המילים
                  const combinationsSection = verse.detailed_analysis
                    ?.combinations
                    ? `
                                    <div class="combinations-section">
                                        <h4>צירופי מילים</h4>
                                        ${verse.detailed_analysis.combinations
                                          .map(
                                            (combo) => `
                                            <div class="combination-card">
                                                <div class="combination-words">${combo.words.join(
                                                  " "
                                                )}</div>
                                                <div class="combination-meaning">${
                                                  combo.meaning
                                                }</div>
                                                <div class="combination-insights">${
                                                  combo.insights
                                                }</div>
                                            </div>
                                        `
                                          )
                                          .join("")}
                                    </div>
                                `
                    : "";

                  // בניית קריאה לאחור
                  const reverseReading = verse.detailed_analysis
                    ?.reverse_reading
                    ? `
                                    <div class="reverse-reading-section">
                                        <h4>קריאה לאחור</h4>
                                        <div class="reverse-text">${verse.detailed_analysis.reverse_reading.meaning}</div>
                                        <div class="reverse-insights">${verse.detailed_analysis.reverse_reading.insights}</div>
                                    </div>
                                `
                    : "";

                  return `
                                    <div class="verse-item" data-day="${dayNumber}" data-verse-number="${verse.number}">
                                        <div class="verse-header" onclick="toggleVerseDetails(this)">
                                            <div class="verse-number">
                                                <span class="verse-number-text">${verse.number}</span>
                                            </div>
                                            <div class="verse-preview">
                                                <div class="verse-text">
                                                    <span class="verse-letter-inline">${hebrewLetter}.</span> ${verse.text}
                                                </div>
                                                <div class="verse-expand-icon">▼</div>
                                            </div>
                                        </div>
                                        
                                        <div class="verse-details">
                                            <div class="verse-container">
                                                <div class="verse-text-section">
                                                    <div class="verse-translation">${verse.translation}</div>
                                                </div>

                                                ${wordsAnalysis}
                                                ${combinationsSection}
                                                ${reverseReading}

                                                <div class="verse-commentary">${verse.commentary}</div>

                                                <div class="verse-stats">
                                                    <div class="stat-item">
                                                        <span class="stat-icon">📝</span>
                                                        מילים: ${wordCount}
                                                    </div>
                                                    <div class="stat-item">
                                                        <span class="stat-icon">🔤</span>
                                                        אותיות: ${letterCount}
                                                    </div>
                                                    <div class="stat-item">
                                                        <span class="stat-icon">📍</span>
                                                        מספר פסוק: ${verse.number}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                })
                .join("");

              accordion.innerHTML = versesHtml;

              // הוספת אנימציות לפסוקים
              const verses = accordion.querySelectorAll(".verse-item");
              verses.forEach((verse, index) => {
                verse.style.setProperty("--verse-index", index);
              });
            }
          }
        } else {
          li.classList.remove("active");
          accordion.classList.remove("active");
        }
      });

      // הוספת הפרק לרשימה המתאימה
      if (index < 5) {
        creationList.appendChild(li);
      } else if (index < 11) {
        floodList.appendChild(li);
      } else {
        patriarchList.appendChild(li);
      }
    });
  } catch (error) {
    console.error("Error loading chapter data:", error);
  }
}

// נוסיף פונקציה להמרת מספרים לאותיות עבריות
function numberToHebrewLetter(num) {
  const letters = {
    1: "א",
    2: "ב",
    3: "ג",
    4: "ד",
    5: "ה",
    6: "ו",
    7: "ז",
    8: "ח",
    9: "ט",
    10: "י",
    11: "יא",
    12: "יב",
    13: "יג",
    14: "יד",
    15: "טו",
    16: "טז",
    17: "יז",
    18: "יח",
    19: "יט",
    20: "כ",
    21: "כא",
    22: "כב",
    23: "כג",
    24: "כד",
    25: "כה",
    26: "כו",
    27: "כז",
    28: "כח",
    29: "כט",
    30: "ל",
    31: "לא",
    32: "לב",
    33: "לג",
    34: "לד",
    35: "לה",
    36: "לו",
    37: "לז",
    38: "לח",
    39: "לט",
    40: "מ",
    41: "מא",
    42: "מב",
    43: "מג",
    44: "מד",
    45: "מה",
    46: "מו",
    47: "מז",
    48: "מח",
    49: "מט",
    50: "נ",
  };
  return letters[num] || num.toString();
}

// נוסיף את הפונקציה להצגת פרטי הפרק
function showChapterDetails(chapterNumber) {
  if (!chaptersData) {
    console.error("Chapter data not loaded");
    return;
  }

  const modal = document.getElementById("chapterDetailsModal");
  const chapterData = chaptersData[`chapter${chapterNumber}`];

  if (!chapterData) {
    console.error(`No data found for chapter ${chapterNumber}`);
    return;
  }

  console.log("Opening modal for chapter:", chapterNumber); // לוג לבדיקה
  console.log("Chapter data:", chapterData); // לוג לבדיקה

  // עדכון כותרת ותיאור
  document.getElementById(
    "modalChapterTitle"
  ).textContent = `פרק ${numberToHebrewLetter(chapterNumber)} - ${
    chapterData.title
  }`;
  document.getElementById("modalChapterDescription").textContent =
    chapterData.description;

  // הצגת מושגי מתח
  const keyTopicsContainer = document.getElementById("keyTopics");
  if (chapterData.keyTopics) {
    keyTopicsContainer.innerHTML = chapterData.keyTopics
      .map(
        (category) => `
      <div class="topic-category">
        <h4>${category.category}</h4>
        <div class="topic-tags">
          ${category.topics
            .map(
              (topic) => `
            <span class="topic-tag">${topic}</span>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  // הצגת תובנות
  const insightsContainer = document.getElementById("insights");
  if (chapterData.insights) {
    insightsContainer.innerHTML = chapterData.insights
      .map(
        (insight) => `
      <div class="insight-card">
        <h4>${insight.title}</h4>
        <p>${insight.explanation}</p>
      </div>
    `
      )
      .join("");
  }

  // הצגת נושאים מרכזיים
  const themesContainer = document.getElementById("mainThemes");
  if (chapterData.mainThemes) {
    themesContainer.innerHTML = chapterData.mainThemes
      .map(
        (category) => `
      <div class="theme-category">
        <h4>${category.category}</h4>
        <ul>
          ${category.themes
            .map(
              (theme) => `
            <li>${theme}</li>
          `
            )
            .join("")}
        </ul>
      </div>
    `
      )
      .join("");
  }

  // הצגת לקחים מעשיים
  const lessonsContainer = document.getElementById("practicalLessons");
  if (chapterData.practicalLessons) {
    lessonsContainer.innerHTML = chapterData.practicalLessons
      .map(
        (lesson) => `
      <div class="lesson-card">
        <h4>${lesson.lesson}</h4>
        <p>${lesson.application}</p>
      </div>
    `
      )
      .join("");
  }

  modal.style.display = "flex";
}

// נוסיף פונקציה לסגירת המודל
function closeChapterDetails() {
  const modal = document.getElementById("chapterDetailsModal");
  modal.style.display = "none";
}

// סגירת המודל בלחיצה מחוץ לתוכן
window.onclick = function (event) {
  const modal = document.getElementById("chapterDetailsModal");
  if (event.target === modal) {
    closeChapterDetails();
  }
};

// נקרא לפונקציה כשהדף נטען
document.addEventListener("DOMContentLoaded", loadChapters);

// ייצוא הפונקציות והנתונים
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    bereshitChapters,
    sections,
    calculateStats,
    displayChapter,
  };
} else {
  window.bereshitChapters = bereshitChapters;
  window.sections = sections;
  window.calculateStats = calculateStats;
  window.displayChapter = displayChapter;
}

// הוסף פונקציה חדשה לזיהוי היום לפי מספר הפסוק
function getDayNumber(verseNumber) {
  if (verseNumber <= 5) return 1; // יום ראשון
  if (verseNumber <= 8) return 2; // יום שני
  if (verseNumber <= 13) return 3; // יום שלישי
  if (verseNumber <= 19) return 4; // יום רביעי
  if (verseNumber <= 23) return 5; // יום חמישי
  if (verseNumber <= 31) return 6; // יום שישי
  return 0;
}

// נוסיף פונקציה לטיפול בפתיחה וסגירה של פרטי הפסוק
function toggleVerseDetails(header) {
  const verseItem = header.closest(".verse-item");
  const details = verseItem.querySelector(".verse-details");
  const expandIcon = verseItem.querySelector(".verse-expand-icon");

  // סגירת כל הפסוקים האחרים
  document.querySelectorAll(".verse-item.active").forEach((item) => {
    if (item !== verseItem) {
      item.classList.remove("active");
      item.querySelector(".verse-details").style.maxHeight = "0px";
      item.querySelector(".verse-expand-icon").style.transform = "rotate(0deg)";
    }
  });

  // פתיחה/סגירה של הפסוק הנוכחי
  verseItem.classList.toggle("active");
  if (verseItem.classList.contains("active")) {
    details.style.maxHeight = details.scrollHeight + "px";
    expandIcon.style.transform = "rotate(180deg)";
  } else {
    details.style.maxHeight = "0px";
    expandIcon.style.transform = "rotate(0deg)";
  }
}

// נוסיף את הפונקציה לחלון הגלובלי
window.toggleVerseDetails = toggleVerseDetails;

// נוסיף פונקציית debounce למניעת קריאות יותרות
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// פונקציית החיפוש המעודכנת
async function searchChapters(query) {
  console.log("Searching for:", query); // לוג לבדיקה

  if (!query || query.length < 2) {
    // מחזירים את כל הפרקים למצב הרגיל אם אין חיפוש
    document.querySelectorAll(".chapter-item").forEach((item) => {
      item.style.display = "flex";
      item.classList.remove("search-match");
    });
    return;
  }

  query = query.toLowerCase().trim();

  try {
    // טעינת הנתונים מה-JSON
    const response = await fetch("bereshit.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Loaded JSON data:", data); // לוג לבדיקה

    let foundMatches = false;

    // נעבור על כל הפרקים
    document.querySelectorAll(".chapter-item").forEach(async (item) => {
      const chapterTitle =
        item.querySelector(".chapter-title")?.textContent.toLowerCase() || "";
      const chapterNumberMatch = chapterTitle.match(/פרק\s+([א-ת]+)/);
      const chapterNumber = chapterNumberMatch
        ? convertHebrewLetterToNumber(chapterNumberMatch[1])
        : null;

      console.log("Checking chapter:", chapterNumber); // לוג לבדיקה

      // בדיקה אם יש התאמה בכותרת
      const titleMatch = chapterTitle.includes(query);

      // בדיקה בתוך הפסוקים של הפרק
      let versesMatch = false;
      const chapterData = data[`chapter${chapterNumber}`];

      if (chapterData?.verses) {
        versesMatch = chapterData.verses.some((verse) => {
          return (
            verse.text?.toLowerCase().includes(query) ||
            verse.translation?.toLowerCase().includes(query) ||
            verse.commentary?.toLowerCase().includes(query) ||
            // חיפוש בניתוח המפורט
            verse.detailed_analysis?.words?.some(
              (word) =>
                word.word?.toLowerCase().includes(query) ||
                word.meaning?.toLowerCase().includes(query) ||
                word.analysis?.toLowerCase().includes(query) ||
                word.connections?.some((conn) =>
                  conn.toLowerCase().includes(query)
                )
            )
          );
        });
      }

      if (titleMatch || versesMatch) {
        foundMatches = true;
        item.style.display = "flex";
        item.classList.add("search-match");

        // פתיחת הפרק אם נמצאה התאמה בפסוקים
        if (versesMatch && !item.classList.contains("active")) {
          item.querySelector(".chapter-header").click();

          // הדגשת הטקסט המתאים
          setTimeout(() => {
            highlightSearchResults(item, query);
          }, 300);
        }
      } else {
        item.style.display = "none";
        item.classList.remove("search-match");
      }
    });

    // הצגת הודעה אם אין תוצאות
    const noResultsMessage = document.getElementById("noResultsMessage");
    if (!foundMatches) {
      if (!noResultsMessage) {
        const message = document.createElement("div");
        message.id = "noResultsMessage";
        message.className = "no-results";
        message.textContent = "לא נמצאו תוצאות לחיפוש";
        document.querySelector(".search-container").appendChild(message);
      }
    } else if (noResultsMessage) {
      noResultsMessage.remove();
    }
  } catch (error) {
    console.error("Error during search:", error);
  }
}

// פונקציה להדגשת תוצאות החיפוש
function highlightSearchResults(element, query) {
  const textElements = element.querySelectorAll(
    ".verse-text, .verse-translation, .verse-commentary, .word-text, .word-meaning, .word-analysis"
  );

  textElements.forEach((el) => {
    const text = el.innerHTML;
    const highlightedText = text.replace(
      new RegExp(`(${query})`, "gi"),
      '<mark class="search-highlight">$1</mark>'
    );
    el.innerHTML = highlightedText;
  });
}

// פונקציה להמרת את עברית לספר
function convertHebrewLetterToNumber(letter) {
  const hebrewLetters = {
    א: 1,
    ב: 2,
    ג: 3,
    ד: 4,
    ה: 5,
    ו: 6,
    ז: 7,
    ח: 8,
    ט: 9,
    י: 10,
    יא: 11,
    יב: 12,
    יג: 13,
    יד: 14,
    טו: 15,
    טז: 16,
    יז: 17,
    יח: 18,
    יט: 19,
    כ: 20,
    // ... המשך הטבלה עד נ' (50)
  };
  return hebrewLetters[letter] || null;
}

// יצירת גרסה מעוכבת של פונקציית החיפוש
const debounceSearch = debounce((query) => searchChapters(query), 300);

// הוספת מאזין אירועים לתיבת החיפוש
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) =>
      debounceSearch(e.target.value)
    );
  }
});

// הוספה בסוף הקובץ
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("progressModal");
  const btn = document.getElementById("showProgressBtn");
  const span = document.querySelector(".close-progress-modal");
  const progressContainer = document.getElementById("modalProgressContainer");

  if (btn) {
    btn.onclick = function () {
      modal.style.display = "block";
      if (!progressContainer.hasChildNodes()) {
        const progress = calculateBookProgress();
        const progressDisplay = document.createElement("div");
        progressDisplay.className = "progress-display";
        progressDisplay.innerHTML = `
          <h2>התקדמות כתיבת ספר בראשית</h2>
          
          <div class="summary-stats">
            <div class="stat-item">
              <div class="stat-label">סך הכל פרקים</div>
              <div class="stat-value">50</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">סך הכל פסוקים</div>
              <div class="stat-value">${progress.totalVerses}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">פרקים שנכתבו</div>
              <div class="stat-value">${progress.completedChapters}</div>
              <div class="stat-percentage">${progress.chaptersProgress.toFixed(
                1
              )}%</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">פסוקים שנכתבו</div>
              <div class="stat-value">${progress.writtenVerses}</div>
              <div class="stat-percentage">${progress.versesProgress.toFixed(
                1
              )}%</div>
            </div>
          </div>

          <div class="progress-details">
            <div class="progress-section">
              <h3>התקדמות לפי פרקים</h3>
              <div class="progress-bar-container">
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${
                    progress.chaptersProgress
                  }%"></div>
                </div>
                <div class="progress-labels">
                  <span class="progress-start">0</span>
                  <span class="progress-current">${
                    progress.completedChapters
                  }</span>
                  <span class="progress-end">50</span>
                </div>
              </div>
            </div>

            <div class="progress-section">
              <h3>התקדמות לפי פסוקים</h3>
              <div class="progress-bar-container">
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${
                    progress.versesProgress
                  }%"></div>
                </div>
                <div class="progress-labels">
                  <span class="progress-start">0</span>
                  <span class="progress-current">${
                    progress.writtenVerses
                  }</span>
                  <span class="progress-end">${progress.totalVerses}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="chapters-grid">
            <h3>סטטוס פרקים</h3>
            <div class="chapters-status">
              ${Array.from({ length: 50 }, (_, i) => i + 1)
                .map(
                  (num) => `
                <div class="chapter-indicator ${
                  chaptersData[`chapter${num}`]?.verses?.length > 0
                    ? "completed"
                    : "pending"
                }" title="פרק ${numberToHebrewLetter(num)}">
                  ${numberToHebrewLetter(num)}
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;

        progressContainer.appendChild(progressDisplay);
      }
    };
  }

  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// נוסיף פונקציה חדשה לחישוב התקדמות הכתיבה
function calculateBookProgress() {
  if (!chaptersData) return 0;

  // בדיקה כמה פרקים נכתבו במלואם
  let completedChapters = 0;
  let totalVerses = 0;
  let writtenVerses = 0;

  // עובר על כל הפרקים בספר
  for (let i = 1; i <= 50; i++) {
    const chapter = chaptersData[`chapter${i}`];
    if (chapter) {
      totalVerses += chapter.metadata?.verses || 0;

      // בדיקה האם הפרק נכתב במלואו
      if (
        chapter.verses &&
        chapter.verses.length > 0 &&
        chapter.verses.every(
          (verse) => verse.text && verse.translation && verse.commentary
        )
      ) {
        completedChapters++;
        writtenVerses += chapter.verses.length;
      }
    }
  }

  return {
    chaptersProgress: (completedChapters / 50) * 100, // 50 פרקים בספר בראשית
    versesProgress: (writtenVerses / totalVerses) * 100,
    completedChapters,
    totalChapters: 50,
    writtenVerses,
    totalVerses,
  };
}

// נוסיף פונקציה חדשה לטעינת הפרקים
function loadChapterLists() {
  const creationChapters = document.getElementById("creationChapters");
  const floodChapters = document.getElementById("floodChapters");
  const patriarchChapters = document.getElementById("patriarchChapters");

  chapters.forEach((chapter, index) => {
    const li = document.createElement("li");
    li.className = "chapter-item";
    // הוספת data-chapter לצורך זיהוי הפרק
    li.setAttribute("data-chapter", index + 1);

    li.innerHTML = `
      <div class="chapter-header">
        <div class="chapter-info">
          <div class="chapter-title">פרק ${numberToHebrewLetter(index + 1)}: ${
      chapter.title
    }</div>
          <div class="chapter-stats">מספר פסוקים: ${chapter.verses}</div>
        </div>
      </div>
      <div class="chapter-accordion"></div>
    `;

    // הוספת מאזין לחיצה לכותרת הפרק
    const chapterHeader = li.querySelector(".chapter-header");
    const accordion = li.querySelector(".chapter-accordion");

    chapterHeader.addEventListener("click", async () => {
      const isActive = li.classList.contains("active");

      // סגירת כל האקורדיונים האחרים
      document.querySelectorAll(".chapter-item.active").forEach((item) => {
        if (item !== li) {
          item.classList.remove("active");
          item.querySelector(".chapter-accordion").classList.remove("active");
        }
      });

      // פתיחה/סגירה של האקורדיון הנוכחי
      if (!isActive) {
        li.classList.add("active");
        accordion.classList.add("active");

        // טעינת תוכן הפרק אם עוד לא נטען
        if (!accordion.hasChildNodes()) {
          try {
            const response = await fetch("bereshit.json");
            const data = await response.json();
            const chapterData = data[`chapter${index + 1}`];

            if (chapterData && chapterData.verses) {
              const versesHtml = chapterData.verses
                .map((verse) => {
                  return createVerseElement(verse, index + 1);
                })
                .join("");

              accordion.innerHTML = versesHtml;
            }
          } catch (error) {
            console.error("Error loading chapter data:", error);
            accordion.innerHTML =
              '<div class="error-message">שגיאה בטעינת הפרק</div>';
          }
        }
      } else {
        li.classList.remove("active");
        accordion.classList.remove("active");
      }
    });

    // הוספת הפרק לרשימה המתאימה
    if (index < 5) {
      creationChapters.appendChild(li);
    } else if (index < 11) {
      floodChapters.appendChild(li);
    } else {
      patriarchChapters.appendChild(li);
    }
  });
}

// פונקציה ליצירת אלמנט פסוק
function createVerseElement(verse, chapterNumber) {
  const template = document.getElementById("verse-template");
  const clone = template.content.cloneNode(true);

  const verseItem = clone.querySelector(".verse-item");
  verseItem.setAttribute("data-chapter", chapterNumber);
  verseItem.setAttribute("data-verse-number", verse.number);

  // מילוי תוכן הפסוק
  clone.querySelector(".verse-number-text").textContent = verse.number;
  clone.querySelector(".verse-text").innerHTML = `
    <span class="verse-letter-inline">${numberToHebrewLetter(
      verse.number
    )}.</span> 
    ${verse.text}
  `;
  clone.querySelector(".verse-translation").textContent = verse.translation;
  clone.querySelector(".verse-commentary").textContent = verse.commentary;

  // הוספת סטטיסטיקות
  const wordCount = verse.text.trim().split(/\s+/).length;
  const letterCount = verse.text.replace(/[\s\u0591-\u05C7]/g, "").length;

  clone.querySelector(".word-count").textContent = `מילים: ${wordCount}`;
  clone.querySelector(".letter-count").textContent = `אותיות: ${letterCount}`;
  clone.querySelector(
    ".verse-number-display"
  ).textContent = `פסוק: ${verse.number}`;

  return verseItem.outerHTML;
}

// קריאה לפונקציה בטעינת הדף
document.addEventListener("DOMContentLoaded", () => {
  loadChapterLists();
});
