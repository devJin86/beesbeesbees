var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {
  var food = this.food;
  console.log('eatting ' + this.food);
  this.food = null;
  return food;
}