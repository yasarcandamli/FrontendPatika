const sounds = {
    'A': './assets/boom.wav',
    'S': './assets/clap.wav',
    'D': './assets/hihat.wav',
    'F': './assets/kick.wav',
    'G': './assets/openhat.wav',
    'H': './assets/ride.wav',
    'J': './assets/snare.wav',
    'K': './assets/tink.wav',
    'L': './assets/tom.wav',
}

const image = document.getElementById('drum-image');
const title = document.getElementById('title');

// Voice playback functions
function playSound(key) {
    if (sounds[key]) {
        const audio = new Audio(sounds[key]);
        audio.play();

        // Butona animasyon sınıfı ekle
        const buttons = document.querySelectorAll('.voice-signs button');
        buttons.forEach(button => {
            if (button.textContent === key) {
                button.classList.add('playing');
                image.classList.add('playing');
                title.classList.add('playing');

                setTimeout(() => {
                    button.classList.remove('playing');
                    image.classList.remove('playing');
                    title.classList.remove('playing');
                }, 100);
            }
        });
    }
}

// Add sound to each button
document.querySelectorAll('.voice-signs button').forEach(button => {
    button.addEventListener('click', () => {
        playSound(button.textContent);
    });
});

// Listen to keyboard key presses
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    playSound(key);
});


