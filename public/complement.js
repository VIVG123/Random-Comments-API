document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".commentBox").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });

  document
  .querySelector(".request-insult")
  .addEventListener("click", function() {
    fetch("/insults")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".commentBox").innerText = data.insult ;
      })
      .catch(function(err) {
        console.error(err);
      });
  });

 