class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '#square', e => {
      const $square = $(e.target); //target vs currentTarget
      // console.log("hi");
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const strPos = $square.attr('pos');
    const posArr = JSON.parse(strPos);

    try {
      this.game.playMove(posArr);
    } catch(e) {
      alert(e.msg);
    }

    const playerMark = this.game.board.grid[posArr[0]][posArr[1]];
    $square.css('background-color', 'white');
    $square.text(playerMark);

    if (this.game.isOver() === true) {
      this.$el.append($(`<p>Congrats, ${this.game.winner()}! You won the game!</p>`));
    }
  }

  setupBoard() {
    //make grid
    //build grid using <ul>
    //cells inside grid using <li>

    const $board = $('<ul>');
    for (let i = 0; i < 9; i++) {
      let $square = $('<li>');
      $square.attr('id', 'square');

      let row = 0;
      if (i < 3) {
        row = 0;
      } else if (i >= 3 && i < 6) {
        row = 1;
      } else {
        row = 2;
      }
      let col = i % 3;
      $square.attr('pos', `[${row},${col}]`);

      $board.append($square);
    }


    this.$el.append($board);
  }
}

module.exports = View;
