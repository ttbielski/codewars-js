// Link: https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

class Ghost {
  constructor() {
    this.color = this.getRandomColor();
  }
  getRandomColor() {
    const colors = ['white', 'yellow', 'purple', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
