const { text } = require("express");

function listen() {
    let inputArea = document.getElementById('input-area');
    let outputArea = document.getElementById('output-area');
  
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "ru_RU";
    recognition.start();

    recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
	  if (transcript.includes("Привет")) {
      let text = "Привет, пользователь!";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
	  }
    else if (transcript.includes("обратная связь по гранту" || transcript.includes("обратная связь по Гранту"))){
      let text = "Добрый день, для запроса обратной связи необходимо зайти в информацию о заявке, путем нажатия на <<ЗАЯВКА НА ГРАНТОВЫЙ КОНКУРС ПОДАНА>> в разделе мои заявки. С Уважением, Техническая поддержка АИС Молодежь России"
      outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    else {
      let text = "В данный момент ассистент не способен ответить на ваш вопрос. Мы перенаправим ваш вопрос в банк вопросов, для формирования ответа";
      outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
      inputArea.innerHTML = transcript;
    }
}

function handInput() {
  let transcript = document.getElementById('LabelText').value;
  let inputArea = document.getElementById('input-area');
  let outputArea = document.getElementById('output-area');
  if (transcript = "Привет") {
    let text = "Привет, пользователь!";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  else {
    let text = "В данный момент ассистент не способен ответить на ваш вопрос. Мы перенаправим ваш вопрос в банк вопросов, для формирования ответа";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
    inputArea.innerHTML = transcript;
}
