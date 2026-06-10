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

## 🚀 Getting Started

### 📦 Installation
1. Clone this repository to your target sandbox directory:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/interactive-flashcard-platform.git](https://github.com/YOUR_USERNAME/interactive-flashcard-platform.git)
