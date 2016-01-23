# FuncPatternjs
Invokes a function when it recognizes a pattern of other functions invoking using a Neural Network.

##Use cases
- Fire a function when your code is exhibiting a certain behavior. The pattern of functions invoked only needs to be similiar to the network is trained on.
- Tie into an app and train it to detect when a user may going outside the 'happy path'. Use the callback to display some UI to guide them in the right direction.


##Examples
```
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
```
