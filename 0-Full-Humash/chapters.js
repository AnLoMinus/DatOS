class Chapter {
  constructor(number, verses) {
    this.number = number;
    this.verses = verses;
  }

  render() {
    // TODO: להוסיף לוגיקת רינדור של פרק
    return `
            <div class="chapter" id="chapter-${this.number}">
                <h2>פרק ${this.number}</h2>
                <div class="verses">
                    ${this.renderVerses()}
                </div>
            </div>
        `;
  }

  renderVerses() {
    // TODO: להוסיף לוגיקת רינדור של פסוקים
  }
}

// TODO: להוסיף פונקציות עזר נוספות
