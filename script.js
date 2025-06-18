// Array of 120 reasons to show in message box
const reasons = [
    "You bring a smile to my face", // 1
    "You give me a reason to be successful", // 2
    "Your Hair", // 3
    "You brighten my world in every way.", // 4
    "Your Eyes", // 5
    "You are really strong", // 6
    "Your energy", // 7
    "The way you look at me makes me feel special", // 8
    "You make ordinary days feel extraordinary.", // 9
    "You are my good luck charm", // 10
    "You always listen and understand.", // 11,
    "Your hug makes everything feel better.", // 12
    "Your smile is enough to make my day happy", // 13
    "You make even the most boring days fun", // 14
    "You are the lotus that gave me inspiration", // 15
    "Your creativity is amazing.", // 16
    "Your are my biggest cheerleader", // 17
    "You make me feel loved", // 18
    "I love how you never give up", // 19
    "Mujhe apna ghar mil jata hai tujhme", // 20
    "You always know how to cheer me up", // 21 
    "You make me a better person", // 22
    "You bring light into my darkness", // 23
    "Your voice", // 24
    "You. Just You.", // 25
    "Tu already hushar h - iykyk", // 26
    "Your smile", // 27
    "You understand me well", // 28
    "You motivate me a lot to acheive my goals", // 29
    "You help me grow", // 30
    "You bring out the best in me", // 31
    "You are a beautiful person", // 32
    "I appreciate how much you care about me", // 33
    "You are everything I ever wanted and more", // 34
    "Your love completes me", // 35
    "Your humour", // 36
    "Your affection towards kids", // 37
    "You are an amazing artist", // 38
    "The way you speak", // 39
    "Violinist!!!!!", // 40
    "You take me to KFC!!!", // 41
    "Biryani lobers hehe", // 42
    "I enjoy eating outside when I'm eating with you", // 43
    "You smile like an angel", // 44
    "I think about you more than myself", // 45
    "You always pray for me", // 46
    "Good kisser hihi", // 47
    "Your jokes", // 48
    "Your thoughts", // 49
    "Hasra chehra", // 50
    "I forget my problems when I talk to you", // 51
    "I forget my sorrows when I see you smile", // 52
    "Your one hug is more than a therapy", // 53
    "Sadi mein bawaal lagti ho", // 54
    "You feel I'm hushar", // 55
    "You see my happiness as yours", // 56
    "Mujhe cat cafe leke gayi", // 57
    "You encourage me to try new things", // 58
    "Rubik's Cube ki Amma Wuhuu", // 59
    "I want to hug you dunno why am I adding this", // 60
    "Dence ki 8 hai tujhme", // 61
    "I'm always happy when you are around", // 62
    "Your arms give me peace", // 63
    "You said you dont want me to go alone ahhhh", // 64
    "I love your presence", // 65
    "Teri Khushboo", // 66
    "Tu kisi rail si guzarti hai mai kisi pul ka thartharata hoon", // 67
    "I find peace when I'm with you", // 68
    "You are my comfort zone", // 69
    "I get all my positivity from you", // 70
    "Mere subah ka pehla khyaal aur raat ki aakhri yaad ho tum", // 71
    "You are always there for me", // 72
    "I can run to you to hide from all my problems", // 73
    "Talking to you is the best solution for my problems", // 74
    "You feel like home in this unknown city", // 75
    "You are my escape from this cruel world", // 76
    "You taught how beautiful life can be", // 77
    "You gave me a new perspective to look at things", // 78
    "You teach me how to be a good human", // 79
    "You've always believed in me", // 80
    "You taught me self love", // 81    
    "You are my real ChatGPT", // 82
    "Your taste in music is gold", // 83
    "Every atom you're made up of is beautiful", // 84
    "You've always stood by my side", // 85
    "Youve never left me alone", // 86
    "I love to walk with you (Chaar Kadam -PK)", // 87
    "You spread happiness wherever you go", // 88
    "You love me even though you are broken", // 89
    "Your happiness is the reason to my happiness too", // 90
    "Just a talk with you solve majority of my problems", // 91
    "I see my heaven in you", // 92
    "You can drive hehe (I'll learn soon sorry <3)", // 93
    "I can be me around you", // 94
    "You always care about my health more than me", // 95
    "I love to share my problems with you ", // 96
    "You care <3", // 97
    "You are perfect.", // 98
    "You're the best girl I've ever known.", // 99
    "You're the purest soul I've ever seen", // 100
    "You're mine", // 101
    "I want you forever", // 102
    "I enjoy playing video games with you", // 103
    "I see growth in me when we work hard together", // 104
    "You have the ability to get me out of the lowest state I can be in", // 105
    "I love holding your hand and love it when you hold my arm", // 106
    "You teach me to be happy", // 107
    "You give me new reasons everyday to love you more", // 108
    "Sochu tujhe toh hai subah, Sochu tujhe toh shaam hai", // 109
    "Aankho ko teri aadat hai, Tu dikhe na toh inhe shikayat hai", // 110
    "Cant imagine a happy day without you being a part of it", // 111
    "You are the best girl I can dream of", // 112
    "Yeh Fitoor Mera laaya mujhko hai tere kareeb", // 113
    "The way you cant see anyone in pain", // 114
    "Your hug is the best feeling in this world", // 115
    "The love you give makes me feel I can win anything", // 116
    "Savero ka mere, tu suraj laage", // 117
    "Jiya laage na, tum bin mora", // 118
    "I feel empty when we dont talk", // 119
    "And I want to see you win", // 120
    "The love you give makes me the strongest person", // 121
    

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

