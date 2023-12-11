const texts = ["Великолепная зеленая трава шуршит под легким ветерком. Пение птиц наполняет воздух свежестью и живостью. Солнце ярко светит, даря свои теплые лучи всему вокруг. Вдали виднеется голубое небо, усыпанное белыми пушистыми облаками. Здесь, среди природы, человек чувствует себя особенным, един с окружающим миром. Листва деревьев шелестит, создавая неповторимую мелодию лесной гармонии. Воздух наполнен ароматами цветов и трав, приглашая каждого насладиться запахами природы. Жизнь кипит вокруг, каждый организм стремится к собственной нише в этом удивительном эко-системе. В этом мире есть место для каждого, место, где каждый может найти свое счастье и покой. Человек находит здесь вдохновение, силу и баланс, очищая свой разум и душу. А все вокруг напоминает о чудесах жизни, о том, как велик и непостижим ее круговорот.",
"В часах хаоса и раздоров, когда тропинки души запутались в клубках нежданной судьбы, важно помнить о ценности мгновений. Ведь каждый вздох, каждый взгляд, каждое слово — частичка необратимой жизни. Стоит лишь остановиться, взглянуть вокруг и проникнуться этой закрученной мозаикой реальности. В истерзанном мире суеты и потерь настоящее словно мерцает звездой в бескрайнем космосе. И все мы — лишь крошечные песчинки на галактическом песке времени. Однако в этой многоликой вселенной каждый из нас несет в себе свою уникальную искру, способную осветить тьму и согреть холодные сердца. Мы — странники в бескрайних просторах, изучающие азбуку жизни и любви, непрерывно познающие и переживающие нелегкие испытания. Пусть мы идем сквозь бурю и грозы, но в конце этого пути светит надежда и возможность переосмыслить свою жизнь. Ведь каждый миг — это новая страница в нашей истории, и каждый шаг наполнен бесконечными возможностями."]
    var correctText = "";


    function startTest() {
      var input = document.getElementById("input");
      input.value = "";
      input.disabled = false;
      input.focus();
      document.getElementById("error-msg").innerHTML = "";

      var timer = document.getElementById("timer");
      var result = document.getElementById("result");
      var words = text.split(" ").length;
      var startTime = Date.now();

      setTimeout(function() {
        var elapsedTime = (Date.now() - startTime) / 1000 / 60; // в минутах
        var typedWords = input.value.trim().split(" ").length;
        if (input.value.trim() === correctText.trim()) {
          var speed = typedWords / elapsedTime;
          result.innerHTML = "Вы набрали " + typedWords + " слов в минуту.";
        } else {
          result.innerHTML = "";
          document.getElementById("error-msg").innerHTML = "Вы набрали неправильный текст.";
        }
        input.disabled = true;
      }, 60000);

      // Генерирует новый случайный текст
      correctText = text.split(" ").sort(function() {
        return 0.5 - Math.random();
      }).slice(0, 200).join(" ");
      document.getElementById("text").innerHTML = correctText;
    }

    function checkText() {
      var input = document.getElementById("input");
      if (input.value.trim() === correctText.trim()) {
        input.style.border = "2px solid green";
      } else {
        input.style.border = "2px solid red";
      }
    }
    (function(){
      let timeLeft = 0;
          function updateTimer() {
        document.getElementById('timer').textContent = timeLeft;
      }
      function countdown() {
        if (timeLeft > -1) {
          timeLeft++;
          updateTimer();
        } else {
          clearInterval(timer);
          alert('Время вышло!');
        }
      }
      let timer = setInterval(countdown, 1000);
      })();
