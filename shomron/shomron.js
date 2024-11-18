// מיפוי האותיות
const letterMapping = {
  א: "𐡀",
  ב: "𐡁",
  ג: "𐡂",
  ד: "𐡃",
  ה: "𐡄",
  ו: "𐡅",
  ז: "𐡆",
  ח: "𐡇",
  ט: "𐡈",
  י: "𐡉",
  כ: "𐡊",
  ל: "𐡋",
  מ: "𐡌",
  נ: "𐡍",
  ס: "𐡎",
  ע: "𐡏",
  פ: "𐡐",
  צ: "𐡑",
  ק: "𐡒",
  ר: "𐡓",
  ש: "𐡔",
  ת: "𐡕",
};

// הרחבת שמות האותיות והמשמעויות שלהן
const letterInfo = {
  א: {
    name: "אלף",
    meaning: "אלוף/בקר",
    description: "מסמלת את האחדות והראשוניות",
  },
  ב: { name: "בית", meaning: "בית", description: "מסמלת מקום ומשכן" },
  ג: { name: "גימל", meaning: "גמל", description: "מסמלת נתינה וחסד" },
  ד: { name: "דלת", meaning: "דלת", description: "מסמלת פתח והזדמנות" },
  ה: { name: "הא", meaning: "הנה/הא", description: "מסמלת את הנוכחות האלוהית" },
  ו: { name: "וו", meaning: "וו/חיבור", description: "מסמלת חיבור והמשכיות" },
  ז: { name: "זין", meaning: "כלי נשק", description: "מסמלת כוח ועוצמה" },
  ח: { name: "חית", meaning: "גדר", description: "מסמלת חיים ותנועה" },
  ט: { name: "טית", meaning: "נחש/לפיפה", description: "מסמלת טוב וחסד" },
  י: { name: "יוד", meaning: "יד", description: "מסמלת כוח היצירה" },
  כ: { name: "כף", meaning: "כף יד", description: "מסמלת קבלה ונתינה" },
  ל: { name: "למד", meaning: "מלמד/שוט", description: "מסמלת לימוד והוראה" },
  מ: { name: "מם", meaning: "מים", description: "מסמלת מקור החיים" },
  נ: { name: "נון", meaning: "דג", description: "מסמלת המשכיות וצמיחה" },
  ס: { name: "סמך", meaning: "תמיכה", description: "מסמלת תמיכה ועזרה" },
  ע: { name: "עין", meaning: "עין", description: "מסמלת ראייה והשגחה" },
  פ: { name: "פא", meaning: "פה", description: "מסמלת דיבור וביטוי" },
  צ: { name: "צדי", meaning: "צד/דייג", description: "מסמלת צדק ויושר" },
  ק: { name: "קוף", meaning: "קוף/מחט", description: "מסמלת קדושה" },
  ר: { name: "ריש", meaning: "ראש", description: "מסמלת התחלה וראשית" },
  ש: { name: "שין", meaning: "שן", description: "מסמלת שינוי והתחדשות" },
  ת: { name: "תו", meaning: "סימן", description: "מסמלת שלמות וסיום" },
};

// יצירת טבלת האותיות
function createLettersGrid() {
  const grid = document.querySelector(".letters-grid");

  for (const [hebrew, samaritan] of Object.entries(letterMapping)) {
    const info = letterInfo[hebrew];
    const card = document.createElement("div");
    card.className = "letter-card";
    card.innerHTML = `
      <div class="letter-tag">אות ${info.name}</div>
      <div class="letter-pair">
        <div class="hebrew-letter">${hebrew}</div>
        <div class="arrow-separator">→</div>
        <div class="samaritan-letter">${samaritan}</div>
      </div>
      <div class="letter-info">
        <div class="letter-name">${info.name}</div>
        <div class="letter-meaning">${info.meaning}</div>
        <div class="letter-description">${info.description}</div>
      </div>
    `;

    // הוספת תמיכה בקורא מסך
    card.setAttribute("role", "article");
    card.setAttribute(
      "aria-label",
      `האות ${info.name}: מעברית ${hebrew} לשומרונית ${samaritan}`
    );

    grid.appendChild(card);
  }
}

// המרת טקסט
function convertText(text, toSamaritan = true) {
  if (toSamaritan) {
    return text
      .split("")
      .map((char) => letterMapping[char] || char)
      .join("");
  } else {
    const reverseMapping = Object.fromEntries(
      Object.entries(letterMapping).map(([k, v]) => [v, k])
    );
    return text
      .split("")
      .map((char) => reverseMapping[char] || char)
      .join("");
  }
}

// תרגול
let currentLetter = "";
let correctAnswer = "";

// הוספת משתנים חדשים לתרגול סדרתי
let currentLetterIndex = 0;
const orderedLetters = "אבגדהוזחטיכלמנסעפצקרשת".split("");

// הוספת פונקציה לתרגול סדרתי
function startOrderedPractice() {
  currentLetterIndex = 0;
  showCurrentOrderedLetter();
}

function showCurrentOrderedLetter() {
  currentLetter = orderedLetters[currentLetterIndex];
  correctAnswer = letterMapping[currentLetter];
  const info = letterInfo[currentLetter];

  document.querySelector(".letter-display").textContent = currentLetter;
  document.querySelector(".progress-indicator").textContent = `אות ${
    currentLetterIndex + 1
  } מתוך ${orderedLetters.length}`;

  document.querySelector(".letter-hint").innerHTML = `
    <div class="hint-content">
      <p><strong>רמז:</strong> זוהי האות "${info.name}"</p>
      <p><strong>משמעות:</strong> ${info.meaning}</p>
      <button class="show-description">הצג תיאור נוסף</button>
      <p class="description-text hidden">${info.description}</p>
    </div>
  `;

  const answers = document.querySelector(".answers");
  answers.innerHTML = "";

  const options = generateOptions(correctAnswer);
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = option;
    button.onclick = () => checkOrderedAnswer(option);
    answers.appendChild(button);
  });

  document.querySelector(".feedback").textContent = "";
}

