const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// import { stdin as input, stdout as output } from 'process';

// const readline = require('node:readline/promises');

// const input = require('process.stdin')
// const output = require('process.stdout')


// const rl = readline.createInterface({ input, output });


const questionsArr = [
  `What's your name? Nicknames are also acceptable :)`,
  `What's an activity you like doing?`,
  `What do you listen to while doing that?`,
  `Which meal is your favourite (eg: dinner, brunch, etc.)`,
  `What's your favourite thing to eat for that meal?`,
  `Which sport is your absolute favourite?`,
  `What is your superpower? In a few words, tell us what you are amazing at!`
];

const recursiveAsk = (questionsArr, iter = 0, ansArr = []) => {
  rl.question(questionsArr[0], (answer) => {
    console.log(`Your Answer: ${answer}`);
    ansArr.push(answer);
    
    if (iter === questionsArr.length - 1) {
      for (let ans of ansArr) {
        console.log(ans);
      }
      return rl.close();
    }
    recursiveAsk(questionsArr.slice(1), iter++, ansArr);
  });
};

recursiveAsk(questionsArr);

