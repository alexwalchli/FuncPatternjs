'use strict';

var math = require("./deps/math");
var simpleHopFieldNetwork = require("./deps/simpleHopFieldNetwork");

function funcPattern(patternToDetect, callback){
    var self = this;
    self.patternToDetect = patternToDetect;
    self.currentPattern = "";
    self.hopFieldNetwork = new simpleHopFieldNetwork(patternToDetect.length);
    self.callback = callback;
    self.hopFieldNetwork.train(patternToDetect);

    self.trackFunction = function(fn, funcInputToPattern){
      return function () {
        var result = fn.apply(this, arguments);
        self.updateCurrentPattern(funcInputToPattern);

        return result;
      };
    }

    self.updateCurrentPattern = function(input){
      self.currentPattern += input;
      if(self.currentPattern.length == patternToDetect.length){
        var detectedPattern = self.hopFieldNetwork.detectPattern(self.currentPattern);
        if(detectedPattern.toString().replace(/,/g, '') == self.patternToDetect){
          self.currentPattern = "";
          self.callback();
        }
      }
    }
}

module.exports = funcPattern;
