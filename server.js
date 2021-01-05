const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
  "You like ugly today",
  "That dress looks shit on you",
  "Have you been procastinating?",
  "You can do only easy things",
  "You've gotten far in this course. But you're not gonna pass this",
  "You're programming! How dumb is that?",
  "I'm really ashamed of you",
  "You made this worse",
  "You've learned a lot of things, and you take a lot of time for it."
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

function getRandomInsult() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
   
    .end(); 

});

app.get("/insults", function(req ,res) 
{
  res 
    .json(
      {
        insult : getRandomInsult() 
      }
    )

    .end() ;
})

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");