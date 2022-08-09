(function(window){
    // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
    // See Lecture 52, part 2


    // STEP 3: Create an object, called 'SayHello' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1
    var SayHello = {};

    // DO NOT attach the defaultWord variable to the 'SayHello' object.
    var defaultWord = "Hello";

    // STEP 4: Rewrite the 'speak' function such that it is attached to the
    // SayHello object instead of being a standalone function.
    // See Lecture 52, part 2
    SayHello.speak = function (name) {
      console.log(defaultWord + " " + name);
    }

    window.SayHello = SayHello;

    // STEP 5: Expose the 'SayHello' object to the global scope. Name it
    // 'SayHello' on the global scope as well.
    // See Lecture 52, part 2
    // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
    // xxxx.xxxx = SayHello;

  }
)(window);