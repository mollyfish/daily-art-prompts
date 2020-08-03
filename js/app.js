'use strict';
(function() {
  const mundane = [
    'has a long tail',
    'riding a bike',
    'carrying a baby',
    'carrying a suitcase',
    'carrying an umbrella',
    'has a soccer ball',
    'holding flowers',
    'holding a scepter',
    'ridng a bike',
    'cooking',
    'in a garden',
    'reading',
    'celebrating',
    'dancing',
    'searching',
    'eating pie',
    'eating noodles',
    'eating ice cream',
    'is a cat',
    'is a dog',
    'is a parrot',
    'is a lion',
    'is a whale',
    'is a mermaid',
    'is a horse',
    'is an elephant',
    'is a butterfly',
    'is a bird',
    'is a flower',
    'is a snake',
    'has bushy eyebrows',
  ];
  const fantastic = [
    'has six eyes',
    'has horns',
    'has antlers',
    'glows',
    'has four wings',
    'has the head of a frog',
    'has the head of a lion',
    'has the head of a dog',
    'has the head of a fish',
    'has the head of a cat',
    'has the head of a horse',
    'has the head of a bird',
    'is a giant',
    'has flowers for hair',
    'is tiny',
    'amphibious',
    'is half a ghost',
    'is half fish',
    'lives underground',
    'lives in the sky',
    'lives in a shoe',
    'lives underwater',
    'lives in a tree',
    'has scales',
    'breathes fire',
    'has roots',
  ];
  const garb = [
    'a top hat',
    'glasses',
    'a crown',
    'a floppy hat',
    'a cape',
    'fabulous earrings',
    'a hat',
    'a monocle',
    'sandals',
    'boots',
    'a swimsuit',
    'a sandwich board',
    'a cozy coat',
    'a crazy sweater',
    'a dress',
    'pants',
    'buckled shoes',
    'a witch\'s hat',
    'an apron',
    'a fantastic wig',
    'a lei',
    'a feather boa',
    'a trenchcoat',
    'a deerstalker hat',
    'ski pants',
    'a dunce cap',
    'a blindfold',
  ];
  const colors = [
    'red',
    'orange',
    'yellow',
    'lime green',
    'forest green',
    'turquoise',
    'sky blue',
    'navy blue',
    'violet',
    'deep blue',
    'purple',
    'magenta',
    'pink',
    'black',
    'white',
    'gray',
    'charcoal',
    'silver',
    'gold',
    'something metallic',
    'scarlet',
    'crimson',
    'saffron',
    'lemon yellow',
    'no color (really!)',
  ];

  let list = document.getElementById('prompt-list');
  let promptOne = document.createElement('li');
  let promptTwo = document.createElement('li');
  let promptThree = document.createElement('li');
  let colorList = document.getElementById('color-list');
  let color = document.createElement('li');
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const getRandomPrompts = () => {
    let randomOne = getRandomInt(mundane.length);
    let randomTwo = getRandomInt(fantastic.length);
    let randomThree = getRandomInt(garb.length);
  
    let first = mundane[randomOne];
    let second = fantastic[randomTwo];
    let third = `wearing ${garb[randomThree]}`;
    return [first, second, third];
  }

  const getRandomColor = () => {
    let random = getRandomInt(colors.length);
    return `Use ${colors[random]} in your art`;
  }
  
  const stuffInPromptContent = (promptArr) => {
    promptOne.innerHTML = `--> ${promptArr[0]}`;
    promptTwo.innerHTML = `--> ${promptArr[1]}`;
    promptThree.innerHTML = `--> ${promptArr[2]}`;
    list.appendChild(promptOne);
    list.appendChild(promptTwo);
    list.appendChild(promptThree);
  }
  const stuffInColorContent = () => {
    color.innerHTML = getRandomColor();
    colorList.appendChild(color);
  }
  const removeContent = (node) => {
    node.innerHTML = '';
  }

  document.getElementById('generate-button').addEventListener('click', (e) => {
    e.preventDefault();
    removeContent(list);
    stuffInPromptContent(getRandomPrompts());
  })

  document.getElementById('color-button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('hi')
    removeContent(colorList);
    stuffInColorContent();
  })
}());