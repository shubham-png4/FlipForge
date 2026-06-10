# FlipForge
FlipForge — Master programming concepts with beautiful 3D animated flashcards and live code visualizations. Built with pure HTML, CSS, and JavaScript.
# ⚡ EduFlash: Interactive 3D Concept Learning Platform

An open-source, lightweight web framework designed to teach high-level computer science concepts using 3D perspective layout models and continuous CSS animation loop simulations.

## 🏗️ Technical Core Architecture

### 1. 3D CSS Rendering Layout Engine
The application accomplishes spatial separation and layout translations without drawing heavy Canvas or WebGL assets. It utilizes native hardware-accelerated CSS properties:
* **`perspective`:** Defines depth perception down the $Z$-axis. Placed on the parent element, it maps human camera viewpoint distance coordinates.
* **`transform-style: preserve-3d`:** Forces children layers to live in a unified spatial layer, preventing them from rendering as flat 2D elements.
* **`backface-visibility: hidden`:** Completely skips drawing processing tasks for components whose layout margins are rotated past $90^\circ$ away from the observer's viewing vector.

### 2. Micro-Reflow Re-initialization
To seamlessly switch animation loops when changing cards, the script drops class lists and checks `offsetWidth`. This triggers an instant browser micro-reflow event, clean-resetting hardware timelines without causing visible layout flickering.
# ProgLearn 🚀

**Learn programming languages through interactive animations, flashcards, quizzes, and a live playground.**

An open-source, beginner-friendly web application built with pure HTML, CSS, and JavaScript.

## ✨ Features

- **Interactive Flashcards** with smooth 3D flip animations
- **Visual Animations** — Watch concepts come alive (For loops, Bubble Sort, and more)
- **Adaptive Quizzes** with instant feedback
- **Code Playground** — Run JavaScript instantly
- **Multi-language support** (Python, JavaScript, Java — easily extensible)
- Fully responsive and beautiful UI

## 🎯 How to Use

1. Clone or download the repository
2. Open `index.html` in your browser
3. Start learning!

No installation or server required.

## 🛠 Tech Stack

- HTML5
- CSS3 (with modern animations)
- Vanilla JavaScript
- HTML5 Canvas for visualizations

## 📁 Project Structure

```
ProgLearn/
├── index.html
├── styles.css
├── script.js
├── README.md
└── LICENSE
```

## 🚀 Future Enhancements

- Python execution in browser (Pyodide)
- Spaced repetition system
- More animations (Recursion trees, Linked lists, etc.)
- User progress tracking (localStorage)
- Dark/Light mode toggle
- Export progress as PDF

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new flashcards
- Create new animations
- Improve the UI
- Add support for more languages

1. Fork the repo
2. Create a feature branch
3. Submit a Pull Request

## 📄 License

MIT License — feel free to use this project for learning, teaching, or building upon.

---

**Made with ❤️ for everyone who wants to master coding visually.**


## 🚀 Getting Started

### 📦 Installation
1. Clone this repository to your target sandbox directory:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/interactive-flashcard-platform.git](https://github.com/YOUR_USERNAME/interactive-flashcard-platform.git)
