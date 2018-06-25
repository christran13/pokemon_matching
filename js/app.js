const pokemonArray = [{
    'name': 'bulbasaur',
    'img': 'img/bulbasaur.png',
  },
  {
    'name': 'charmander',
    'img': 'img/charmander.png',
  },
  {
    'name': 'cubone',
    'img': 'img/cubone.png',
  },
  {
    'name': 'hitmonchan',
    'img': 'img/hitmonchan.png',
  },
  {
    'name': 'hitmonlee',
    'img': 'img/hitmonlee.png',
  },
  {
    'name': 'jigglypuff',
    'img': 'img/jigglypuff.png',
  },
  {
    'name': 'magikarp',
    'img': 'img/magikarp.png',
  },
  {
    'name': 'pikachu',
    'img': 'img/pikachu.png',
  },
  {
    'name': 'psyduck',
    'img': 'img/psyduck.png',
  },
  {
    'name': 'slowpoke',
    'img': 'img/slowpoke.png',
  },
  {
    'name': 'snorlax',
    'img': 'img/snorlax.png',
  },
  {
    'name': 'squirtle',
    'img': 'img/squirtle.png',
  },
];

const gameGrid = pokemonArray
.concat(pokemonArray)
.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('pokemon');


const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

game.appendChild(grid);


gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {
  const clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) { return; }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }
    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }  
    previousTarget = clicked;
  }
 });




