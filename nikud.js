// ניהול מצב המשחק והנתונים
class NikudGameState {
  constructor() {
    this.score = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.currentLevel = "basic";
    this.gameActive = false;
    this.currentWord = "";
    this.selectedNikud = [];
  }

  updateScore(points) {
    this.score += points;
    this.updateUI();
  }

  updateUI() {
    document.querySelector(".game-score span").textContent = this.score;
    document.querySelector(".stat-value.correct").textContent =
      this.correctAnswers;
    document.querySelector(".stat-value.incorrect").textContent =
      this.incorrectAnswers;
    this.updateAccuracy();
  }

  updateAccuracy() {
    const total = this.correctAnswers + this.incorrectAnswers;
    const accuracy =
      total === 0 ? 0 : Math.round((this.correctAnswers / total) * 100);
    document.querySelector(".stat-value.accuracy").textContent = `${accuracy}%`;
  }
}

// ניהול השמעת צלילים
class SoundManager {
  constructor() {
    this.sounds = {};
    this.loadSounds();
  }

  loadSounds() {
    const nikudSounds = [
      "kamatz",
      "patach",
      "tzere",
      "segol",
      "holam",
      "kubutz",
      "shva",
    ];
    nikudSounds.forEach((sound) => {
      this.sounds[sound] = new Audio(`sounds/${sound}.mp3`);
    });
  }

  playSound(soundName) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].play();
    }
  }
}

// ניהול תרגול בסיסי
class BasicPractice {
  constructor(gameState, soundManager) {
    this.gameState = gameState;
    this.soundManager = soundManager;
    this.words = [
      { text: "בְּרֵאשִׁית", translation: "בראשית" },
      { text: "וַיֹּאמֶר", translation: "ויאמר" },
      // ... עוד מילים
    ];
    this.initializeEvents();
  }

  initializeEvents() {
    const container = document.querySelector(".practice-level.basic");

    // כפתור בדיקת תשובה
    container.querySelector(".check-answer").addEventListener("click", () => {
      this.checkAnswer();
    });

    // כפתור ניקוי בחירה
    container
      .querySelector(".clear-selection")
      .addEventListener("click", () => {
        this.clearSelection();
      });

    // כפתור השמעת מילה
    container.querySelector(".play-word").addEventListener("click", () => {
      this.playCurrentWord();
    });

    // אתחול אפשרויות ניקוד
    this.initializeNikudOptions();
  }

  initializeNikudOptions() {
    const optionsContainer = document.querySelector(".nikud-options");
    const nikudSymbols = [
      { symbol: "בָ", name: "קמץ", sound: "kamatz" },
      { symbol: "בַ", name: "פתח", sound: "patach" },
      // ... עוד סימני ניקוד
    ];

    nikudSymbols.forEach((nikud) => {
      const button = document.createElement("button");
      button.className = "nikud-option";
      button.dataset.sound = nikud.sound;
      button.innerHTML = nikud.symbol;
      button.setAttribute("aria-label", nikud.name);

      button.addEventListener("click", () => {
        this.selectNikud(nikud);
        this.soundManager.playSound(nikud.sound);
      });

      optionsContainer.appendChild(button);
    });
  }

  selectNikud(nikud) {
    this.gameState.selectedNikud.push(nikud);
    this.updateSelectedDisplay();
  }

  updateSelectedDisplay() {
    const selectedList = document.querySelector(".selected-list");
    selectedList.innerHTML = this.gameState.selectedNikud
      .map((nikud) => `<span class="selected-nikud">${nikud.symbol}</span>`)
      .join("");
  }

  checkAnswer() {
    // בדיקת התשובה והצגת משוב
    const isCorrect = this.validateAnswer();
    const feedback = document.querySelector(".feedback");

    if (isCorrect) {
      this.gameState.correctAnswers++;
      feedback.textContent = "כל הכבוד! התשובה נכונה";
      feedback.className = "feedback correct";
    } else {
      this.gameState.incorrectAnswers++;
      feedback.textContent = "לא מדויק, נסה שוב";
      feedback.className = "feedback incorrect";
    }

    this.gameState.updateUI();
  }

