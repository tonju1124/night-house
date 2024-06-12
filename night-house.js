function generateStars(numStars) {
    var sky = document.querySelector('.sky');

    for (var i = 0; i < numStars; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animationDuration = 5 + Math.random() * 10 + 's';
        sky.appendChild(star);
    }
}

generateStars(300);

function addStarsToMoonSky(numStars) {
    var moonSky = document.querySelector('.moon_sky');

    for (var i = 0; i < numStars; i++) {
        var star = document.createElement('div');
        star.className = 'star';

        star.style.top = Math.random() * moonSky.offsetHeight + 'px';
        star.style.left = Math.random() * moonSky.offsetWidth + 'px';
        star.style.animationDuration = 5 + Math.random() * 10 + 's';
        moonSky.appendChild(star);
    }
}

addStarsToMoonSky(10);

document.getElementById('left_window').addEventListener('click', function () {
    var window = this;
    window.style.backgroundColor = '#FCFF7F';
    window.classList.add('fade-out');

    setTimeout(function () {
        window.style.backgroundColor = '';
        window.classList.remove('fade-out');
    }, 5000);
});

document.getElementById('right_window').addEventListener('click', function () {
    var window = this;
    window.style.backgroundColor = '#FCFF7F';
    window.classList.add('fade-out');

    setTimeout(function () {
        window.style.backgroundColor = '';
        window.classList.remove('fade-out');
    }, 5000);
});

var cloudSVGs = ["svg/cloud1.svg", "svg/cloud2.svg", "svg/cloud3.svg", "svg/cloud4.svg", "svg/cloud5.svg", "svg/cloud6.svg", "svg/cloud7.svg", "svg/cloud8.svg"];
var cardHeight = document.querySelector('.card').offsetHeight;

function addCloud() {
    var randomIndex = Math.floor(Math.random() * cloudSVGs.length);
    var cloudSVG = cloudSVGs[randomIndex]; // random cloud svg

    var cloud = document.createElement("img");
    cloud.src = cloudSVG;
    cloud.className = "cloud";

    var randomTop = Math.random() * (0.4 * cardHeight); // random top position from 0 to 40% of card height
    cloud.style.top = randomTop + "px";

    document.querySelector('.card').appendChild(cloud);
    setTimeout(function () {
        if (document.querySelector('.card').contains(cloud)) {
            document.querySelector('.card').removeChild(cloud);
        }
    }, 58000); //remove cloud after 58 seconds
}

setInterval(function () {
    var randomDelay = Math.random() * 4000; // random delay 0 to 4 seconds
    setTimeout(addCloud, randomDelay);
}, 6000);