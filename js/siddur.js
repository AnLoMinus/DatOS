document.addEventListener("DOMContentLoaded", function () {
  function setTimeBasedColors(hours) {
    const root = document.documentElement;

    if (hours >= 4 && hours < 10) {
      // בוקר - גווני כתום-זהב
      root.style.setProperty(
        "--time-gradient",
        "linear-gradient(135deg, #ff9966, #ff5e62)"
      );
      root.style.setProperty(
        "--time-shadow",
        "0 0 15px rgba(255, 153, 102, 0.3)"
      );
      root.style.setProperty("--time-accent", "#ff8533");
    } else if (hours >= 12 && hours < 17) {
      // צהריים - גווני כחול-תכלת
      root.style.setProperty(
        "--time-gradient",
        "linear-gradient(135deg, #4CA1AF, #2C3E50)"
      );
      root.style.setProperty(
        "--time-shadow",
        "0 0 15px rgba(76, 161, 175, 0.3)"
      );
      root.style.setProperty("--time-accent", "#4CA1AF");
    } else {
      // ערב - גווני סגול-כחול כהה
      root.style.setProperty(
        "--time-gradient",
        "linear-gradient(135deg, #2C3E50, #3498db)"
      );
      root.style.setProperty("--time-shadow", "0 0 15px rgba(44, 62, 80, 0.3)");
      root.style.setProperty("--time-accent", "#34495e");
    }
  }

  function highlightCurrentPrayer() {
    const now = new Date();
    const hours = now.getHours();

    console.log("Current hour:", hours);

    // עדכון צבעים לפי זמן
    setTimeBasedColors(hours);

    // מסיר הדגשות קודמות
    document.querySelectorAll(".book-card-mini").forEach((card) => {
      card.classList.remove("current-prayer");
    });

    let currentSection = "";

    if (hours >= 4 && hours < 10) {
      currentSection = "shacharit";
    } else if (hours >= 12 && hours < 17) {
      currentSection = "mincha";
    } else if (hours >= 17 || hours < 4) {
      currentSection = "arvit";
    }

    console.log("Current section:", currentSection);

    if (currentSection) {
      const currentCard = document.querySelector(
        `[data-section="${currentSection}"] .book-card-mini`
      );
      console.log("Found card:", currentCard);
      if (currentCard) {
        currentCard.classList.add("current-prayer");
      }
    }
  }

  function checkHolidays() {
    const today = new Date();
    const hebrewDate = new Intl.DateTimeFormat("he-IL-u-ca-hebrew", {
      day: "numeric",
      month: "numeric",
    }).format(today);

    console.log("Current Hebrew date:", hebrewDate);

    // מסיר הדגשות קודמות
    document.querySelectorAll(".book-card-mini").forEach((card) => {
      card.classList.remove("holiday-active");
    });

    // בדיקת שבת - יום שישי ושבת
    if (today.getDay() === 5 || today.getDay() === 6) {
      console.log("שבת!");
      const shabbatCard = document.querySelector(
        '[data-section="shabbat"] .book-card-mini'
      );
      if (shabbatCard) shabbatCard.classList.add("holiday-active");
    }

    // בדיקת ראש השנה (א' ו-ב' בתשרי)
    if (hebrewDate.includes("1/7") || hebrewDate.includes("2/7")) {
      const roshHashanaCard = document.querySelector(
        '[data-section="rosh-hashana"] .book-card-mini'
      );
      if (roshHashanaCard) roshHashanaCard.classList.add("holiday-active");
    }

    // בדיקת יום כיפור (י' בתשרי)
    if (hebrewDate.includes("10/7")) {
      const yomKippurCard = document.querySelector(
        '[data-section="yom-kippur"] .book-card-mini'
      );
      if (yomKippurCard) yomKippurCard.classList.add("holiday-active");
    }

    // בדיקת סוכות (ט"ו-כ"א בתשרי)
    const sukkotDays = Array.from({ length: 7 }, (_, i) => `${15 + i}/7`);
    if (sukkotDays.some((day) => hebrewDate.includes(day))) {
      const sukkotCard = document.querySelector(
        '[data-section="sukkot"] .book-card-mini'
      );
      if (sukkotCard) sukkotCard.classList.add("holiday-active");
    }

    // בדיקת חנוכה (כ"ה בכסלו עד ב' או ג' בטבת)
    const chanukahStart = 25; // כ"ה בכסלו
    const chanukahMonth = 9; // חודש כסלו
    const hebrewDay = parseInt(hebrewDate.split("/")[0]);
    const hebrewMonth = parseInt(hebrewDate.split("/")[1]);

    if (
      (hebrewMonth === chanukahMonth && hebrewDay >= chanukahStart) ||
      (hebrewMonth === chanukahMonth + 1 && hebrewDay <= 3)
    ) {
      const chanukahCard = document.querySelector(
        '[data-section="chanukah"] .book-card-mini'
      );
      if (chanukahCard) chanukahCard.classList.add("holiday-active");
    }

    // בדיקת שבועות (ו' בסיון)
    if (hebrewDate.includes("6/3")) {
      const shavuotCard = document.querySelector(
        '[data-section="shavuot"] .book-card-mini'
      );
      if (shavuotCard) shavuotCard.classList.add("holiday-active");
    }
  }

  function calculateZmanim(date, lat, lng) {
    // המרת התאריך לאובייקט Date חדש כדי לא לשנות את המקורי
    const today = new Date(date);

    // חישוב זמני היום הבסיסיים
    const times = SunCalc.getTimes(today, lat, lng);

    // פונקציה להמרת תאריך לפורמט שעה:דקות
    function formatTime(date) {
      return date
        ? `${String(date.getHours()).padStart(2, "0")}:${String(
            date.getMinutes()
          ).padStart(2, "0")}`
        : "לא זמין";
    }

    // חישוב שעות זמניות
    const sunrise = times.sunrise;
    const sunset = times.sunset;
    const dayLengthMs = sunset - sunrise;
    const shaahZmanit = dayLengthMs / 12; // אורך שעה זמנית במילישניות

    // חישוב מנחה גדולה (6.5 שעות זמניות מהזריחה)
    const minchaGedola = new Date(sunrise.getTime() + shaahZmanit * 6.5);

    // חישוב מנחה קטנה (9.5 שעות זמניות מהזריחה)
    const minchaKetana = new Date(sunrise.getTime() + shaahZmanit * 9.5);

    // חישוב פלג המנחה (10.75 שעות זמניות מהזריחה)
    const plagHaMincha = new Date(sunrise.getTime() + shaahZmanit * 10.75);

    // חישוב צאת הכוכבים (20 דקות אחרי השקיעה)
    const tzetHakochavim = new Date(sunset.getTime() + 20 * 60 * 1000);

    return {
      sunrise: formatTime(sunrise),
      minchaGedola: formatTime(minchaGedola),
      minchaKetana: formatTime(minchaKetana),
      plagHaMincha: formatTime(plagHaMincha),
      sunset: formatTime(sunset),
      tzetHakochavim: formatTime(tzetHakochavim),
    };
  }

  // הוספת ספריית SunCalc
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/suncalc/1.9.0/suncalc.min.js";
  document.head.appendChild(script);

  script.onload = function () {
    // עדכון ראשוני של הזמנים
    updatePrayerTimes();
    // עדכון כל דקה
    setInterval(updatePrayerTimes, 60000);
  };

  function updatePrayerTimes() {
    const now = new Date();
    // קואורדינטות ירושלים
    const lat = 31.7767;
    const lng = 35.2345;

    const times = calculateZmanim(now, lat, lng);

    // עדכון הממשק
    document.querySelector("#sunrise .time-value").textContent = times.sunrise;
    document.querySelector("#mincha-gedola .time-value").textContent =
      times.minchaGedola;
    document.querySelector("#mincha-ketana .time-value").textContent =
      times.minchaKetana;
    document.querySelector("#plag .time-value").textContent =
      times.plagHaMincha;
    document.querySelector("#sunset .time-value").textContent = times.sunset;
    document.querySelector("#stars .time-value").textContent =
      times.tzetHakochavim;

    // הדגשת הזמן הנוכחי
    highlightCurrentTime(times);
  }

  function highlightCurrentTime(times) {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    document.querySelectorAll(".time-card").forEach((card) => {
      card.classList.remove("current-time");
    });

    // מציאת הזמן הרלוונטי והדגשתו
    if (currentTime < times.sunrise) {
      document.querySelector("#stars").classList.add("current-time");
    } else if (currentTime < times.minchaGedola) {
      document.querySelector("#sunrise").classList.add("current-time");
    } else if (currentTime < times.minchaKetana) {
      document.querySelector("#mincha-gedola").classList.add("current-time");
    } else if (currentTime < times.plagHaMincha) {
      document.querySelector("#mincha-ketana").classList.add("current-time");
    } else if (currentTime < times.sunset) {
      document.querySelector("#plag").classList.add("current-time");
    } else if (currentTime < times.tzetHakochavim) {
      document.querySelector("#sunset").classList.add("current-time");
    } else {
      document.querySelector("#stars").classList.add("current-time");
    }
  }

  highlightCurrentPrayer();
  setInterval(highlightCurrentPrayer, 60000);
  checkHolidays();
  setInterval(checkHolidays, 60000);
  updatePrayerTimes();
  setInterval(updatePrayerTimes, 60000);
});
