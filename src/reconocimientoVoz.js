let speechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

let recognition   = new speechRecognition();
speechRecognition.interimResults = true;
recognition.lang = "es-AR";

recognition.continuous = true;
recognition.maxAlternatives = 1;

recognition.onstart = function () {
    console.log("voice recog on");
};

recognition.onspeechend = function () {
    console.log("no activity");
};

recognition.onerror = () => console.log("no voice");

 

export default recognition