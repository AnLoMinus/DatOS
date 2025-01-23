class VerseAnalyzer {
    static countWords(text) {
        return text.trim().split(/\s+/).length;
    }

    static countLetters(text) {
        // מסיר ניקוד וטעמים
        return text.replace(/[\u0591-\u05C7]/g, '').length;
    }

    static analyzeChapter(verses) {
        let totalWords = 0;
        let totalLetters = 0;

        verses.forEach(verse => {
            verse.wordCount = this.countWords(verse.text);
            verse.letterCount = this.countLetters(verse.text);
            totalWords += verse.wordCount;
            totalLetters += verse.letterCount;
        });

        return {
            verseCount: verses.length,
            totalWords,
            totalLetters
        };
    }

    static formatStats(stats) {
        return `
            סיכום הפרק:
            מספר פסוקים: ${stats.verseCount}
            מספר מילים: ${stats.totalWords}
            מספר אותיות: ${stats.totalLetters}
        `;
    }
}

// דוגמה לשימוש:
/*
const verses = [/* הפסוקים מה-JSON */];
const stats = VerseAnalyzer.analyzeChapter(verses);
console.log(VerseAnalyzer.formatStats(stats));
*/ 