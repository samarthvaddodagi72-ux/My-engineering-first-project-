const friendName = "Bestie"; // <--- CHANGE THIS to your friend's name

document.getElementById('wish-btn').addEventListener('click', () => {
    // 1. Visual update
    document.getElementById('name-display').innerText = `Happy Birthday, ${friendName}!`;
    
    // 2. AI Voice Greeting
    const message = new SpeechSynthesisUtterance();
    message.text = `Hello! I am your personal AI assistant. I have been instructed to wish ${friendName} a very happy birthday. You look amazing today! Let's celebrate!`;
    
    // Customize voice properties
    message.volume = 1;
    message.rate = 1; 
    message.pitch = 1.2; // Slightly higher pitch for a friendly AI feel

    window.speechSynthesis.speak(message);

    // Optional: Add confetti effect or extra animations here
    alert("AI Greeting Initiated! 🎂");
});
