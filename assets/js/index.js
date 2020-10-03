const instance = new Typewriter('#typewriter', {
    loop: true
});

instance
    .typeString('Brought to your doorstep.')
    .pauseFor(700)
    .deleteChars(25)
    .typeString('Start Speaking.')
    .pauseFor(700)
    .deleteChars(24)
    .typeString('Take action.')
    .pauseFor(700)
    .deleteAll()
    .start();