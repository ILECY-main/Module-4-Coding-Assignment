(function(window) {
  // NOTE! The steps in this file are basically identical to the ones you
  // performed in the SpeakHello.js file.

  // STEP 6: Wrap the entire contents of SayGoodBye.js inside of an IIFE
  // See Lecture 52, part 2


  // STEP 7: Create an object, called 'sayBye' to which you will attach
  // the "speak" method and which you will expose to the global context
  // See Lecture 52, part 1
  var sayBye ={};

  // DO NOT attach the defaultWord variable to the 'sayBye' object.
  var defaultWord = "Good Bye";

  // STEP 8: Rewrite the 'speak' function such that it is attached to the
  // sayBye object instead of being a standalone function.
  // See Lecture 52, part 2
  sayBye.speak = function(name) {
    console.log(defaultWord + " " + name);
  }

  window.sayBye = sayBye;

  // STEP 9: Expose the 'sayBye' object to the global scope. Name it
  // 'sayBye' on the global scope as well.
  // xxxx.xxxx = sayBye;

})(window);