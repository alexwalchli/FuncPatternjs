var funcPattern = require('./funcPattern');

var funcPattern = new funcPattern("101010", function(){
  console.log('Pattern detected!')
})

var foo = function(){
  this.fireOne = funcPattern.trackFunction(function(){}, 1);
  this.fireZero = funcPattern.trackFunction(function(){}, 0);
}

var newFoo = new foo();

// matches the pattern exactly, will fire callback
newFoo.fireOne();
newFoo.fireZero();
newFoo.fireOne();
newFoo.fireZero();
newFoo.fireOne();
newFoo.fireZero();

// similar to the pattern, but not quite, however it will fire callback
newFoo.fireOne();
newFoo.fireOne();
newFoo.fireOne();
newFoo.fireZero();
newFoo.fireOne();
newFoo.fireZero();

// not event close to the pattern, will not fire callback
newFoo.fireOne();
newFoo.fireOne();
newFoo.fireOne();
newFoo.fireOne();
newFoo.fireOne();
newFoo.fireOne();
