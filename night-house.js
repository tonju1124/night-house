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