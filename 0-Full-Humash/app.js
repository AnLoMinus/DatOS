class TorahApp {
  constructor() {
    this.currentParasha = null;
    this.currentChapter = null;
  }

  async init() {
    // טעינת הנתונים הראשוניים
    await this.loadParshiot();
    this.setupEventListeners();
  }

  async loadParshiot() {
    // TODO: להוסיף לוגיקת טעינת פרשות
  }

  setupEventListeners() {
    // TODO: להוסיף מאזיני אירועים
  }

  async switchParasha(parashaId) {
    // TODO: להוסיף לוגיקת החלפת פרשה
  }
}

// אתחול האפליקציה
document.addEventListener("DOMContentLoaded", () => {
  const app = new TorahApp();
  app.init();
});
