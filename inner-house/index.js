function generateStars(numStars) {
    var sky = document.querySelector('.window');
    var skyRect = sky.getBoundingClientRect();
    var borderWidth = 8; 

    for (var i = 0; i < numStars; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        star.style.top = (Math.random() * (skyRect.height - 2 * borderWidth)) + borderWidth + 'px';
        star.style.left = (Math.random() * (skyRect.width - 2 * borderWidth)) + borderWidth + 'px';
        star.style.animationDuration = 5 + Math.random() * 10 + 's';
        sky.appendChild(star);
    }
}

generateStars(100);

var cloudSVGs = ["svg/cloud1.svg", "svg/cloud2.svg", "svg/cloud3.svg", "svg/cloud4.svg", "svg/cloud5.svg", "svg/cloud6.svg", "svg/cloud7.svg", "svg/cloud8.svg"];
var cardHeight = document.querySelector('.window').offsetHeight;

function addCloud() {
    var windowHeight = document.querySelector('.window').offsetHeight;
    if (!cloudSVGs || cloudSVGs.length === 0) {
        console.error('cloudSVGs is not defined or empty');
        return;
    }

    var randomIndex = Math.floor(Math.random() * cloudSVGs.length);
    var cloudSVG = cloudSVGs[randomIndex]; // random cloud svg

    var cloud = document.createElement("img");
    cloud.src = cloudSVG;
    cloud.className = "cloud";

    var randomTop = Math.random() * windowHeight;
    cloud.style.top = randomTop + "px";

    document.querySelector('.window').appendChild(cloud);
    setTimeout(function () {
        if (document.querySelector('.window').contains(cloud)) {
            document.querySelector('.window').removeChild(cloud);
        }
    }, 7000);
}

setInterval(function () {
    var randomDelay = Math.random() * 4000;
    setTimeout(addCloud, randomDelay);
}, 6000);