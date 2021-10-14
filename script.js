class Triangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return `The area of the triangle is ${this.height * this.width}. `
  }

  getHypotenuse() {
    return `The hypotenuse of the triangle is ${Math.sqrt(this.height ** 2 + this.width ** 2)}`
  }
}

class ColoredTriangle extends Triangle {
  constructor(height, width, color) {
    super(height, width);
    this.color = color;
  }

  statement() {
    return `My triangle is ${this.color}, ${this.getArea()}, ${super.getArea()}`
  }
}

// const x = new ColoredTriangle(3, 4, "blue")
// const y = x.statement();
// console.log(y)

class Ultimate extends ColoredTriangle {
  constructor(height, width, color, sides) {
    super(height, width, color);
    this.sides = sides;
  }

  saying() {
    return `This is the Ultimate triangle, ${this.getArea()} ${this.getHypotenuse()}, ${this.statement()}, it has ${this.sides} sides.`
  }
}

const u = new Ultimate(3,4,"green", 2);
