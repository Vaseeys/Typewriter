Markdown

# 📚 BookType - A Literary Typing Speed Test

*Because typing practice should be more interesting than "the quick brown fox"*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Pretext](https://img.shields.io/badge/Pretext-FF6B6B?style=for-the-badge&logo=typescript&logoColor=white)

## 🎯 What is this?

Ever wondered how fast you could type your favorite book? BookType is a typing speed test that lets you practice with actual literature instead of boring random words. Think Monkeytype meets Project Gutenberg.

Built with [Pretext](https://github.com/chenglou/pretext) - a delightfully minimal TypeScript framework that makes building reactive UIs actually fun.

## ✨ Features

- 📖 **Real Books** - Type passages from classics like Pride & Prejudice, Moby Dick, Alice in Wonderland, and more
- ⏱️ **Multiple Test Modes** - 15s, 30s, 60s, or 120s timed tests
- 📊 **Live Stats** - Real-time WPM, accuracy, and error tracking
- 🏆 **Personal Records** - Your best scores are saved locally
- 🎨 **Actually Good Design** - No purple gradients here, I promise
- ♿ **Keyboard Navigation** - Tab through everything, ESC to restart

## 🚀 Getting Started

```bash
# Clone this bad boy
git clone https://github.com/yourusername/booktype.git

# Open index.html in your browser
# That's it. No build step. No npm install taking 5 minutes.
🎮 How to Use
Pick your poison - Choose a book from the dropdown
Set your timer - 15s for quick tests, 120s if you're brave
Start typing - Just click into the text area and go
Watch the chaos - Green letters = good, red = oops
Check your stats - WPM, accuracy, and how you stack up 
Pro tip: Press ESC anytime to restart. Press Tab to navigate like a keyboard warrior.

🏗️ How It Works
The Pretext Magic ✨
JavaScript

// This is Pretext - it's just functions that return DOM
function TypeTest() {
  // State management without the ceremony
  let currentBook = "pride-prejudice";
  let timeLimit = 60;
  let isActive = false;
  
  // Reactive updates happen automatically
  return div({ class: "app" }, [
    BookSelector({ value: currentBook, onChange: (book) => {
      currentBook = book;
      // Pretext handles the re-render
    }}),
    // ... more components
  ]);
}
No JSX compilation. No virtual DOM. Just functions that create real DOM elements with reactivity baked in.

The HTML Foundation 🏛️
HTML

<!-- Super simple structure -->
<body>
  <div id="app">
    <!-- Pretext injects everything here -->
  </div>
  <script type="module" src="app.js"></script>
</body>
The CSS Aesthetic 🎨
We went with a neo-brutalist editorial vibe:

Chunky borders and bold typography
High contrast black/cream/orange color scheme
Newspaper-inspired layout with a modern twist
Monospace fonts for that typewriter feel
CSS

/* The secret sauce */
:root {
  --cream: #FFF8E7;
  --ink: #0A0A0A;
  --accent: #FF6B35;
  --paper: #F5F5DC;
}

/* Big, bold, unapologetic */
.book-title {
  font-family: 'Courier Prime', monospace;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
The JavaScript Sorcery 🧙‍♂️
WPM Calculation

JavaScript

// Standard formula: (characters / 5) / minutes
const calculateWPM = (chars, seconds) => {
  const minutes = seconds / 60;
  const words = chars / 5;
  return Math.round(words / minutes);
};
Accuracy Tracking

JavaScript

// Every keystroke is judged
const checkCharacter = (typed, expected) => {
  if (typed === expected) {
    correctChars++;
    return 'correct';
  } else {
    errors++;
    return 'incorrect';
  }
};

const accuracy = (correctChars / totalChars) * 100;
Local Storage for High Scores
Your achievements, forever
const saveBestScore = (book, wpm, accuracy) => {
  const key = `best_${book}`;
  const existing = JSON.parse(localStorage.getItem(key));
  
  if (!existing || wpm > existing.wpm) {
    localStorage.setItem(key, JSON.stringify({ wpm, accuracy }));
  }
};
😅 The Struggles of Vibe-Coding This Thing
"Wait, how does Pretext even work?"
Spent the first hour reading the GitHub README three times. It's minimal documentation for a minimal framework. Eventually realized it's just: function → returns DOM → magic happens.

CSS Grid is a Cruel Mistress
CSS

/* This took 47 tries */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  /* Why doesn't it work? *refreshes* */
  /* Oh right, I need gap */
  gap: 1rem;
  /* Wait why is it still broken */
  /* *adds min-width to parent* */
  /* FINALLY */
}
The Great Book Data Debate
Do I hardcode all the books? Use an API? Fetch from files?

Ended up with a giant object because sometimes the simple solution is the right solution:

JavaScript

const BOOKS = {
  "pride-prejudice": {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    passages: [
      "It is a truth universally acknowledged...",
      // ... 49 more passages
    ]
  }
  // My fingers hurt from typing all this
};
Typing Test Inception
Testing a typing test by typing in the typing test. Very meta. Very confusing when you keep making typos because you're debugging typo detection.
The Accuracy Percentage That Wouldn't Round
JavaScript floating point strikes again:

JavaScript

// Returns: 94.99999999999999
const accuracy = (95 / 100) * 100;

// Solution: Math.round() is your friend
const accuracy = Math.round((95 / 100) * 100);
localStorage is Stringly Typed
Everything's a string. Want an object? JSON.stringify() and JSON.parse() become your entire personality:

JavaScript

// This is your life now
localStorage.setItem('data', JSON.stringify(data));
const data = JSON.parse(localStorage.getItem('data'));
Browser Caching During Development
Changed the CSS. Refreshed. Nothing happened. Changed it again. Nothing. HARD REFRESH. Still nothing. Realize I was editing the wrong file. Classic.

🎨 Design Choices
Why the newspaper aesthetic?
Books are old-school. Typing tests are retro. Let's lean into it with a bold, editorial design that feels like a literary magazine had a baby with a vintage typewriter.

Why Pretext instead of React?
Because sometimes you don't need 300KB of framework to make something interactive. Pretext is like 3KB and does reactive updates with zero boilerplate.

Why monospace fonts everywhere?
You're literally typing. It should feel like typing. Monospace = authenticity.

Why that color scheme?
Cream and black = timeless. Orange accent = just enough chaos to keep it interesting.

🐛 Known Issues
 On mobile, the keyboard sometimes covers the stats (classic)
 Restarting during a test sometimes causes the timer to have an existential crisis
 Very long words might break the layout (looking at you, German compound words)
 localStorage can fill up if you're REALLY dedicated to beating your high scoresFuture Ideas
 Add more books (the internet has a lot of public domain stuff)
 Multiplayer mode??? (websockets seem scary though)
 Dark mode (the design is already pretty dark though)
 Custom text input (type your own stuff)
 Sound effects (typewriter clicking sounds = chef's kiss)
 Statistics graphs (show WPM over time)
📝 Code Structure
text

booktype/
├── index.html          # The entry point
├── app.js              # Main Pretext app
├── styles.css          # All the pretty stuff
├── books.js            # Book data (it's big)
└── utils.js            # Helper functions
🤝 Contributing
Found a bug? Want to add your favorite book? PRs welcome! Just:

Fork it
Make it better
Send a PR
Become internet famous (maybe)
📜 License
MIT - do whatever you want with it

💭 Final Thoughts
This project taught me that:

Pretext is actually pretty cool once you get it
Typing tests are harder to build than they look
CSS Grid is powerful but also my nemesis
Public domain books are a treasure
Sometimes vibe-coding leads to the best projects
Built with ☕, 🎵, and occasional 😤 in probably too many hours.
