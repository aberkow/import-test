function MyFunction() {
  this.string = ''
}

MyFunction.prototype.setString = function (string) { 
  this.string = string
}

MyFunction.prototype.getString = function() {
  return this.string
}

MyFunction.prototype.init = function() {
  return this.getString()
}


export default MyFunction

// export default class MyClass {
//   constructor({
//     string = 'hello world'
//   } = {}) {
//     this.string = string
//   }
//   greet() {
//     return this.string
//   }
//   init() {
//     return this.greet()
//   }
// }
