const texts = ["Великолепная зеленая трава шуршит под легким ветерком. Пение птиц наполняет воздух свежестью и живостью. Солнце ярко светит, даря свои теплые лучи всему вокруг. Вдали виднеется голубое небо, усыпанное белыми пушистыми облаками. Здесь, среди природы, человек чувствует себя особенным, един с окружающим миром. Листва деревьев шелестит, создавая неповторимую мелодию лесной гармонии. Воздух наполнен ароматами цветов и трав, приглашая каждого насладиться запахами природы. Жизнь кипит вокруг, каждый организм стремится к собственной нише в этом удивительном эко-системе. В этом мире есть место для каждого, место, где каждый может найти свое счастье и покой. Человек находит здесь вдохновение, силу и баланс, очищая свой разум и душу. А все вокруг напоминает о чудесах жизни, о том, как велик и непостижим ее круговорот.",
"В часах хаоса и раздоров, когда тропинки души запутались в клубках нежданной судьбы, важно помнить о ценности мгновений. Ведь каждый вздох, каждый взгляд, каждое слово — частичка необратимой жизни. Стоит лишь остановиться, взглянуть вокруг и проникнуться этой закрученной мозаикой реальности. В истерзанном мире суеты и потерь настоящее словно мерцает звездой в бескрайнем космосе. И все мы — лишь крошечные песчинки на галактическом песке времени. Однако в этой многоликой вселенной каждый из нас несет в себе свою уникальную искру, способную осветить тьму и согреть холодные сердца. Мы — странники в бескрайних просторах, изучающие азбуку жизни и любви, непрерывно познающие и переживающие нелегкие испытания. Пусть мы идем сквозь бурю и грозы, но в конце этого пути светит надежда и возможность переосмыслить свою жизнь. Ведь каждый миг — это новая страница в нашей истории, и каждый шаг наполнен бесконечными возможностями.",
"Тест т"]
    var correctText = "";
    var state = "ready";
    var isError = false;
    var timer = 0;
    var logic = null;
    function changeState(newState){
      if(newState === "start" && state === "ready"){
        startTest();
        state = newState;
      }
      if(newState === "ready"){
        timer = 0;
        isError = false;
        document.getElementById("input").readOnly = false;
        document.getElementById("input").value = '';
        document.getElementById("text").innerHTML = 'Приготовьтесь к печати, когда тренажер запустится тут появится текст, который нужно будет перепечатать в поле ниже. Если вы допустите ошибку ввод текста будет невозможен до тех пор, пока вы ее не исправите. Когда будете готовы нажмите "Начать тест"';
        updateTimer();
        clearInterval(logic);
        state = newState;
      }
      if(newState === "complete"){
        document.getElementById("text").innerHTML = "Вы успешно завершили тест, ваши результаты вы можете увидить выше. Чтобы начать тест снова и улучшить свои навыки нажмите кнопку перезапуска";
        state = newState;
      }
    }
    document.addEventListener('DOMContentLoaded', function () {
      var inputElement = document.getElementById('input');

      inputElement.addEventListener('paste', function (event) {
        event.preventDefault();
      });
    });
    function getRandomNumber(min, max) {
      var randomFraction = Math.random();
    
      var randomNumber = Math.floor(randomFraction * (max - min + 1)) + min;
    
      return randomNumber;
    }
    function restart(){
      changeState("ready");
    }
    function startTest() {
      var numberOfText = getRandomNumber(0, texts.length - 1);
      var input = document.getElementById("input");
      input.value = "";
      input.disabled = false;
      input.focus();

      var result = document.getElementById("result");

      logic = setInterval(function() {
        //var elapsedTime = (Date.now() - startTime) / 1000 / 60; // в минутах
        if(state === "start"){
        var typedWords = input.value.trim().split(" ").length;
        var symbolsPerMinute = document.getElementById("speed_symbols");
        if(input.value.length > 0)
          symbolsPerMinute.textContent = Math.round((input.value.length / timer) * 60) + " символов в минуту";
        else
          symbolsPerMinute.textContent = "0 символов в минуту"
        var wordsPerMinute = document.getElementById("speed_words");
        if(input.value.length > 0)
          wordsPerMinute.textContent = Math.min(Math.round(((input.value.split(" ").length - 1) / timer) * 60), input.value.split(" ").length - 1) + " слов в минуту";
        else
          wordsPerMinute.textContent = "0 слов в минуту"
        if(input.value === texts[numberOfText]){
          clearInterval(logic);
          console.log("Функция остановлена");
          changeState("complete");
        }
        console.log(numberOfText);
        if (input.value[input.value.length - 1] === texts[numberOfText][input.value.length - 1]) {
          input.style.color = 'black';
          input.readOnly = false;
          isError = false;
        } else {
          result.innerHTML = "";
          input.readOnly = true;
          isError = true;

          var inputElement = input;
          var lastCharIndex = input.length - 1;
          inputElement.setSelectionRange(lastCharIndex, lastCharIndex + 1);
          inputElement.style.color = 'red';
        }
      }
      }, 1);

      document.getElementById("text").innerHTML = texts[numberOfText];
    }

    function handleKeyDown(event) {
      if(isError){
        input = document.getElementById("input");
      if (event.keyCode === 8) {
          event.preventDefault();
          console.log("backspace");
  
          if (input.value.length > 0) {
              var newValue = input.value.slice(0, -1);
  
              input.value = newValue;
          }
      }
    }
  }
    function checkText() {
      var input = document.getElementById("input");
      if (input.value.trim() === correctText.trim()) {
        input.style.border = "2px solid green";
      } else {
        input.style.border = "2px solid red";
      }
    }

    function incrementTimer() {
      if (state === "start") {
        timer++;
        updateTimer();
      }
    }
    function updateTimer() {
      document.getElementById('timer').textContent = "Время:" + timer;
    }
    setInterval(incrementTimer, 1000);


    
