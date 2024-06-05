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

