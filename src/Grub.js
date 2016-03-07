var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {
  var food = this.food;
  console.log(this.food);
};

var grub = new Grub();
console.log(grub.food); // jelly