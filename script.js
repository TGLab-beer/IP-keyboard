var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a placerat nisl. Quisque nec ipsum et lectus sagittis pharetra. Duis a eleifend nulla. Sed id enim consequat, lobortis ligula eu, facilisis lorem. Curabitur sit amet ullamcorper massa. Donec libero tellus, euismod varius rutrum non, pharetra quis enim. Nullam bibendum sapien sed libero pulvinar, ullamcorper bibendum est sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tincidunt eros at dictum malesuada. Sed scelerisque pretium leo, sed efficitur lectus mattis vitae. Aenean varius mauris pellentesque posuere pulvinar. Nulla facilisi. Pellentesque id volutpat massa. Integer eu risus sed ante maximus dapibus vel et risus. Aliquam id nisl dapibus, lacinia dui nec, bibendum nulla. Donec varius, nunc at euismod ornare, lectus urna sollicitudin mauris, quis porttitor magna lectus non purus.";

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