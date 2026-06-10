// Local Database dataset mapping structural visual definitions
const conceptDatabase = [
    {
        question: "How does a Queue (FIFO) data structure pass values?",
        answer: "First-In, First-Out: Elements append to the back (enqueue) and exit from the front (dequeue), maintaining processing sequence order.",
        animationClass: "loop-queue"
    },
    {
        question: "What is the primary constraint of a Stack memory buffer?",
        answer: "Last-In, First-Out (LIFO): The most recent data element pushed down onto the top layer must be popped off first before lower memory addresses are reachable.",
        animationClass: "loop-stack"
    },
    {
        question: "What is the target performance time complexity of a Hash Map lookup?",
        answer: "On average, a Hash Map accesses records in O(1) constant time, instantly converting input keys to explicit location index integers via a hashing algorithm.",
        animationClass: "loop-hash"
    }
];

let currentIndex = 0;

function updateUI() {
    const cardElement = document.getElementById("flashcard");
    // Ensure the card flips back to the front side during navigation shifts
    cardElement.classList.remove("is-flipped");

    // Small delay to allow flip transition to reset cleanly before swap
    setTimeout(() => {
        const activeData = conceptDatabase[currentIndex];
        
        // Map current textual strings to elements
        document.getElementById("question-text").innerText = activeData.question;
        document.getElementById("answer-text").innerText = activeData.answer;
        
        // Synchronize numeric progress trackers
        document.getElementById("current-index").innerText = currentIndex + 1;
        document.getElementById("total-count").innerText = conceptDatabase.length;

        // Reset the animation class on the node to restart keyframe cycles
        const animationNode = document.getElementById("animation-node");
        animationNode.className = "animated-node"; // Clear variations
        
        // Force DOM reflow recalculation to ensure the browser registers the animation restart
        void animationNode.offsetWidth; 
        
        // Attach the target keyframe loop configuration class
        animationNode.classList.add(activeData.animationClass);
    }, 200);
}

// Click state handler to flip the element container
function flipCard() {
    const cardElement = document.getElementById("flashcard");
    cardElement.classList.toggle("is-flipped");
}

// Manage navigation increments/decrements safely using wrap-around boundaries
function navigateCard(direction) {
    currentIndex += direction;
    
    if (currentIndex >= conceptDatabase.length) {
        currentIndex = 0; // Wrap around to first card
    } else if (currentIndex < 0) {
        currentIndex = conceptDatabase.length - 1; // Wrap around to last card
    }
    
    updateUI();
}

// Trigger initial platform configuration render on script startup load
window.onload = () => {
    updateUI();
};