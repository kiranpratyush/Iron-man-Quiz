
let readLineSync = require('readline-sync');
let score =0;
//saving the questions in an array
let questions =[
   {question:"When did Iron Man first appear in comics ?",
   options:["1954","1963","1972","1981"],
    answer:"1963"},
    {
    question:"What year the first Iron man movie come out?",
    options:["2004","2006","2008","2010"],
    answer:"2008"},
    {
  question:"What is the name of the actor who plays Iron Man?",
  options:["Robert Downey Jr","Chris Hemsworth","Tom Holland","Chris Evans"],
  answer:"Robert Downey Jr"
}];
//saving the names and highscores
let highScores =[{name:"Pratyush",score:3},{name:"Anjali",score:2}];
let userName = readLineSync.question('What is Your Name ? \n');
console.log("Welcome "+userName+' to Iron Man Quiz ?');

//creating the function play

function play(question,answer,options)
{
  let index = readLineSync.keyInSelect(options,question);
  if(index === -1)
  { 
    console.log("You have skipped the question");
  }
  else if(options[index].toLowerCase()===answer.toLowerCase())
  {
    console.log("you are right");
    score = score+=1
  }
  else
  {
    console.log('oops! you get it wrong');

  }
  console.log("score is "+score);
  console.log("----------------");
}
//creating a function to check if the player has beaten the highScores

function isBeat(score)
{
  for(let i=0;i<highScores.length;i++)
  {
    if(score>highScores[i].score)
    {
      console.log("You have beaten the score of "+highScores[i].name);
      console.log("To update your name send me a screenshot");
    }
  }
}

//creating the question

 
for(let i=0;i<questions.length;i++)
{ let currQuestion = questions[i]
  play(currQuestion.question,currQuestion.answer,currQuestion.options);
}

console.log("Your final score is "+score);
console.log("Current high scores are ");
for(let i =0;i<highScores.length;i++)
{
  console.log(highScores[i].name +" : "+highScores[i].score );
}
isBeat(score);


