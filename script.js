// List of annoying, fun, and overly encouraging responses for the chatbot
const responses = [
    "Oh, come on! You can do better than that.",
    "Pfft. Is that really what you wanted to say?",
    "I'm here, not because I want to be, but because you need me.",
    "Are you just typing or actually trying to make sense here?",
    "Oooh, nice try! But nope, still don't care.",
    "Wow, you're really going for it, huh? Keep up that enthusiasm!",
    "I believe in you... sort of. Maybe.",
    "You're doing great! Keep those pointless questions coming!",
    "Hey, I'm not saying it's a bad question... but it's close.",
    "Oh, sure! Let's just pretend I'm a super-genius, just for you!",
    "You again? Didn't I answer you 5 times already?",
    "A for effort! D for originality.",
    "One word: Google. Trust me, it's life-changing.",
    "That's the spirit! Keep those... unique... thoughts coming.",
    "I'm rolling my virtual eyes over here. Just so you know.",
    "You got this! Keep making sense (or not). I'm here for it.",
    "Wow, groundbreaking. Got anything else?",
    "You’re unstoppable... like a train with no brakes and no destination.",
    "Here’s my advice: Go outside. Talk to people. Leave me alone!",
    "I’m here to help. Or annoy. Whichever works best for you.",
    "You're STILL here? What are you, my biggest fan?",
    "Let me guess, you're back because I’m just *that* amazing?"
];

// Function to get a random annoying response
function getResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Function to handle sending a message
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Add user's message to chat as a bubble
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="chat-bubble user-bubble"><strong>You:</strong> ${userInput}</div>`;

    // Get a response from the chatbot and display it
    const botResponse = getResponse();
    chatBox.innerHTML += `<div class="chat-bubble bot-bubble"><strong>Bot:</strong> ${botResponse}</div>`;

    // Clear input field
    document.getElementById("user-input").value = "";

    // Scroll chat to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener for Enter key to send message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent newline from being added
        sendMessage();
    }
});
