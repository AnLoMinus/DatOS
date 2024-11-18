document.addEventListener("DOMContentLoaded", async function () {
  // קבלת המיקום של המשתמש
  async function getUserLocation() {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.log("Using default location (Jerusalem)");
      return {
        latitude: 31.7683, // ירושלים
        longitude: 35.2137,
      };
    }
  }

  // עדכון הזמנים בדף
  function updateTimes(times) {
    const timeElements = {
      alotHashachar: times.alot_hashacher,
      misheyakir: times.misheyakir,
      sunrise: times.sunrise,
      shema: times.sof_zman_shma,
      tefilla: times.sof_zman_tfilla,
      chatzot: times.chatzot,
      minchaGedola: times.mincha_gedola,
      minchaKtana: times.mincha_ketana,
      sunset: times.sunset,
      tzeit: times.tzeit,
    };

    for (const [id, time] of Object.entries(timeElements)) {
      const element = document.getElementById(id);
      if (element && time) {
        element.textContent = time.format("HH:mm");
      }
    }
  }

  // עדכון זמני שבת
  function updateShabbatTimes(location) {
    const now = new Hebcal.HDate();
    const nextShabbat = Hebcal.HebrewCalendar.getNextShabbat(now);

    // קבלת זמני כניסת ויציאת שבת
    const options = {
      latitude: location.latitude,
      longitude: location.longitude,
      havdalahMins: 42,
    };

    const shabbatTimes = Hebcal.Zmanim.getSunsetAndHavdalah(
      nextShabbat,
      options
    );

    // עדכון בדף
    document.getElementById("shabbatStart").textContent =
      shabbatTimes.sunset.format("HH:mm");
    document.getElementById("shabbatEnd").textContent =
      shabbatTimes.havdalah.format("HH:mm");

    // עדכון פרשת השבוע
    const parasha = Hebcal.HebrewCalendar.getParshiyot(
      nextShabbat.getFullYear(),
      nextShabbat.getMonth() + 1
    ).find((p) => p.getDate().isSameDate(nextShabbat));

    if (parasha) {
      document.getElementById(
        "currentParasha"
      ).textContent = `פרשת ${parasha.render("he")}`;
    }
  }

  // פונקציה ראשית להפעלת העדכונים
  async function initializeTimes() {
    const location = await getUserLocation();

    const options = {
      location: location,
      date: new Date(),
      timeZone: "Asia/Jerusalem",
    };

    const times = new Hebcal.Zmanim(options);
    updateTimes(times);
    updateShabbatTimes(location);
  }

  // הפעלה ראשונית
  initializeTimes();

  // עדכון כל דקה
  setInterval(initializeTimes, 60000);
});
