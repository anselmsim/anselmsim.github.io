var text = document.getElementById("bestsellerstypewriter");

var typewriter = new Typewriter(text, {
    loop: true
});

typewriter.typeString('Best Sellers')
    .pauseFor(2250)
    .start();

