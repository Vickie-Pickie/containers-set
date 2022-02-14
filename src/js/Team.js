export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error('Такой персонаж уже существует в команде');
    }
    this.members.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => {
      this.members.add(hero);
    });
  }

  toArray() {
    return [...this.members];
  }
}
