// מיפוי האותיות
const letterMapping = {
  א: {
    english: "Alef",
    transliteration: "a",
    example: { heb: "אבא", eng: "aba" },
  },
  ב: {
    english: "Bet",
    transliteration: "b",
    example: { heb: "בית", eng: "bayit" },
  },
  ג: {
    english: "Gimel",
    transliteration: "g",
    example: { heb: "גשם", eng: "geshem" },
  },
  ד: {
    english: "Dalet",
    transliteration: "d",
    example: { heb: "דלת", eng: "delet" },
  },
  ה: {
    english: "He",
    transliteration: "h",
    example: { heb: "הלל", eng: "hallel" },
  },
  ו: {
    english: "Vav",
    transliteration: "v",
    example: { heb: "ורד", eng: "vered" },
  },
  ז: {
    english: "Zayin",
    transliteration: "z",
    example: { heb: "זית", eng: "zayit" },
  },
  ח: {
    english: "Chet",
    transliteration: "ch",
    example: { heb: "חלון", eng: "chalon" },
  },
  ט: {
    english: "Tet",
    transliteration: "t",
    example: { heb: "טוב", eng: "tov" },
  },
  י: {
    english: "Yud",
    transliteration: "y",
    example: { heb: "יום", eng: "yom" },
  },
  כ: {
    english: "Kaf",
    transliteration: "k",
    example: { heb: "כלב", eng: "kelev" },
  },
  ל: {
    english: "Lamed",
    transliteration: "l",
    example: { heb: "לב", eng: "lev" },
  },
  מ: {
    english: "Mem",
    transliteration: "m",
    example: { heb: "מים", eng: "mayim" },
  },
  נ: {
    english: "Nun",
    transliteration: "n",
    example: { heb: "נר", eng: "ner" },
  },
  ס: {
    english: "Samech",
    transliteration: "s",
    example: { heb: "ספר", eng: "sefer" },
  },
  פ: {
    english: "Pey",
    transliteration: "p",
    example: { heb: "פרח", eng: "perach" },
  },
  צ: {
    english: "Tsadi",
    transliteration: "ts",
    example: { heb: "צדק", eng: "tzedek" },
  },
  ק: {
    english: "Kuf",
    transliteration: "k",
    example: { heb: "קיר", eng: "kir" },
  },
  ר: {
    english: "Resh",
    transliteration: "r",
    example: { heb: "ראש", eng: "rosh" },
  },
  ש: {
    english: "Shin",
    transliteration: "sh",
    example: { heb: "שלום", eng: "shalom" },
  },
  ת: {
    english: "Tav",
    transliteration: "th",
    example: { heb: "תורה", eng: "torah" },
  },
};

// יצירת טבלת האותיות
function createLettersGrid() {
  const grid = document.querySelector(".letters-grid");

  for (const [hebrew, info] of Object.entries(letterMapping)) {
    const card = document.createElement("div");
    card.className = "letter-card";
    card.innerHTML = `
      <div class="letter-pair">
        <div class="hebrew-letter">${hebrew}</div>
        <div class="arrow-separator">→</div>
        <div class="english-letter">${info.english}</div>
      </div>
      <div class="letter-info">
        <div class="transliteration">${info.transliteration}</div>
        <div class="example">
          <span class="hebrew">${info.example.heb}</span>
          <span class="separator">→</span>
          <span class="english">${info.example.eng}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  }
}

// המרת טקסט
function convertText(text, toEnglish = true) {
  if (toEnglish) {
    return text
      .split("")
      .map((char) => {
        const info = letterMapping[char];
        return info ? info.transliteration : char;
      })
      .join("");
  } else {
    const reverseMapping = {};
    Object.entries(letterMapping).forEach(([heb, info]) => {
      reverseMapping[info.transliteration] = heb;
    });

    // מורכב יותר - צריך לטפל ברצפים כמו 'sh', 'ch' וכו'
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let found = false;
      // בדיקת רצפים של שני תווים
      if (i < text.length - 1) {
        const pair = text.substr(i, 2).toLowerCase();
        for (const [heb, info] of Object.entries(letterMapping)) {
          if (info.transliteration === pair) {
            result += heb;
            i++; // דילוג על התו הבא
            found = true;
            break;
          }
        }
      }
      if (!found) {
        result += reverseMapping[text[i].toLowerCase()] || text[i];
      }
    }
    return result;
  }
}

// תרגול
let currentLetter = "";
let correctAnswer = "";

function startNewQuestion() {
  const letters = Object.keys(letterMapping);
  currentLetter = letters[Math.floor(Math.random() * letters.length)];
  correctAnswer = letterMapping[currentLetter].english;

  document.querySelector(".letter-display").textContent = currentLetter;

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
}

function generateOptions(correct) {
  const options = [correct];
  const allEnglish = Object.values(letterMapping).map((info) => info.english);
  while (options.length < 4) {
    const random = allEnglish[Math.floor(Math.random() * allEnglish.length)];
    if (!options.includes(random)) {
      options.push(random);
    }
  }
  return options.sort(() => Math.random() - 0.5);
}

function checkAnswer(selected) {
  const feedback = document.querySelector(".feedback");
  if (selected === correctAnswer) {
    feedback.textContent = "נכון! 🎉";
    feedback.className = "feedback correct";
    setTimeout(startNewQuestion, 1500);
  } else {
    feedback.textContent = "לא נכון, נסה שוב";
    feedback.className = "feedback incorrect";
  }
}

// אתחול
document.addEventListener("DOMContentLoaded", () => {
  createLettersGrid();

  // הגדרת ממיר הטקסט
  document.getElementById("toEnglish").onclick = () => {
    const hebrew = document.getElementById("hebrewText").value;
    document.getElementById("englishText").value = convertText(hebrew, true);
  };

  document.getElementById("toHebrew").onclick = () => {
    const english = document.getElementById("englishText").value;
    document.getElementById("hebrewText").value = convertText(english, false);
  };

  // התחלת תרגול
  document.querySelector(".start-practice").onclick = startNewQuestion;
});
