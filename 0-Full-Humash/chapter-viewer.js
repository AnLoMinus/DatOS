class ChapterViewer {
  constructor(chapterData) {
    this.chapter = chapterData;
  }

  renderVerse(verse) {
    return `
            <div class="verse" id="verse-${verse.number}">
                <span class="verse-number">{${verse.number}}</span>
                <span class="verse-text">${verse.text}</span>
                <div class="verse-stats">
                    <small>
                        מילים: ${verse.wordCount} | 
                        אותיות: ${verse.letterCount}
                    </small>
                </div>
                ${
                  verse.parashah
                    ? `<span class="parashah-mark">(${verse.parashah})</span>`
                    : ""
                }
            </div>
        `;
  }

  renderStats() {
    const stats = this.chapter.stats;
    return `
            <div class="chapter-stats">
                <h3>סיכום הפרק</h3>
                <ul>
                    <li>סך הכל פסוקים: ${stats.verseCount}</li>
                    <li>סך הכל מילים: ${stats.totalWords}</li>
                    <li>סך הכל אותיות: ${stats.totalLetters}</li>
                </ul>
            </div>
        `;
  }

  render() {
    return `
            <div class="chapter-container">
                <h2>${this.chapter.name}</h2>
                <div class="verses">
                    ${this.chapter.verses
                      .map((verse) => this.renderVerse(verse))
                      .join("")}
                </div>
                ${this.renderStats()}
            </div>
        `;
  }
}
