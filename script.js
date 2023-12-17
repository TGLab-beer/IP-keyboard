const texts = ["Великолепная зеленая трава шуршит под легким ветерком. Пение птиц наполняет воздух свежестью и живостью. Солнце ярко светит, даря свои теплые лучи всему вокруг. Вдали виднеется голубое небо, усыпанное белыми пушистыми облаками. Здесь, среди природы, человек чувствует себя особенным, един с окружающим миром. Листва деревьев шелестит, создавая неповторимую мелодию лесной гармонии. Воздух наполнен ароматами цветов и трав, приглашая каждого насладиться запахами природы. Жизнь кипит вокруг, каждый организм стремится к собственной нише в этом удивительном эко-системе. В этом мире есть место для каждого, место, где каждый может найти свое счастье и покой. Человек находит здесь вдохновение, силу и баланс, очищая свой разум и душу. А все вокруг напоминает о чудесах жизни, о том, как велик и непостижим ее круговорот.",
"В часах хаоса и раздоров, когда тропинки души запутались в клубках нежданной судьбы, важно помнить о ценности мгновений. Ведь каждый вздох, каждый взгляд, каждое слово — частичка необратимой жизни. Стоит лишь остановиться, взглянуть вокруг и проникнуться этой закрученной мозаикой реальности. В истерзанном мире суеты и потерь настоящее словно мерцает звездой в бескрайнем космосе. И все мы — лишь крошечные песчинки на галактическом песке времени. Однако в этой многоликой вселенной каждый из нас несет в себе свою уникальную искру, способную осветить тьму и согреть холодные сердца. Мы — странники в бескрайних просторах, изучающие азбуку жизни и любви, непрерывно познающие и переживающие нелегкие испытания. Пусть мы идем сквозь бурю и грозы, но в конце этого пути светит надежда и возможность переосмыслить свою жизнь. Ведь каждый миг — это новая страница в нашей истории, и каждый шаг наполнен бесконечными возможностями."]
    var correctText = "";
    var state = "ready";
    var isError = false;
    var timer = 0;
    function changeState(newState){
      if(newState === "start" && state === "ready"){
        startTest();
        state = "start";
      }
    }

    function startTest() {
      var input = document.getElementById("input");
      input.value = "";
      input.disabled = false;
      input.focus();
      document.getElementById("error-msg").innerHTML = "";

      var result = document.getElementById("result");
      var words = texts.length;

      setInterval(function() {
        //var elapsedTime = (Date.now() - startTime) / 1000 / 60; // в минутах
        var typedWords = input.value.trim().split(" ").length;
        if (input.value[input.value.length - 1] === texts[0][input.value.length - 1]) {
          var speed = typedWords / timer;
          
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
        
      }, 10);

      
      document.getElementById("text").innerHTML = texts[0];
    }

    function handleKeyDown(event) {
      if(isError){
        console.log("trying to change");
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


    
