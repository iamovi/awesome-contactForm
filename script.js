// Function to create a falling emoji
function createFallingEmoji() {
    const emojis = ["🚗", "🚕", "🚙", "🚓", "🚑", "🚚"];
    const emoji = document.createElement("div");
    emoji.className = "falling-emoji";
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * window.innerWidth + "px";
    document.querySelector(".emoji-container").appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000); // Remove emoji after 5 seconds
}

// Create falling emojis at an interval
setInterval(createFallingEmoji, 1000);


