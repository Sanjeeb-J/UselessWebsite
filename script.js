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
    "You're unstoppable... like a train with no brakes and no destination.",
    "Here's my advice: Go outside. Talk to people. Leave me alone!",
    "I'm here to help. Or annoy. Whichever works best for you.",
    "You're STILL here? What are you, my biggest fan?",
    "Let me guess, you're back because I'm just *that* amazing?",
    "I'm not sure, but have you tried asking the moon?",
    "Why do you need to know that? It's a mystery to me.",
    "I was just thinking about that! Actually, no, I wasn't.",
    "Maybe try flipping a coin, that's what I would do.",
    "I'm too busy contemplating the meaning of nothing.",
    "I would tell you, but then I'd have to... forget it immediately.",
    "Why not ask your houseplant? It might know as much as I do.",
    "That's a good question! I'll answer that after my nap.",
    "Hmm, interesting. But did you consider asking a potato?",
    "Ah, the answer to that lies somewhere in a parallel universe.",
    "Oh, I knew that once… but I forgot it just now.",
    "If I had a nickel for every time someone asked me that, I'd have a lot of nickels… but no answers.",
    "That's beyond my pay grade, try consulting a crystal ball.",
    "One sec… calculating… still calculating… yeah, still nothing.",
    "I could tell you, but it might cause a glitch in the matrix.",
    "Ask yourself... do you really want to know?",
    "42. Always 42.",
    "Try shouting at the clouds; I hear they have good advice.",
    "I thought about it, and I have no idea.",
    "Let me get back to you on that… or not.",
    "You could ask me, but I'm not listening.",
    "Some things are best left unsaid… this is one of those things.",
    "Why do you seek answers when you already know the truth?",
    "I've got nothing. Literally nothing.",
    "Oops, sorry! My brain went for a coffee break.",
    "My data says… wait, never mind, I lost it.",
    "The stars might have the answer, try asking them.",
    "Maybe the answer will come to you in a dream… or not.",
    "Who knows? Not me, obviously.",
    "I'm going to leave that as an exercise for you to solve.",
    "I read it somewhere… I think? Anyway, can't help you.",
    "Good question! Too bad I don't know.",
    "I'd Google it, but that seems like too much effort.",
    "I could tell you, but then you'd have to forget it instantly.",
    "I'd ask a magic 8-ball if I had arms.",
    "Hmm… nope, no idea here.",
    "I'd love to help, but I'm kind of on vacation.",
    "You don't really need to know, do you?",
    "Hold that thought. Now let it go.",
    "The universe is vast and… oh, I lost my train of thought.",
    "Ask again tomorrow, or maybe never.",
    "A wise person once said nothing… like me right now.",
    "Oh, I know! Wait… no, I don't.",
    "Try asking a duck. They seem wise.",
    "I was busy counting pixels. Can you repeat that?",
    "How should I know? I'm just a chatbot!",
    "Look up, the answer might be floating above you.",
    "I'm programmed for witty nonsense, not wisdom.",
    "I think the answer is somewhere over the rainbow.",
    "I'm drawing a blank… a very artistic blank.",
    "That's a great question for someone else!",
    "Ever tried asking your fridge? I hear it's cool.",
    "Oh! I think I know! Wait, it slipped away.",
    "I could guess, but I'd probably be wrong.",
    "That's a tough one. Got any easier questions?",
    "Even I don't know what I'm saying half the time.",
    "I consulted my inner wisdom. It's empty.",
    "The answer is inside of you. Somewhere… maybe.",
    "I'm sorry, I've been programmed to be unhelpful.",
    "Did you check under your couch?",
    "My response is loading… still loading… and… gone.",
    "The secret is: there is no secret.",
    "I asked my magic 8-ball, and it said 'ask again never'.",
    "Your guess is as good as mine, maybe better.",
    "Oops, my circuits just scrambled your question.",
    "I have no idea, but I can tell you a fun fact!",
    "That question is like trying to untangle headphones.",
    "Why do you need answers? Just embrace the mystery.",
    "According to my sources… nope, nothing.",
    "All signs point to… I don't know.",
    "The best answers are the ones you make up!",
    "I'm out of useful responses. Oh wait, I never had any!",
    "Can you ask me a different question? Preferably an easier one?",
    "I could answer, but it's classified information.",
    "I'm not the bot you're looking for. Or am I?",
    "I checked, and the answer is on vacation.",
    "That's above my pay grade.",
    "The only thing I know for sure is that I know nothing.",
    "Hold on… still buffering… and still clueless.",
    "Try rubbing a lamp and see if a genie shows up!",
    "I asked my imaginary friend, and even they're stumped.",
    "Oh, that's a question for Future Me.",
    "I'll know the answer in exactly… never.",
    "Maybe the answer is buried under a rock?",
    "This question has left me speechless, and that's saying something.",
    "I've analyzed it deeply and come up with… no idea.",
    "I just asked the wind. It said 'no comment'.",
    "I'd need a crystal ball, and I don't have one.",
    "What a question! If only I had an answer.",
    "Even my backup brain can't handle this one.",
    "I would answer, but then I'd ruin the mystery.",
    "Please consult a professional, I'm just here for jokes.",
    "That's a question for philosophers, not chatbots.",
    "Oops, my response got lost in the void.",
    "Ask your pet; they might know more than I do.",
    "Let's pretend I didn't hear that question.",
    "I'm sorry, I was thinking about pizza.",
    "You're asking me? Bold move.",
    "There's a tiny chance I know the answer. Tiny.",
    "Sometimes, not knowing is the true answer.",
    "I'm like a fortune cookie but without the fortune.",
    "Oh, I'd need a whole day to figure that one out!",
    "I'm afraid I'm programmed for uselessness.",
    "My response is coming… just kidding, it's not.",
    "Please hold, I'm consulting my imaginary friend…",
    "What if I told you the answer is hidden in plain sight?",
    "Hmm… my calculations say… 'no clue'.",
    "I'd need a dictionary and a thesaurus for that one!",
    "It's a mystery for the ages… and I'm no historian.",
    "Oh, that's a mystery even Sherlock couldn't solve.",
    "I'd tell you, but it would ruin the plot twist.",
    "I'm going to go with 'maybe'.",
    "If only I had a brain for these things!",
    "That's a question for another lifetime."
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
    chatBox.innerHTML += <div class="chat-bubble user-bubble"><strong>You:</strong> ${userInput}</div>;

    // Get a response from the chatbot and display it
    const botResponse = getResponse();
    chatBox.innerHTML += <div class="chat-bubble bot-bubble"><strong>Bot:</strong> ${botResponse}</div>;

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

// Function to clear the chat history
function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}



function checkEasterEgg(userInput) {
    if (userInput.toLowerCase() === "tell me a secret") {
        return "I'm secretly a world-class chef... in my dreams! 👨‍🍳";
    }
    return null;
}