function say(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name == 'Google US English');
    utterance.pitch = .9;
    utterance.rate = .9;

    speechSynthesis.speak(utterance);
};

speechSynthesis.getVoices();