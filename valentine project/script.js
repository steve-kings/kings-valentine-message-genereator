// Predefined Longer Love Messages
const messages = [
  "You are my sunshine! ☀️❤️ Your love brightens my darkest days and fills my heart with warmth. I cherish every moment with you and can't wait for all the beautiful memories we'll create together.",
  "I love you to the moon and back! 🌙💖 No distance is too far, no challenge too great when I'm with you. You are my forever, my always, and my greatest adventure.",
  "You make my heart skip a beat! 💓 Every time I see you, my heart races with excitement. You are my greatest joy, my deepest love, and the one who makes my soul dance with happiness.",
  "Forever and always, you and me! 💑 No matter where life takes us, I promise to stand by your side, through the good times and bad. You are my home, my love, and my everything.",
  "You are the best thing that ever happened to me! 🥰 I never knew love could feel this beautiful until you walked into my life. Every day with you is a blessing, and I cherish every moment.",
  "Every moment with you is magical! ✨ Whether we are laughing together, sharing secrets, or simply sitting in silence, being with you is the most wonderful feeling in the world.",
  "You're my dream come true! 💕 I wished for love, and then I found you. You are everything I have ever wanted and more. Thank you for making my dreams a reality.",
  "I can't imagine my life without you! ❤️ From the moment you entered my life, everything changed for the better. You are my love, my joy, and my greatest blessing.",
  "You are my heart, my soul, my everything! 💘 My world is brighter, my heart is lighter, and my soul is complete because I have you. I love you more than words can express.",
  "With you, every day feels like Valentine's Day! 🌹 Love isn’t just a one-day celebration with you. You make me feel special every single day, and I will always do the same for you.",
  "No matter how many times I say 'I love you,' it will never be enough to express how much you mean to me. You are my forever love. 💖",
  "You are the missing piece to my heart. Before you, I was incomplete, but now I feel whole. Thank you for being my love, my best friend, and my soulmate.",
  "I fall in love with you more and more every day. Just when I think I couldn’t love you any more than I already do, you prove me wrong in the best way possible. ❤️",
  "Your love is my safe place, my comfort, and my happiness. I never knew true love until I found you, and now I can’t imagine my life without you. 💞",
  "Loving you is the easiest thing I’ve ever done. Every moment with you is filled with love, laughter, and pure happiness. You are my heart and soul. 💑",
  "They say love is a journey, and I’m so grateful that I get to walk this beautiful path with you by my side. You make every step worth it. 🌏💕",
  "When I look into your eyes, I see my future. A future filled with love, laughter, and endless happiness because you are in it. 💍💖",
  "You are my favorite hello and my hardest goodbye. No matter how much time we spend apart, my heart always longs for you. 💘",
  "Holding you in my arms is my favorite place to be. I never want to let go because, in your embrace, I find my peace and my love. 🤗❤️",
  "Our love is like a beautiful melody, playing in perfect harmony. Every note, every beat, is a testament to the love we share. 🎶💖",
  "If I had a flower for every time I thought of you, I would have a garden that blooms forever. Your love is my greatest treasure. 🌺💕",
  "I don’t need a fairytale because I already have the most beautiful love story—with you. You are my happily ever after. 📖💖",
  "Every time I hold your hand, I feel like I’m holding my entire world. You are my past, my present, and my future. 🌎💞",
  "I love you more than words can describe. My heart beats for you, and I will spend my life showing you just how much you mean to me. 💓",
  "You are my first thought in the morning and my last thought before I sleep. Loving you is the best part of my day, every day. 🌞🌙",
  "Through every challenge, every triumph, and every moment in between, I choose you. I will always choose you. 💍💑"
];

// Generate Random Message
document.getElementById("generateMessageBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("messageInput").value = messages[randomIndex];
});

// Send via WhatsApp
document.getElementById("sendWhatsAppBtn").addEventListener("click", () => {
  const message = document.getElementById("messageInput").value;
  if (message.trim() !== "") {
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  } else {
    alert("Please generate a love message first!");
  }
});

// Floating Hearts Animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  document.getElementById("heart-container").appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Generate hearts at intervals
setInterval(createHeart, 700);