function checkOrderedAnswer(selected) {
  const feedback = document.querySelector(".feedback");
  if (selected === correctAnswer) {
    feedback.textContent = "נכון! 🎉";
    feedback.className = "feedback correct";
    // אפשר למעבר לאות הבאה רק אחרי תשובה נכונה
    document.querySelector(".next-btn").disabled = false;
  } else {
    feedback.textContent = "לא נכון, נסה שוב";
    feedback.className = "feedback incorrect";
  }
}

function nextOrderedLetter() {
  if (currentLetterIndex < orderedLetters.length - 1) {
    currentLetterIndex++;
    showCurrentOrderedLetter();
    document.querySelector(".next-btn").disabled = true;
  } else {
    // סיום התרגול
    finishPractice();
  }
}

function finishPractice() {
  const practiceCard = document.querySelector(".practice-card");
  practiceCard.innerHTML = `
    <div class="practice-complete">
      <h3>כל הכבוד! 🎉</h3>
      <p>השלמת את תרגול כל האותיות!</p>
      <button class="restart-btn" onclick="startOrderedPractice()">התחל מחדש</button>
      <button class="random-practice-btn" onclick="startNewQuestion()">עבור לתרגול אקראי</button>
    </div>
  `;
}

// עזרים
function getLetterName(letter) {
  const names = {
    א: "אלף",
    ב: "בית",
    ג: "גימל",
    ד: "דלת",
    ה: "הא",
    ו: "וו",
    ז: "זין",
    ח: "חית",
    ט: "טית",
    י: "יוד",
    כ: "כף",
    ל: "למד",
    מ: "מם",
    נ: "נון",
    ס: "סמך",
    ע: "עין",
    פ: "פא",
    צ: "צדי",
    ק: "קוף",
    ר: "ריש",
    ש: "שין",
    ת: "תו",
  };
  return names[letter] || letter;
}

function generateOptions(correct) {
  const options = [correct];
  const allSamaritan = Object.values(letterMapping);
  while (options.length < 4) {
    const random =
      allSamaritan[Math.floor(Math.random() * allSamaritan.length)];
    if (!options.includes(random)) {
      options.push(random);
    }
  }
  return options.sort(() => Math.random() - 0.5);
}

// הוספת פונקציית תרגול אקראי
function startNewQuestion() {
  const allLetters = Object.keys(letterMapping);
  currentLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
  correctAnswer = letterMapping[currentLetter];
  const info = letterInfo[currentLetter];

  document.querySelector(".letter-display").textContent = currentLetter;
  document.querySelector(".progress-indicator").textContent = "תרגול אקראי";

  document.querySelector(".letter-hint").innerHTML = `
    <div class="hint-content">
      <p><strong>רמז:</strong> זוהי האות "${info.name}"</p>
      <p><strong>משמעות:</strong> ${info.meaning}</p>
      <button class="show-description">הצג תיאור נוסף</button>
      <p class="description-text hidden">${info.description}</p>
    </div>
  `;

  const answers = document.querySelector(".answers");
  answers.innerHTML = "";

  const options = generateOptions(correctAnswer);
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    answers.appendChild(button);
  });

  document.querySelector(".feedback").textContent = "";
  document.querySelector(".next-btn").disabled = true;
}

// הוספת פונקציית בדיקת תשובה לתרגול אקראי
function checkAnswer(selected) {
  const feedback = document.querySelector(".feedback");
  if (selected === correctAnswer) {
    feedback.textContent = "נכון! 🎉";
    feedback.className = "feedback correct";
    document.querySelector(".next-btn").disabled = false;
  } else {
    feedback.textContent = "לא נכון, נסה שוב";
    feedback.className = "feedback incorrect";
  }
}

// אתחול
document.addEventListener("DOMContentLoaded", () => {
  createLettersGrid();

  // הגדרת ממיר הטקסט
  document.getElementById("toSamaritan").onclick = () => {
    const hebrew = document.getElementById("hebrewText").value;
    document.getElementById("samaritanText").value = convertText(hebrew, true);
  };

  document.getElementById("toHebrew").onclick = () => {
    const samaritan = document.getElementById("samaritanText").value;
    document.getElementById("hebrewText").value = convertText(samaritan, false);
  };

  // כפתורי תרגול
  document.querySelector(".start-ordered").onclick = startOrderedPractice;
  document.querySelector(".start-random").onclick = startNewQuestion;
  document.querySelector(".next-btn").onclick = () => {
    if (document.querySelector(".practice-mode").value === "ordered") {
      nextOrderedLetter();
    } else {
      startNewQuestion();
    }
  };

  // הוספת מאזין לחיצה על כפתור "הצג תיאור נוסף"
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("show-description")) {
      const descriptionText = e.target.nextElementSibling;
      if (descriptionText.classList.contains("hidden")) {
        descriptionText.classList.remove("hidden");
        e.target.textContent = "הסתר תיאור";
      } else {
        descriptionText.classList.add("hidden");
        e.target.textContent = "הצג תיאור נוסף";
      }
    }
  });
});
