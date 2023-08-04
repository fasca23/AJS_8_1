export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    // Проверяем есть ли игрок в команде
    if (this.members.has(player)) {
      throw new Error('Данный игрок уже в команде');
    } else {
      this.members.add(player);
    }
  }

  addAll(...players) {
    players.forEach((player) => {
      this.members.add(player);
    });
  }

  // Конвертируем в массив
  toArray() {
    this.members = Array.from(this.members);
  }
}
