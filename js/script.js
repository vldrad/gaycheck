"use strict";

const screen = document.querySelector('#screen'),
      btn = document.querySelector('button'),
      waiting = new Audio('sounds/waiting.mp3');

function yesNo() {
    waiting.pause();
    waiting.currentTime = 0;

    let num = Math.floor(Math.random() * 1000);
                
    if (num % 2 == 0) {
        screen.innerHTML = 'Unfortunately, YOU ARE NOT GAY!';
        new Audio('sounds/NO.mp3').play();
        console.log('User is not gay.');
    } else {
        screen.innerHTML = 'Congratulations, YOU ARE GAY!';
        new Audio('sounds/YES.mp3').play();
        console.log('User is gay.');
    }
}

function startCheck() {
    let finished = false;

    if (!finished) {
        btn.addEventListener('click', (e) => {
            waiting.play();
            e.target.style.display = 'none';
    
            screen.innerHTML = 'Please, wait...'
    
            setTimeout(() => {
                screen.innerHTML = 'Asking your friends...';
            }, 5000);
    
            setTimeout(() => {
                screen.innerHTML = 'Checking your search history...';
            }, 11000);
    
            setTimeout(() => {
                screen.innerHTML = 'Talking with your ex...';
            }, 14000);
    
            setTimeout(() => {
                screen.innerHTML = 'So annoying bitch -__- ...';
            }, 21000);
    
            setTimeout(() => {
                screen.innerHTML = 'Scanning your playlist...';
            }, 24000);
            
            setTimeout(() => {
                screen.innerHTML = 'Almost done...';
            }, 28000);
    
            setTimeout(() => {
                yesNo();
                finished = true;
                
                btn.innerHTML = 'AGAIN?'
                btn.style.display = 'flex';
            }, 32000);
        });
    } else {
        location.reload();
    }
}

startCheck();

console.log();