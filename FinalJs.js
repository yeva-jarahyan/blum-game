let aboutBtn = document.getElementById('aboutBtn');
let container = document.getElementById('container');
let gameOverText = document.getElementById('gameOverText');
let startBtn = document.getElementById('startBtn');
let startAgainBtn = document.getElementById('startAgainBtn');
let aboutInfo = document.querySelector('.aboutGame');
let cancleBtn = document.getElementById('cancleBtn');
let gameBtns = document.getElementById('gameInfo');
let heart = document.getElementById('heart')
let heartPoints = document.getElementById('point_heart');
let oneHeart = document.querySelectorAll('#heart>span')
cancleBtn.addEventListener('click', () => {
    aboutInfo.style.display = 'none';
    gameBtns.style.display = 'flex'
})
aboutBtn.addEventListener('click', () => {
    gameBtns.style.display = 'none'
    aboutInfo.style.display = 'flex'
})

function Start() {
    let heartPoint = 2; // Начальное количество жизней
    const maxHearts = 2; // Максимальное количество жизней
    let pointsCount = 0;
    gameBtns.style.display = 'none';

    let points = document.getElementById('points');
    point_heart.style.display = 'flex';
    points.style.fontSize = '16px';
    points.innerHTML = pointsCount;

    function createeBall() {
        let createdBall = document.createElement('div');
        createdBall.classList.add('createdBall');
        createdBall.style.transition = '0.1s';
        createdBall.style.animation = 'fallDown 3s linear infinite';
        createdBall.style.left = `${Math.random() * 90}%`;
        container.append(createdBall);
        createdBall.addEventListener('animationiteration', () => {
            createdBall.remove();
        });
        createdBall.addEventListener('click', () => {
            pointsCount++;
            points.innerHTML = pointsCount;
            createdBall.remove();

            let plusHeartBtn = document.getElementById('plusHeartBtn');
            plusHeartBtn.onclick = () => {
                if (pointsCount >= 25) {
                    if (heartPoint < maxHearts) {
                        container.style.animation = 'showGreen 0.7s linear forwards';
                        setTimeout(() => {
                            container.style.animation = '';
                        }, 500)
                        pointsCount -= 25;
                        points.innerHTML = pointsCount;
                        heartPoint++;
                        const newHeart = document.createElement('span');
                        newHeart.innerHTML = `<i class="fa-solid fa-heart"></i>`;
                        heart.append(newHeart);
                    } else {
                        alert('full healt!!!');
                    }
                } else {
                    alert('not enough balance(have less than 25)');
                }
            };
        });
    }
    setInterval(createeBall, 300);

    function createBomb() {
        let bombDiv = document.createElement('div');
        bombDiv.classList.add('bomb');
        bombDiv.innerHTML = '<i class="fa-solid fa-bomb"></i>';
        bombDiv.classList.add('createdBomb');
        bombDiv.style.left = `${Math.random() * 90}%`;
        container.append(bombDiv);

        bombDiv.style.animation = 'bombFall 5s linear infinite';
        bombDiv.addEventListener('animationiteration', () => {
            bombDiv.remove();
        });
        bombDiv.addEventListener('click', () => {
            container.style.animation = 'backgroundShake 0.5s linear forwards';
            setTimeout(() => {
                container.style.animation = '';
            }, 500);
            bombDiv.remove();
            if (heartPoint >= 0) {
                oneHeart[heartPoint].style.display = 'none';
                heartPoint--;
                if (heartPoint < 0) {
                    setTimeout(() => {
                        container.style.display = 'none';
                        gameOverText.style.display = 'flex';
                        gameOverText.style.animation = 'show 2s linear forwards';
                        let pointsCountHtml = document.getElementById('pointsCountHtml');
                        pointsCountHtml.style.color = 'bisque';
                        pointsCountHtml.textContent = `Points: ${pointsCount}`;
                    }, 700);
                    return;
                }
            }
        });
    }
    setInterval(createBomb, 3000);
}

startAgainBtn.addEventListener('click', () => {
    gameBtns.style.display = 'flex';
    gameOverText.style.display = 'none';
    location.reload();
});


startAgainBtn.addEventListener('click', () => {
    gameBtns.style.display = 'flex'
    gameOverText.style.display = 'none'
    location.reload()
})