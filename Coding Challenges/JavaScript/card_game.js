const pokeDex = [
  {
    name: "Bulbasaur",
    damage: 60,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    name: "Caterpie",
    damage: 40,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
  },
  {
    name: "Charmander",
    damage: 60,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    name: "Clefairy",
    damage: 50,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
  },
  {
    name: "Jigglypuff",
    damage: 60,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
  },
  {
    name: "Mankey",
    damage: 30,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
  },
  {
    name: "Meowth",
    damage: 60,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
  },
  {
    name: "Nidoran - female",
    damage: 60,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
  },
  {
    name: "Nidoran - male",
    damage: 50,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
  },
  {
    name: "Oddish",
    damage: 40,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
  },
  {
    name: "Pidgey",
    damage: 50,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
  },
  {
    name: "Pikachu",
    damage: 50,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    name: "Poliwag",
    damage: 50,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
  },
  {
    name: "Psyduck",
    damage: 60,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
  },
  {
    name: "Rattata",
    damage: 30,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
  },
  {
    name: "Squirtle",
    damage: 60,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    name: "Vulpix",
    damage: 50,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
  },
  {
    name: "Weedle",
    damage: 40,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
  },
];

class Card {
  constructor(name, damage, img) {
    this.name = name;
    this.damage = damage;
    this.img = img;
  }
}

class Player {
  constructor(name) {
    this.name = name; // name of player
    this.deck = []; // cards in deck
    this.hands = []; // cards in hands
    this.discardPile = []; // discarded Cards
    this.choice = []; // player's current card choice to use in battle
    this.choicenum = 0; // index number of the player's current card choice
  }

  generateDeck() {
    pokeDex.forEach((pokemon) => {
      //pokemon = taco
      const card = new Card(pokemon.name, pokemon.damage, pokemon.img);
      this.deck.push(card);
    });
    this.deck.sort(() => Math.random() - 0.5); // shuffle deck after it is generated
  }

  checkHands() {
    return this.hands.length < 3;
  }

  checkDeck() {
    return this.deck.length > 0;
  }

  drawCard() {
    // draw card when hand is below 3
    while (this.checkHands()) {
      this.hands.push(this.deck[0]);
      this.deck.splice(0, 1);
      // console.log(`${this.deck[0].name} with damage of ${this.deck[0].damage} has been added to ${this.name} hands!`)
    }
  }

  showHands() {
    // display the cards you have in hands
    console.log(`you have these cards in your hands: ${this.hands}`);
  }

  chooseCard() {
    // card pick by player
    let cardsinHands = this.hands;
    console.log(`-----pick a card from the list shown below-----`);
    console.log(`Enter card number ONLY`);
    if (cardsinHands.length > 0) {
      for (let i in cardsinHands) {
        console.log(
          `card #${i}: ${cardsinHands[i].name} [${cardsinHands[i].damage}]`
        );
      }
    }
    let num = prompt(
      `-----pick a card from the list shown in the console log----- \n Which card would you like to play this round? Enter card# \n or click cancel to leave game.`
    );
    let userInput = cardsinHands[num];
    this.choice.push(cardsinHands[num]);
    console.log(
      `Eggbert chooses ${userInput.name} that deals ${userInput.damage} damage!`
    );
  }

  aiPicks() {
    // Card pick by CPU
    const aiRandom = this.hands.sort(() => Math.random() - 0.5);
    this.choice = this.hands[0];
    console.log(
      `AI picked ${this.choice.name} that deals ${this.choice.damage} damage`
    );
  }

  discardCard() {
    let num = this.choicenum;
    this.discardPile.push(this.choice); // add played card to discard pile
    this.hands.splice(num, 1); // discard played card
    this.choice = []; // reset player's Choice to empty
    this.choicenum = 0; // reset player's Choice Number to 0
    //this.drawCard();                     // draw card when card in hand is less than 3
  }

  showDiscardPile() {
    console.log(`Below are the cards that ${this.name} has played so far:`);
    for (let i in this.discardPile) {
      console.log(
        `Name: ${this.discardPile[i][0].name}. Damage: ${this.discardPile[i][0].damage}.`
      );
    }
  }
}

const player1 = new Player("Eggbert");
player1.generateDeck();
const player2 = new Player("CPU");
player2.generateDeck();

