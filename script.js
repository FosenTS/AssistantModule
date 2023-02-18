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
    // 1й вопрос
    else if (transcript.includes("обратная связь по гранту" || transcript.includes("обратная связь по Гранту") || transcript.includes("обратная связь") || transcript.includes("Обратная связь"))) {
      let text = "Добрый день, для запроса обратной связи необходимо зайти в информацию о заявке путем нажатия на (ЗАЯВКА НА ГРАНТОВЫЙ КОНКУРС ПОДАНА) в разделе мои заявки. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
	  }
    // 2й вопрос
    else if (transcript.includes("Обновить данные профиля ГАИС") || transcript.includes("обновить данные профиля гаис") || transcript.includes("обновить данные профиля") || transcript.includes("обновить профиль")) {
      let text = "Добрый день, перейдите на главную страницу системы и нажмите кнопку (обновить), которая расположена рядом с аватаром вашего аккаунта, проблема должна исчезнуть. С Уважением, техническая поддержка АИС (Молодежь России)"
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 3й вопрос
    else if (transcript.includes("перезайти ЕСИА") || transcript.includes("перезайти есиа") || transcript.includes("перезайти в ЕСИА") || transcript.includes("перезайти в есиа")) {
      let text = "Добрый день, после прохождения верификации, вам необходимо перезайти в аккаунт АИС, чтобы данные синхронизировались. Либо, выйти из аккаунта АИС и войти в систему используя кнопку (Войти через ГосУслуги), только убедитесь что в ГосУслугах осуществлён вход именно в ваш аккаунт. С Уважением, техническая поддержка АИС (Молодежь России)"
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
     // 4й вопрос
     else if (transcript.includes("не сохраняются изменения в профиле") || transcript.includes("не сохраняются изменения") || transcript.includes("не изменяется профиль") || transcript.includes("почему не сохраняются изменения в профиле?")) {
      let text = "Добрый день, во время сохранения изменений обратите внимание на поля и вкладки подсвеченные красным цветом. Для успешного сохранения изменений профиля, необходимо полностью заполнить профиль. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 5й вопрос
    else if (transcript.includes("во время подачи заявки на грант не высвечивается созданный проект") || transcript.includes("во время подачи заявки на Грант не высвечивается созданный проект") || transcript.includes("не высвечивается созданный проект") || transcript.includes("при подачи заявки на грант не высвечивается созданный проект")) {
      let text = "Добрый день, дело в том, что при создании данного проекта Вы использовали не подходящий шаблон для данного мероприятия. Узнать какой шаблон необходим Вы можете в правой части на странице мероприятия. Увидеть шаблон созданного проекта можно в строке под названием проекта. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 6й вопрос
    else if (transcript.includes("ошибка 404") || transcript.includes("404")) {
      let text = "Добрый день, ошибка 404 означает что у Вашего аккаунта нет доступа к данной странице. Это может быть из-за не подходящего возраста, региона проживания, или не выбранных направлений деятельности. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
     // 7й вопрос
     else if (transcript.includes("аккаунт верифицирован, галочки в профиле нет") || transcript.includes("аккаунт верифицирован галочки в профиле нет") || transcript.includes("нет галочки в профиле") || transcript.includes("не появлется галочка верификации")) {
      let text = "Добрый день, вам необходимо подтвердить свой аккаунт на сайте Госуслуг , после чего перезайти в профиль на старом модуле АИС, проверить наличие галочки возле Ваших инициалов, затем перезайти в аккаунт ГАИС. Инструкцию как подтвердить аккаунт в ЕСИА можно найти здесь https://www.gosuslugi.ru/help/faq/c-1. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
     // 8й вопрос
     else if (transcript.includes("для чего нужны баллы") || transcript.includes("зачем нужны баллы") || transcript.includes("для чего нужны баллы?") || transcript.includes("зачем нужны баллы?")) {
      let text = "Добрый день, баллы - показатель активности пользователя в системе. Ни для чего более они не нужны и не могут быть использованы. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 9й вопрос
    else if (transcript.includes("отвязать ЕСИА") || transcript.includes("отвязать есиа") || transcript.includes("отвязка ЕСИА") || transcript.includes("отвязка есиа")) {
      let text = "Добрый день, чтобы отменить верификацию аккаунта: Для этого перейдите в меню (настройки) в АИС myrosmol.ru/settings и нажмите отменить привязку ЕСИА, Либо перейдите в настройки аккаунта Госуслуг по ссылке lk.gosuslugi.ru/settings/system-permissions и отмените привязку АИС. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 10й вопрос
    else if (transcript.includes("как узнать id профиля") || transcript.includes("где посмотреть id профиля") || transcript.includes("мой id")) {
      let text = "Добрый день, ID Своего профиля Вы можете узнать в меню (редактирования профиля) под Вашим аватаром https://myrosmol.ru/profile. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 11й вопрос
    else if (transcript.includes("создать кабинет НКО") || transcript.includes("создать кабинет нко")) {
      let text = "Добрый день,подробную инструкцию для регистрации кабинета НКО Вы можете найти в методических рекомендациях для НКО, которые расположены по ссылке https://grants.myrosmol.ru/recomendations. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 12й вопрос
    else if (transcript.includes("регистрация мероприятия на АИС") || transcript.includes("регистрация мероприятия на аис") || transcript.includes("регистрация мероприятия")) {
      let text = "Добрый день, чтобы завести мероприятие выше регионального нужно написать официальное письмо на почту Op@fadm.gov.ru , все остальные мероприятия через органы исполнительной власти, реализующим государственную молодежную политику на территории субъекта. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 13й вопрос
    else if (transcript.includes("чтобы поменять почту к которой привязан аккаунт") || transcript.includes("поменять почту") || transcript.includes("сменить почту")) {
      let text = "Добрый день, чтобы поменять почту к которой был привязан аккаунт - Вам необходимо создать новый аккаунт указав новую почту при регистрации, затем оставить заявку в техническую поддержку на объединение двух аккаунтов указав ID обоих аккаунтов. С Уважением, техническая поддержка АИС (Молодежь России)";
		  outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    // 14 вопрос
    else if (transcript.includes("что нужно для удаления ЛК ?") || transcript.includes("что нужно для удаления ЛК") || transcript.includes("что нужно для удаления лк ?") || transcript.includes("что нужно для удаления лк")) {
      let text = "Добрый день, Удаление личного кабинета (Молодежь России) производится вручную специалистами технической поддержки.Для того чтобы оставить заявку на удаление, Вам необходимо сообщить нам ID и e-mail аккаунта который необходимо удалить. С Уважением, техническая поддержка АИС (Молодежь России)";
      outputArea.innerHTML = text;
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }

    else if (transcript.includes("где посмотреть актуальные конкурсы") || transcript.includes("где посмотреть актуальные конкурсы?") || transcript.includes("Где посмотреть актуальные конкурсы?") || transcript.includes("Где посмотреть актуальные конкурсы")){
	let text = "В личном кабинете ФГАИС (Молодежь России) в Грантовом модуле (grants.myrosmol.ru) в разделе Мероприятия";
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
  if (transcript == "Привет") {
    let text = "Привет, пользователь!";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 1й вопрос
  else if (transcript ==("обратная связь по гранту") || transcript==("обратная связь по Гранту") || transcript==("обратная связь") || transcript==("Обратная связь")) {
    let text = "Добрый день, для запроса обратной связи необходимо зайти в информацию о заявке путем нажатия на (ЗАЯВКА НА ГРАНТОВЫЙ КОНКУРС ПОДАНА) в разделе мои заявки. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 2й вопрос
  else if (transcript==("Обновить данные профиля ГАИС") || transcript==("обновить данные профиля гаис") || transcript==("обновить данные профиля") || transcript==("обновить профиль")) {
    let text = "Добрый день, перейдите на главную страницу системы и нажмите кнопку (обновить), которая расположена рядом с аватаром вашего аккаунта, проблема должна исчезнуть. С Уважением, техническая поддержка АИС (Молодежь России)"
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 3й вопрос
  else if (transcript==("перезайти ЕСИА") || transcript==("перезайти есиа") || transcript==("перезайти в ЕСИА") || transcript==("перезайти в есиа")) {
    let text = "Добрый день, после прохождения верификации, вам необходимо перезайти в аккаунт АИС, чтобы данные синхронизировались. Либо, выйти из аккаунта АИС и войти в систему используя кнопку (Войти через ГосУслуги), только убедитесь что в ГосУслугах осуществлён вход именно в ваш аккаунт. С Уважением, техническая поддержка АИС (Молодежь России)"
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
   // 4й вопрос
   else if (transcript==("не сохраняются изменения в профиле") || transcript==("не сохраняются изменения") || transcript==("не изменяется профиль") || transcript==("почему не сохраняются изменения в профиле?")) {
    let text = "Добрый день, во время сохранения изменений обратите внимание на поля и вкладки подсвеченные красным цветом. Для успешного сохранения изменений профиля, необходимо полностью заполнить профиль. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 5й вопрос
  else if (transcript==("во время подачи заявки на грант не высвечивается созданный проект") || transcript==("во время подачи заявки на Грант не высвечивается созданный проект") || transcript==("не высвечивается созданный проект") || transcript==("при подачи заявки на грант не высвечивается созданный проект")) {
    let text = "Добрый день, дело в том, что при создании данного проекта Вы использовали не подходящий шаблон для данного мероприятия. Узнать какой шаблон необходим Вы можете в правой части на странице мероприятия. Увидеть шаблон созданного проекта можно в строке под названием проекта. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 6й вопрос
  else if (transcript==("ошибка 404") || transcript==("404")) {
    let text = "Добрый день, ошибка 404 означает что у Вашего аккаунта нет доступа к данной странице. Это может быть из-за не подходящего возраста, региона проживания, или не выбранных направлений деятельности. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
   // 7й вопрос
   else if (transcript==("аккаунт верифицирован, галочки в профиле нет") || transcript==("аккаунт верифицирован галочки в профиле нет") || transcript==("нет галочки в профиле") || transcript==("не появлется галочка верификации")) {
    let text = "Добрый день, вам необходимо подтвердить свой аккаунт на сайте Госуслуг , после чего перезайти в профиль на старом модуле АИС, проверить наличие галочки возле Ваших инициалов, затем перезайти в аккаунт ГАИС. Инструкцию как подтвердить аккаунт в ЕСИА можно найти здесь https://www.gosuslugi.ru/help/faq/c-1. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
   // 8й вопрос
   else if (transcript==("для чего нужны баллы") || transcript==("зачем нужны баллы") || transcript==("для чего нужны баллы?") || transcript==("зачем нужны баллы?")) {
    let text = "Добрый день, баллы - показатель активности пользователя в системе. Ни для чего более они не нужны и не могут быть использованы. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 9й вопрос
  else if (transcript==("отвязать ЕСИА") || transcript==("отвязать есиа") || transcript==("отвязка ЕСИА") || transcript==("отвязка есиа")) {
    let text = "Добрый день, чтобы отменить верификацию аккаунта: Для этого перейдите в меню (настройки) в АИС myrosmol.ru/settings и нажмите отменить привязку ЕСИА, Либо перейдите в настройки аккаунта Госуслуг по ссылке lk.gosuslugi.ru/settings/system-permissions и отмените привязку АИС. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 10й вопрос
  else if (transcript==("как узнать id профиля") || transcript==("где посмотреть id профиля") || transcript==("мой id")) {
    let text = "Добрый день, ID Своего профиля Вы можете узнать в меню (редактирования профиля) под Вашим аватаром https://myrosmol.ru/profile. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 11й вопрос
  else if (transcript==("создать кабинет НКО") || transcript==("создать кабинет нко")) {
    let text = "Добрый день,подробную инструкцию для регистрации кабинета НКО Вы можете найти в методических рекомендациях для НКО, которые расположены по ссылке https://grants.myrosmol.ru/recomendations. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 12й вопрос
  else if (transcript==("регистрация мероприятия на АИС") || transcript==("регистрация мероприятия на аис") || transcript==("регистрация мероприятия")) {
    let text = "Добрый день, чтобы завести мероприятие выше регионального нужно написать официальное письмо на почту Op@fadm.gov.ru , все остальные мероприятия через органы исполнительной власти, реализующим государственную молодежную политику на территории субъекта. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 13й вопрос
  else if (transcript==("чтобы поменять почту к которой привязан аккаунт") || transcript==("поменять почту") || transcript==("сменить почту")) {
    let text = "Добрый день, чтобы поменять почту к которой был привязан аккаунт - Вам необходимо создать новый аккаунт указав новую почту при регистрации, затем оставить заявку в техническую поддержку на объединение двух аккаунтов указав ID обоих аккаунтов. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  // 14 вопрос
  else if (transcript==("что нужно для удаления ЛК ?") || transcript==("что нужно для удаления ЛК") || transcript==("что нужно для удаления лк ?") || transcript==("что нужно для удаления лк")) {
    let text = "Добрый день, Удаление личного кабинета (Молодежь России) производится вручную специалистами технической поддержки.Для того чтобы оставить заявку на удаление, Вам необходимо сообщить нам ID и e-mail аккаунта который необходимо удалить. С Уважением, техническая поддержка АИС (Молодежь России)";
    outputArea.innerHTML = text;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
    else if (transcript == ("где посмотреть актуальные конкурсы") || transcript == ("где посмотреть актуальные конкурсы?") || transcript == ("Где посмотреть актуальные конкурсы?") || transcript == ("Где посмотреть актуальные конкурсы")){
	let text = "В личном кабинете ФГАИС (Молодежь России) в Грантовом модуле (grants.myrosmol.ru) в разделе Мероприятия";
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
