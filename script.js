function listen() {
    let inputArea = document.getElementById('input-area');
    let outputArea = document.getElementById('output-area');
  
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "ru_RU";
    recognition.start();
  
    recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
	  if (transcript.includes("Привет")) {
		  outputArea.innerHTML = "Привет, пользователь!";
	  }
      inputArea.innerHTML = event.results[0][0].transcript;
    }
}

