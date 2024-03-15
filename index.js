// Code your solutions in this file
const writeCards = (names, occasion) => {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages;
  };
  
  const names = ["whit", "jane", "whishi"];
  const occasion = "birthday";
  const messages = writeCards(names, occasion);
  console.log(messages);

  const countDown = (number) => {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
};
countDown(5); 