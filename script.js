// Array of 120 reasons to show in message box
const reasons = [
    "You make me laugh every day!",
    "Your kindness is inspiring.",
    "You always know how to make me smile.",
    "You brighten my world in every way.",
    "Your heart is as big as the universe.",
    "I love the way you care for others.",
    "Your energy lights up every room.",
    "The way you look at me makes my heart skip a beat.",
    "You make ordinary days feel extraordinary.",
    "I’m so lucky to have you in my life.",
    "You always listen and understand.",
    "Your hug makes everything feel better.",
    "Your laugh is infectious.",
    "You make even the most boring days fun.",
    "I love the way you look at life.",
    "Your creativity is amazing.",
    "You are my rock in tough times.",
    "You make me feel safe and loved.",
    "I love how you never give up.",
    "Your positive energy is contagious.",
    "You always know how to cheer me up.",
    "You make me a better person.",
    "Your love is the most precious gift.",
    "You brighten my day with your smile.",
    "Your sincerity means the world to me.",
    "I love your intelligence and wisdom.",
    "Your heart is full of love and compassion.",
    "You are my best friend and soulmate.",
    "You always know how to make me feel special.",
    "I love the way you challenge me to grow.",
    "You bring out the best in me.",
    "You are a beautiful person inside and out.",
    "I appreciate how much you care about me.",
    "You are everything I ever wanted and more.",
    "Your love completes me.",
    // Add more reasons here until 120
];

// Get the container for heart bubbles
const container = document.querySelector('.heart-container');

// Get the width and height of the viewport
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// Adjust bubble size based on screen width
let bubbleSize = 60;  // Default size for large screens

// Adjust bubble size for smaller devices
if (viewportWidth <= 480) {
    bubbleSize = 30;  // Smaller size for mobile phones
} else if (viewportWidth <= 768) {
    bubbleSize = 40;  // Medium size for tablets
} else if (viewportWidth <= 1024) {
    bubbleSize = 50;  // Medium-large size for larger tablets
}

// Set safe margin to prevent bubbles near the edge
const margin = 20;

// Dynamically generate bubbles and place them randomly within the viewport
reasons.forEach((reason, index) => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.setAttribute('data-message', reason);

    // Generate random X and Y positions, with margin to prevent bubbles touching screen edges
    const randomX = Math.random() * (viewportWidth - bubbleSize - margin * 2) + margin;
    const randomY = Math.random() * (viewportHeight - bubbleSize - margin * 2) + margin;

    // Apply random position
    bubble.style.left = `${randomX}px`;
    bubble.style.top = `${randomY}px`;

    // Apply random rotation for a fun effect
    const randomRotation = Math.random() * 360;
    bubble.style.transform = `rotate(${randomRotation}deg)`;

    // Add the bubble to the container
    container.appendChild(bubble);
});

// Handle bubble click events
document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        const messageBox = document.getElementById('bubble-message');
        const messageText = document.getElementById('message-text');

        // Show the message box with animation
        messageText.textContent = message;
        messageBox.style.display = 'block';

        // Hide the bubble after it's clicked
        this.style.display = 'none';
    });
});

// Close the message box when the user clicks the 'Close' button
document.getElementById('close-message').addEventListener('click', function() {
    document.getElementById('bubble-message').style.display = 'none';
});

