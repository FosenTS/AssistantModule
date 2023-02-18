function listen() {
    let inputArea = document.getElementById('input-area');
    let outputArea = document.getElementById('output-area');
  
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "ru_RU";
    recognition.start();

    const textEl = document.getElementById()
    recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
	  if (transcript.includes("Привет")) {
		  outputArea.innerHTML = "Привет, пользователь!";
      const textEl = document.getElementById('output-area');
	  }
      inputArea.innerHTML = event.results[0][0].transcript;
    }
    window.speechSynthesis.cancel();
    const text = textEl.ariaValueMax;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}



