class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.$rootEl = rootEl;
    this.setupTowers();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {

      const $tower = $('<ul>');

      for (let j = 0; j < 3; j++) {
        let $disc = $('<li>');
        $disc.attr('id', 'disc');

        $disc.attr('discPos', `${j}`);
        $tower.append($disc);
      }

      $tower.attr('id', 'tower');
      $tower.attr('towerPos', `${i}`)

      this.$rootEl.append($tower);
    }
  }

  render() {

  }
}

module.exports = HanoiView;