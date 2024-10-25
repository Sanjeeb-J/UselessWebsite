async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    document.getElementById("chat-box").innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    const response = await fetch("https://<your-backend-url>/get_response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: userInput })
    });

    const data = await response.json();
    document.getElementById("chat-box").innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
    document.getElementById("user-input").value = "";  // Clear input field
}
