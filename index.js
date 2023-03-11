// Code your solutions in this;
/*for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}*/
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);*/
/*let name = ['Ada', 'Brendan', 'Ali']
let event = "birthday"*/
/*function writeCards(["Ada", "Brendan", "Ali"], "birthday"){
    for(let i = 0; i < name.length; i++);
    console.log(`Thank you, ${name}, for the wonderful ${event} gift!`);
}*/
/*console.log(writeCards(name, event))*/
function writeCards(namesArray, eventName) {
    let messagesArray = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messagesArray.push(message);
    }
  
    return messagesArray;
  }
  
  // Example usage:
  let names = ['Alice', 'Bob', 'Charlie'];
  let event = 'birthday';
  let messages = writeCards(names, event);
  console.log(messages);

  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  // Example usage:
  countDown(10);
  