  validateAnswer() {
    // לוגיקת בדיקת התשובה
    return true; // יש להחליף בבדיקה אמיתית
  }
}

// ניהול תרגול מתקדם
class AdvancedPractice {
  constructor(gameState, soundManager) {
    this.gameState = gameState;
    this.soundManager = soundManager;
    this.initializeEvents();
  }

  initializeEvents() {
    // אתחול אירועים לתרגול מתקדם
    const container = document.querySelector(".practice-level.advanced");

    // בחירת רמת קושי
    container.querySelector("#difficulty").addEventListener("change", (e) => {
      this.setDifficulty(e.target.value);
    });

    // כפתורי עזרה
    container.querySelector(".show-hint").addEventListener("click", () => {
      this.showHint();
    });

    container.querySelector(".show-solution").addEventListener("click", () => {
      this.showSolution();
    });
  }

  setDifficulty(level) {
    this.gameState.currentLevel = level;
    this.loadAppropriateContent();
  }

  showHint() {
    // הצגת רמז
  }

  showSolution() {
    // הצגת פתרון
  }
}

// ניהול משחק הזיכרון
class MemoryGame {
  constructor(gameState) {
    this.gameState = gameState;
    this.pairs = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.timer = null;
    this.initializeGame();
  }

  initializeGame() {
    this.createCards();
    this.initializeEvents();
    this.startTimer();
  }

  createCards() {
    const grid = document.querySelector(".cards-grid");
    grid.innerHTML = ""; // ניקוי הלוח

    // יצירת הכרטיסים
    const nikudPairs = this.generatePairs();
    nikudPairs.forEach((pair) => {
      const card = this.createCard(pair);
      grid.appendChild(card);
    });
  }

  createCard(nikudData) {
    const card = document.createElement("div");
    card.className = "memory-card";
    card.dataset.nikud = nikudData.symbol;

    card.innerHTML = `
            <div class="card-front">${nikudData.symbol}</div>
            <div class="card-back">?</div>
        `;

    card.addEventListener("click", () => this.flipCard(card));
    return card;
  }

  flipCard(card) {
    if (this.flippedCards.length === 2) return;

    card.classList.add("flipped");
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.moves++;
      this.updateStats();
      setTimeout(() => this.checkMatch(), 1000);
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;
    const match = card1.dataset.nikud === card2.dataset.nikud;

    if (match) {
      this.handleMatch(card1, card2);
    } else {
      this.handleMismatch(card1, card2);
    }

    this.flippedCards = [];
  }

  updateStats() {
    document.querySelector(".moves span").textContent = this.moves;
    document.querySelector(".pairs-found span").textContent = this.matchedPairs;
  }
}

// אתחול המשחק
document.addEventListener("DOMContentLoaded", () => {
  const gameState = new NikudGameState();
  const soundManager = new SoundManager();

  const basicPractice = new BasicPractice(gameState, soundManager);
  const advancedPractice = new AdvancedPractice(gameState, soundManager);
  const memoryGame = new MemoryGame(gameState);

  // אתחול הגדרות משתמש
  initializeSettings();
});

// ניהול הגדרות משתמש
function initializeSettings() {
  const fontSizeSelect = document.getElementById("font-size");
  const practiceSpeedSelect = document.getElementById("practice-speed");

  fontSizeSelect.addEventListener("change", (e) => {
    document.documentElement.style.setProperty(
      "--base-font-size",
      getFontSize(e.target.value)
    );
  });

  practiceSpeedSelect.addEventListener("change", (e) => {
    document.documentElement.style.setProperty(
      "--transition-speed",
      getTransitionSpeed(e.target.value)
    );
  });
}

function getFontSize(size) {
  const sizes = {
    normal: "16px",
    large: "18px",
    larger: "20px",
  };
  return sizes[size] || sizes.normal;
}

function getTransitionSpeed(speed) {
  const speeds = {
    slow: "1s",
    normal: "0.5s",
    fast: "0.3s",
  };
  return speeds[speed] || speeds.normal;
}