class Game {
  constructor(player1, player2) {
    this.gameCount = 0; // to determine how many games have played in a round. reset once it reaaches 3
    this.round = 1; // round counter
    this.player1 = player1; // player 1 register
    this.player1Score = 0; // games won by Player 1 in a round
    this.player1roundwon = 0; // round won by Player 1
    this.player2 = player2; // player 2 register
    this.player2Score = 0; // games won by Player 2 in a round
    this.player2roundwon = 0; // round won by Player 2
  }

  gameStart() {
    console.log(`Welcome ${player1.name} and ${player2.name}!!`);
    //const player1 = new Player('Eggbert');
    //player1.generateDeck();
    player1.drawCard();
    //const player2 = new Player('CPU');
    //player2.generateDeck();
    player2.drawCard();
    while (player1.hands.length > 0 && player1.deck.length != 0) {
      player1.chooseCard();
      player2.aiPicks();
      if (player1.choice[0].damage > player2.choice.damage) {
        console.log(`${player1.name} won!`);
        this.player1Score += 1;
        this.gameCounter();
      } else if (player1.choice[0].damage < player2.choice.damage) {
        console.log(`${player2.name} won!`);
        this.player2Score += 1;
        this.gameCounter();
      } else {
        console.log(`It was a tie! Score remains unchanged!`);
        this.gameCounter();
      }
    }
    if (this.zeroCheck()) {
      if (this.player1roundwon > this.player2roundwon) {
        console.log(
          `${player1.name} has won ${this.player1roundwon} rounds out of ${
            this.round - 1
          } round!`
        );
        this.gameOver();
      } else if (this.player1roundwon == this.player2roundwon) {
        console.log(`It's a tie!`);
        this.gameOver();
      } else {
        console.log(
          `${player2.name} has won ${this.player2roundwon} rounds out of ${
            this.round - 1
          } round!`
        );
        this.gameOver();
      }
    }
    console.log(
      `Game Over! Thank you for playing! \n Please refresh the browser if you would like to play again :)`
    );
  }

  gameCounter() {
    console.log(
      `Score: Eggbert: ${this.player1Score}, CPU: ${this.player2Score}. \n Rounds Won: Eggbert: ${this.player1roundwon}, CPU: ${this.player2roundwon}.`
    );
    this.gameCount += 1;
    player1.discardCard();
    player2.discardCard();
    this.roundCheck();
  }

  roundCheck() {
    if (this.gameCount === 3) {
      if (this.player1Score > this.player2Score) {
        player1.drawCard();
        player2.drawCard();
        this.player1roundwon += 1;
        console.log(
          `Round ${this.round} over! Eggbert won! \n Score: Eggbert: ${this.player1Score}, CPU: ${this.player2Score}. \n Rounds Won: Eggbert: ${this.player1roundwon}, CPU: ${this.player2roundwon}.`
        );
        this.round += 1;
        this.player1Score = 0;
        this.player2Score = 0;
        this.gameCount = 0;
      } else if (this.player1Score == this.player2Score) {
        player1.drawCard();
        player2.drawCard();
        console.log(`Round ${this.round} Ended. No one has won this round.`);
        this.player1Score = 0;
        this.player2Score = 0;
        this.gameCount = 0;
      } else {
        player1.drawCard();
        player2.drawCard();
        this.player2roundwon += 1;
        console.log(
          `Round ${this.round} over! CPU won! \n Score: Eggbert: ${this.player1Score}, CPU: ${this.player2Score}. \n Rounds Won: Eggbert: ${this.player1roundwon}, CPU: ${this.player2roundwon}.`
        );
        this.round += 1;
        this.player1Score = 0;
        this.player2Score = 0;
        this.gameCount = 0;
      }
    }
  }

  gameOver() {
    player1.hands = [];
    player2.hands = [];
    player1.deck = [];
    player2.deck = [];
    this.player1roundwon = 0;
    this.player2roundwon = 0;
  }

  zeroCheck() {
    return this.player1roundwon > 0 && this.player2roundwon > 0;
  }
}

// $("button").on("click", function(){
//   console.log(`===Game Start===`);
//   let game = new Game('player1', 'player2');
//   game.gameStart();
// });

const startButton = document.querySelector("button");
startButton.addEventListener("click", function () {
  console.log(`===Game Start===`);
  let game = new Game("player1", "player2");
  game.gameStart();
});
