<h4>Реализованная функциональность</h4>
<ul>
    <li>Модуль распознающий и переводящий в текстовый формат голосовой модуль;</li>
    <li>Модуль переводящий текст в человеческую речь с возможностью её озвучить</li>
    <li>Цифровая система ответов на  перечень заданных вопросов с учетом разных вариаций</li>
    <li>Прототип модуля сохранранения неизвестных вопросов в базу данных для последующей ручной обработки</li>
    <li>Прототип модуля уведомления пользователя о каких то событиях связанных с информационным ресурсом</li>
</ul> 
<h4>Особенность проекта в следующем:</h4>
<ul>
 <li>Киллерфича-1;</li>
 <li>Структура кода позволяет со временем интегрировать новые вопросы-ответы, а также новые вариации к старым вопросам.</li>
 <li>Гибкий функционал цифрового помощника упрощает работу с информационным ресурсом пользователям с ограниченными возможностями;</li>  
 </ul>
<h4>Основной стек технологий:</h4>
<ul>
	<li>HTML - язык разметки</li>
	<li>СSS - язык стилей(внешнего вида)</li>
	<li>JavaScript - функциональный язык программирования</li>
	<li>webkitSpeechRecognition - API записи и обработки человеческой речи в текст</li>
	<li>SpeechSyntesis - API перевода текста в реьч</li>
 </ul>


СРЕДА ЗАПУСКА
------------
Развертывания модуля отдельно:
1) Создать сервер с поддержкой http и https
2) Разместить репозиторий на каком либо домене

Интегрирование модуля на существующий сайт:
1) Выделение из index.html блока <section>...</section> и поместить его на сайт
2) Копировать стили CSS из src/css/style.css в свои папки, также проверить и скорректировать классы объектов при совпадению с существующими на интегрируемой странице
3) Копировать index.js в собственные папки и скорректировать id получаемых объектов при совпадениях с существующими на интегрируемой странице

УСТАНОВКА
------------
Выполните 
~~~
sudo apt-get update
sudo apt-get upgrade
sudo apt install git
git clone https://github.com/FosenTS/AssistantModule
~~~
РАЗРАБОТЧИКИ

<h4>Круглов Иван fullstack https://t.me/FosenTS </h4>
<h4>Ким Дмитрий frontend-assistant https://t.me/HeDoTPoGa  </h4>
<h4>Джура Инна team-leader https://t.me/roodysun </h4>
<h4>Кривошеев Сергей disagner https://t.me/darnis_13</h4>

