window.onload = function() {
    let mediaQuery5 = window.matchMedia("(max-width: 1400px)");
    let mediaQuery4 = window.matchMedia("(max-width: 1200px)");
    let mediaQuery3 = window.matchMedia("(max-width: 993px)");
    let mediaQuery2 = window.matchMedia("(max-width: 800px)");
    let mediaQuery1 = window.matchMedia("(max-width: 600px)");
    let text = "symfony, next.js and react."
    if (mediaQuery1.matches) {
        text = "symfony, next.js and react."
        circularText(text, 50, 0);
    } else if (mediaQuery2.matches)  {
        circularText(text, 85, 0);
    } else if (mediaQuery3.matches)  {
        circularText(text, 100, 0);
    } else if (mediaQuery4.matches)  {
        circularText(text, 130, 0);
    } else if (mediaQuery5.matches)  {
        circularText(text, 160, 0);
    } else {
        circularText(text, 200, 0);
    }

    function determineLetterPadding(letter, lastLetter) {
        if (letter === 'f' && lastLetter === 'm') {
            if (mediaQuery1.matches) {
                return 3;
            }
            if (mediaQuery4.matches) {
                return 10;
            }
            return 14;
        }
        if (letter === 'r' && lastLetter === ' ') {
            if (mediaQuery1.matches) {
                return 3;
            }
            return 5;
        }
        if (letter === 'l' && lastLetter === 'p') {
            if (mediaQuery1.matches) {
                return 3;
            }
            if (mediaQuery4.matches) {
                return 8;
            }
            return 10;
        }
        if (letter === 'l') {
            if (mediaQuery1.matches) {
                return 3;
            }
            return 5;
        }
        return 0;
    }

    function circularText(txt, radius, classIndex) {
        txt = txt.split("")
        classIndex = document.getElementsByClassName("text-circle")[classIndex];

        let deg = 360 / txt.length,
            origin = 0;

        let lastLetter = '';

        txt.forEach((letter) => {
            const letterP = `<p style='height:${radius}px;padding-left:${determineLetterPadding(letter, lastLetter)}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${letter}</p>`;
            classIndex.innerHTML += letterP;
            origin += deg;
            lastLetter = letter;
        });
    }
    const textCircleWrapper = document.getElementsByClassName("text-circle-wrapper")[0];

    window.addEventListener("scroll", function() {
        textCircleWrapper.style.transform = "rotate("+-window.pageYOffset / 6+"deg)";
    });

    if (!mediaQuery2.matches) {
        const wrapperPosition = document.getElementById("text-circle-wrapper-position");
        function getPositionXY(element) {
            var rect = element.getBoundingClientRect();
            return {x: rect.x, y: rect.y}
        }

        // window.addEventListener('mousemove', e => {
        //     const ax = -(getPositionXY(wrapperPosition).x- e.pageX) / 40;
        //     const ay = (getPositionXY(wrapperPosition).y - e.pageY + scrollY)/ 40;
        //     wrapperPosition.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg) rotateX("+ay+"deg) rotateX("+ay+"deg)";
        // });
    }
};

