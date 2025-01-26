let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
  let speakInput = new SpeechSynthesisUtterance(input);
  speakInput.rate = 1; // Speed of speech(0.1 to 10)
  speakInput.pitch = 10; // Pitch of speech(-20 to 20)
  speakInput.value = 1; // Volume of speech(0 to 1)
  speakInput.lang = "en-BD"; // Language of speech
  // speakInput.lang = "en-GB";

  window.speechSynthesis.speak(speakInput);
};

window.onload = () => {
  greetingFunc();
  // speakFunc("I am a speaking box. Click on me to hear me speak.");
};

const greetingFunc = () => {
  let date = new Date();
  let hours = date.getHours();
  if (hours >= 0 && hours < 12) {
    speakFunc("Good Morning Sir. How can I help you today?");
  } else if (hours >= 12 && hours < 17) {
    speakFunc("Good Afternoon Sir. How can I help you today?");
  } else {
    speakFunc("Good Evening Sir. How can I help you today?");
  }
};

const startVoiceInput = () => {
  if ("webkitSpeechRecognition" in window) {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (e) => {
      console.log(e);
      let spokenText = e.results[0][0].transcript;
      console.log(spokenText);
      handleCommands(spokenText.toLowerCase());
      box.classList.remove("btn-box");
      btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
    };
    recognition.start();
  } else {
    alert("Speech Recognition is not supported in your browser.");
  }
};

btn.onclick = () => {
  box.classList.add("btn-box");
  btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
  startVoiceInput();
};

const handleCommands = (command) => {
  if (
    // Hello
    command.includes("hello") ||
    command.includes("hi") ||
    command.includes("hey")
  ) {
    speakFunc("Hello Sir. How can I help you today?");
  } else if (
    // Who are you?
    command.includes("who are you?") ||
    command.includes("developed") ||
    command.includes("who")
  ) {
    speakFunc("I am Virtual Assistance developed by Guddu.");
  } else if (
    // How are you?
    command.includes("how are you?") ||
    command.includes("how are you") ||
    command.includes("how are you doing?") ||
    command.includes(" how are")
  ) {
    speakFunc("I am fine. Thank you for asking.");
  }

  // Channel
  else if (
    command.includes("open english with guddu  you tube channel") ||
    command.includes("open english with guddu") ||
    command.includes("open guddu you tube channel") ||
    command.includes("open guddu") ||
    command.includes("english with guddu")
  ) {
    speakFunc("Opening... English with Guddu YouTube channel.");
    window.open("https://www.youtube.com/@englishwithguddu");
  }
  //Google
  else if (command.includes("open google") || command.includes("google")) {
    speakFunc("opening... Google");
    window.open("https://www.google.com");
  } else if (
    //calculator
    command.includes("open calculator") ||
    command.includes("calculator")
  ) {
    speakFunc("opening... calculator");
    window.open("calculator://");
  } else if (
    //whatsapp
    command.includes("open whatsapp") ||
    command.includes("whatsapp")
  ) {
    speakFunc("opening... whatsapp");
    window.open("whatsapp://");
  } else if (
    //telegram
    command.includes("open telegram") ||
    command.includes("telegram")
  ) {
    speakFunc("opening... telegram");
    window.open("telegram://");
  } else if (
    //chrome
    command.includes("open google chrome") ||
    command.includes("google chrome") ||
    command.includes("chrome")
  ) {
    speakFunc("opening... chrome");
    window.open("chrome://");
  } else if (
    // Time
    command.includes("tell me time") ||
    command.includes("what is the time") ||
    command.includes("what is time") ||
    command.includes("what is time now") ||
    command.includes("time")
  ) {
    let time = new Date().toLocaleDateString(undefined, {
      hours: "numeric",
      minutes: "numeric",
    });
    speakFunc(`The time is ${time}`);
  } else if (
    //Date
    command.includes("tell me date") ||
    command.includes("what is the date") ||
    command.includes("what is date") ||
    command.includes("what is date now") ||
    command.includes("date")
  ) {
    let date = new Date().toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
    });
    speakFunc(`The time is ${date}`);
  }
  //YouTube
  else if (command.includes("open youtube") || command.includes("youtube")) {
    speakFunc("Opening... YouTube");
    window.open("https://www.youtube.com");
  } else if (
    //Facebook
    command.includes("open facebook") ||
    command.includes("facebook")
  ) {
    speakFunc("Opening... Facebook");
    window.open("https://www.facebook.com");
  } else if (
    //ChatGpt
    command.includes("open chat gpt") ||
    command.includes("chat gpt")
  ) {
    speakFunc("Opening... Chat Gpt");
    window.open("https://chatgpt.com/");
  } else if (
    //Instagram
    command.includes("open instagram") ||
    command.includes("instagram")
  ) {
    speakFunc("Opening... Instagram");
    window.open("https://www.instagram.com");
  } else if (
    //Atishay
    command.includes("who is atishay") ||
    command.includes("atishay") ||
    command.includes("atishay is")
  ) {
    speakFunc(
      "Atishay is intelligent boy pursuing B Tech in Sha Shib College of Technology, Bhopal"
    );
  } else if (
    //India PM
    command.includes("who is prime minister of india") ||
    command.includes("prime minister of india") ||
    command.includes("india prime minister")
  ) {
    speakFunc(
      "Narendra Modi is the current Prime Minister of India. He is serving as the Prime Minister of India since 2014."
    );
  } else {
    //Google Search
    speakFunc(`This is, What i found on internet regarding ${command}`);
    window.open(`https://www.google.com/search?q=${command}`);
  }
};
