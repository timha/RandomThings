const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName) {
    const coursePool = this._courses[courseName]
    const index = Math.floor(Math.random() * coursePool.length)
    return coursePool[index]
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price
    return `Your meal\n` +
    `Appetizer: ${appetizer.name}\n`+
    `Main: ${main.name}\n` +
    `Dessert: ${dessert.name}\n` +
    `Total Price: $${totalPrice}`
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers() {
    return this._courses.appetizers
  },
  set appetizers(app) {
    this._course.appetizers.push(app)
  },
  get mains() {
    return this._courses.mains
  },
  set mains(entree) {
    this._course.mains.push(entree)
  },
  get desserts() {
    return this._courses.desserts
  },
  set desserts(dessert) {
    this._course.desserts.push(dessert)
  }
}

menu.addDishToCourse('appetizers', 'salad', 3)
menu.addDishToCourse('appetizers', 'soup', 2.50)
menu.addDishToCourse('appetizers', 'bread', 2)
menu.addDishToCourse('mains', 'steak', 15)
menu.addDishToCourse('mains', 'pasta', 12)
menu.addDishToCourse('mains', 'lobster', 22)
menu.addDishToCourse('desserts', 'cake', 7)
menu.addDishToCourse('desserts', 'pie', 6)
menu.addDishToCourse('desserts', 'ice cream', 5)

const meal = menu.generateRandomMeal()
console.log(meal)
