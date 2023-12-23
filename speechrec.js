const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
// thanks mdn!

const sr = new SpeechRecognition();

sr.lang = 'en-US';
sr.continuous = true;

sr.onresult = (e) => {
    parseMessage(e.results[e.results.length - 1][0].transcript);
};

sr.onspeechend = () => {
    console.log('Ended, restarting');
};

sr.onnomatch = () => {
    console.log('No match!');
};

sr.onend = () => {
    sr.start();
};

sr.onerror = (e) => {
    console.error(e);
};

sr.start();