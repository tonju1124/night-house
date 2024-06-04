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

// function generateMeteor() {
//     var sky = document.querySelector('.sky');
//     var existingMeteor = document.querySelector('.meteor');

//     if (!existingMeteor) {
//         var meteor = document.createElement('div');
//         meteor.className = 'meteor';
//         meteor.style.top = Math.random() * sky.offsetHeight + 'px';
//         meteor.style.left = Math.random() * sky.offsetWidth + 'px';
//         sky.appendChild(meteor);

//         setTimeout(function () {
//             sky.removeChild(meteor);
//         }, 2000);
//     }


//     var delay = Math.random() * 1 + 1;
//     setTimeout(generateMeteor, delay * 1000);
// }