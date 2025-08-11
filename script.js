$(document).ready(function() {
  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var heartInterval;

  envelope.click(function() {
    openEnvelope();
  });
  btn_open.click(function() {
    openEnvelope();
  });
  btn_reset.click(function() {
    closeEnvelope();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
    createConfetti();

    heartInterval = setInterval(createHeart, 1500);
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
    clearInterval(heartInterval);
    document.querySelector('.hearts').innerHTML = '';
  }

  function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#cdb4db', '#b497bd', '#9a72ac', '#7b5e7a', '#a593e0'];
    // const colors = ['#ffe6f0', '#ffd6e0', '#ffc0cb', '#ffb6c1', '#ff9bb9']; - soft pink
    const count = 150;
    for (let i = 0; i < count; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = (Math.random() * -150 - 50) + 'px';
      confetti.style.animationDuration = (Math.random() * 1 + 1) + 's';
      confetti.style.animationDelay = (Math.random() * 0.5) + 's';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(confetti);
      confetti.addEventListener('animationend', () => {
        confetti.remove();
      });
    }
  }

  function createHeart() {
    const heartsContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = (Math.random() * 80 + 10) + '%';

    const classes = ['a1', 'a2', 'a3'];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    heart.classList.add(randomClass);

    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
});
