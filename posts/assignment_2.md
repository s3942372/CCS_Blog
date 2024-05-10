---
title: Assignment 2
published_at: 2024-04-30
snippet: Assignment 2 submission
disable_html_sanitization: true
---


### Disclaimer: some of the failed codes could not be shown in this blog as my laptop had forcefully restarted several times in making period of this assignment leading to me losing all the notes and records I had made of them. I still do have some of the screenshots I've taken though.

For assignment 2, we were tasked with creating "a piece of net art which employs techniques from fractal, glitch, and post-digital practices to respond to one or more of the artists" listed on Canvas and will be judged on how much of a zany, chaotic aesthetic it had.

Zany is, by Sianne Ngai's definition, "a performative aesthetic". It often goes for the opposite of what is expected; the serious becomes silly and the silly becomes serious. Think of comedic characters on TV shows. Often it is the forcefully funny characters that audiences find sad and the 'straight-man' character that is found to be unexpectedly hilarious. This is the zany: it is an unstable, uncertain mess that often finds itself with an opposing result to what was intended.

Chaotic on the other hand is well, chaotic. It is confusing and unstable and a mess, often a visual overload, and leaves viewers unable to make heads or tales over what is happening, and sometimes why.

For my project, I had decided I wanted to incorporate elements of glitch and post-digital practices into my work. I chose to make my net art a response to Yehwan Song and their work ["Sound Interactive Poster"](https://www.yhsong.com/detail.html#aAa_Sound_Interactive_Poster) as this was about the only work I found that operated based on sounds and not visuals picked up by a device. I decided I wanted my net art to work in a way that when sound is picked up by the device's microphone there are visual effects and changes (glitches, in the case of this assignment) that occur on screen.

# Creation Process
I started off with the idea of an image on screen that gets shuffled (similar to a Rubik's Cube or the 2048 game) each time the device microphone picks up on sound. To do this I had first set up an image to appear in the middle of the webpage. I then broke up the image into separate grids through:
```javascript
const rows = 9;
const cols = 16;
const size = rows * cols;
let imageParts = [];
let imageWidth = 1024;
let imageHeight = 576;

window.onload = function() {
    initImageParts();
    renderGrid();
};

function initImageParts() {
    const partWidth = imageWidth / cols;
    const partHeight = imageHeight / rows;

    for (let i = 0; i < size; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const xPos = -(col * partWidth);
        const yPos = -(row * partHeight);
        imageParts.push({ x: xPos, y: yPos });
    }
}

function renderGrid() {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${imageWidth / cols}px`;
        cell.style.height = `${imageHeight / rows}px`;
        cell.style.backgroundImage = `url('/image/beach.jpg')`;
        cell.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
        cell.style.backgroundPosition = `${imageParts[i].x}px ${imageParts[i].y}px`;
        gridContainer.appendChild(cell);
    }
}
```
![Beach](/assignment_2/a2p1.png)
By doing so I will be able to have evenly divided squares that I can have scrambled around in the frames of the image. I then created  a function for which the grids will be scrambled. As I wasn't sure on how to do it with sound yet, I decided to use a button to replace the microphone function first as what will be activating the visual effects. 
```javascript
function shuffle() {

    const randomIndex = Math.floor(Math.random() * sentences.length);
    const newSentence = sentences[randomIndex];
    
    const shuffleButton = document.getElementById('shuffleButton');
    shuffleButton.textContent = newSentence;

    for (let i = imageParts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageParts[i], imageParts[j]] = [imageParts[j], imageParts[i]];
    }
    renderGrid();
}
```
This, combined with the earlier code for separating my image into grids, made it so that each time I click on my 'shuffleButton', the image grids are scrambled once.
![Scrambled Beach](/assignment_2/a2p2.png)

I then thought of how I could enhance the project, as it wasn't chaotic enough to satisfy me, and decided on adding a glitch effect to the net art. I had wanted to make it so that the grids would glitch all over the screen after triggered, however each successive try left resulting piece wanting. For my first try, I had added the code that created a glitch effect from the week 5 homework into the RenderGrid function. This lead to the grids glitching as intended, but not as individual grids glitching separately. Instead the entire image has been combined into one and glitches all over the screen, with some black squares in accompaniment.
![Black Glitch](/assignment_2/a2p3.png)

Seeing how this did not work as I wanted, I decided to try again, this time by creating a function where the shuffle of the image grids is activated alongside the glitch. This yielded better results, as the image shuffled as was intended, however the only glitch effect that occured was that the grids had higher contrast, and had no other seeable glitch effects.
![So Bright](/assignment_2/a2p4.png)

Having found no way to figure out how to add glitches to the grid, I decided to just add the glitch function on in a way that will generate another one of the original image underneath the shuffling one that has the sole function of glitching. This was done by adding parts of the glitch code from week 5 to the code of this assignment, and then adding different functions that will allow for the creation of a separate canvas for the glitching image, the glitch effects, then finally linking the glitch effect to the shuffle function so that when the button making the grids shuffle is pressed, the canvas appears and glitches at the same time.
```javascript
function shuffle() {
    ...
    glitchEffectOn();
}

function initializeGlitchEffect() {
    const cnv = document.createElement('canvas');
    cnv.id = 'glitch_canvas';
    cnv.width = imageWidth;
    cnv.height = imageHeight;
    cnv.style.display = 'none';
    document.body.appendChild(cnv);
}

function glitchEffectOn() {
    const cnv = document.getElementById('glitch_canvas');
    const ctx = cnv.getContext('2d');
    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
        const img_data = cnv.toDataURL("image/jpeg");
        const glitched_img = new Image();
        glitched_img.src = glitchify(img_data, 96, 6);
        glitched_img.onload = function() {
            ctx.clearRect(0, 0, imageWidth, imageHeight);
            ctx.drawImage(glitched_img, 0, 0, imageWidth, imageHeight);
            cnv.style.display = 'block';
        };
    };
    img.src = '/image/beach.jpg';
}

function glitchify(data, chunk_max, repeats) {
    const rand_int = max => Math.floor(Math.random() * max);
    const chunk_size = rand_int(chunk_max / 4) * 4;
    const i = rand_int(data.length - 24 - chunk_size) + 24;
    const front = data.slice(0, i);
    const back = data.slice(i + chunk_size, data.length);
    const result = front + back;
    return repeats === 0 ? result : glitchify(result, chunk_max, repeats - 1);
}
```
From here on everytime I press the shuffle button, a glitch occurs alongside the shuffle of the image grids.
![Shuffle and Glitch](/assignment_2/a2p5.png)

Now having accomplished this, I've decided to try and implement the microphone function.
```javascript
function initializeSoundDetection() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error('getUserMedia is not supported');
        return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);
            microphone.connect(analyser);

            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            const checkSound = () => {
                requestAnimationFrame(checkSound);
                analyser.getByteFrequencyData(dataArray);
                const average = getAverageVolume(dataArray);
                if (average > 100) {
                    shuffle();
                    glitchEffectOn();
                }
            };

            checkSound();
        })
        .catch(function(err) {
            console.error('Error accessing microphone:', err);
        });
}

function getAverageVolume(array) {
    let values = 0;
    const length = array.length;
    for (let i = 0; i < length; i++) {
        values += array[i];
    }
    return values / length;
}
```
This was done by making it so that open opening the webpage, the prompt asking for access to the device's microphone is triggered. When allowed access, the microphone is then able to pick up sounds to trigger both the glitch and the shuffle effects. I had to add a function that limits the volume of which the visual effects are triggered, otherwise what appears on screen is a giant mess and it becomes hard to visually see and process my intended results as the glitches and shuffles are constantly triggered by every little sound. Therefore, I made it so that only sounds louder than a certain threshold may trigger the visual effects (which can usually be done through clapping loudly, though rubbing around the area of the device's microphone gets the job done just as well, if not better).
![Microphone](/assignment_2/a2p6.png)

Now having done all this, I sat wondering how I can make this piece of net art even more chaotic, even more zany. And then I realised I could change the button! I had decided to keep the button that triggered both the shuffling grids and glitches as it can be used by the viewer to get a general idea of how I wanted the project to function. But it was boring as just a plain ol' button, so I decided to switch it up a bit (pun intended).

I wanted my net art to appear normal at first sight before the crazyness really set in, so I decided to have the first look of the button relatively normal, with normal instructions telling users what to do. The only weird thing about it was the colour (deep pink as I wanted something easily visible from the background and images) and how it's just really long. 
![Just a Normal Button](/assignment_2/a2p7.png)

I then added the code that will make the words on the button change into the lyrics of "If You're Happy and You Know It" in 15+ languages which would be triggered alongside the glitch and shuffle functions.
```javascript
const sentences = [
    "If You're Happy and You Know it Clap Your Hands, if You're Happy and You Know it Clap Your Hands, if You're Happy and You Know it and You Really Wanna Show it, if You're Happy and You Know it Clap Your Hands.",
    "如果你快乐，你知道，拍拍你的手，如果你快乐，你知道，拍拍你的手，如果你快乐，你知道，你真的想表现出来，如果你快乐，你知道，拍拍你的手。它拍拍你的手。",
    "Если ты счастлив и знаешь это, хлопай в ладоши, если ты счастлив и знаешь это, хлопай в ладоши, если ты счастлив, и ты это знаешь, и действительно хочешь это показать, если ты счастлив и знаешь это это Хлопайте в ладоши.",
    "あなたが幸せで、それがわかっているなら、手をたたきましょう、あなたが幸せで、それがわかっているなら、手をたたきなさい、あなたが幸せで、それがわかっていて、本当にそれを見せたいのなら、あなたが幸せで、わかっているならクラップ・ユア・ハンズです。",
    "Si vous êtes heureux et que vous le savez, tapez dans vos mains, si vous êtes heureux et vous le savez, frappez dans vos mains, si vous êtes heureux et que vous le savez et que vous voulez vraiment le montrer, si vous êtes heureux et que vous le savez il applaudit dans vos mains.",
    "Wenn Sie glücklich sind und es wissen, klatschen Sie in die Hände, wenn Sie glücklich sind und es wissen, klatschen Sie in die Hände, wenn Sie glücklich sind und es wissen und es wirklich zeigen wollen, wenn Sie glücklich sind und es wissen Es klatscht in die Hände.",
    "إذا كنت سعيدًا وأنت تعرف ذلك، صفق بيديك، إذا كنت سعيدًا وأنت تعرف ذلك، صفق بيديك، إذا كنت سعيدًا وأنت تعرف ذلك وتريد حقًا إظهار ذلك، إذا كنت سعيدًا وأنت تعرف ذلك إنه يصفق بيديك.",
    "אם אתה שמח ואתה יודע את זה תמחא כפיים, אם אתה שמח ואתה יודע את זה מחא כפיים, אם אתה שמח ואתה יודע את זה ואתה באמת רוצה להראות את זה, אם אתה שמח ואתה יודע זה מחא כפיים.",
    "Nếu bạn hạnh phúc và bạn biết điều đó hãy vỗ tay, nếu bạn hạnh phúc và bạn biết điều đó hãy vỗ tay, nếu bạn hạnh phúc và bạn biết điều đó và bạn thực sự muốn thể hiện điều đó, nếu bạn hạnh phúc và bạn biết điều đó nó vỗ tay.",
    "Se sei felice e lo sai batti le mani, se sei felice e lo sai batti le mani, se sei felice e lo sai e vuoi davvero dimostrarlo, se sei felice e lo sai batte le mani.",
    "당신이 행복하고 그것을 알고 있다면 손뼉을 치세요, 당신이 행복하고 그것을 알고 있다면 박수를 쳐 주세요, 당신이 행복하고 당신이 그것을 알고 있고 당신이 정말로 그것을 보여주고 싶다면 당신이 행복하고 당신이 알고 있다면 박수를 쳐주세요 그것은 박수를 쳐라.",
    "Si beatus es, et scis, plaude manus, si beatus es, et tu scis, plaude manus, si beatus es et scis, et vere pretii ostende, si beatus es et scis. Plaudite manibus.",
    "Jika Kamu Senang dan Kamu Tahu Itu Tepuk Tanganmu, Jika Kamu Senang dan Kamu Tahu Itu Tepuk Tanganmu, Jika Kamu Senang dan Kamu Tahu Itu dan Kamu Benar-benar Ingin Menunjukkannya, Jika Kamu Senang dan Kamu Tahu itu Tepuk Tanganmu.",
    "Ef þú ert hamingjusamur og þú veist það, klappaðu höndum þínum, ef þú ert ánægður og þú veist það, klappaðu höndunum, ef þú ert hamingjusamur og þú veist það og þú vilt virkilega sýna það, ef þú ert ánægður og þú veist það klappa höndunum.",
    "As jy gelukkig is en jy weet dit, klap jou hande, as jy gelukkig is en jy weet dit, klap jou hande, as jy gelukkig is en jy weet dit en jy wil dit regtig wys, as jy gelukkig is en jy weet dit Klap Jou Hande.",
    "မင်းပျော်ရင် မင်းသိရင်လက်ခုတ်တီး၊ မင်းပျော်ရင်သိရင်လက်ခုတ်တီး၊ မင်းပျော်ရင်သိပြီး တကယ်ပြချင်တယ် မင်းပျော်ရင် မင်းသိမှာပါ လက်ခုပ်တီးပါ။",
    "如果你快樂，你知道，拍拍你的手，如果你快樂，你知道，拍拍你的手，如果你快樂，你知道，你真的想表現出來，如果你快樂，你知道，拍拍你的手。",
];

let currentSentenceIndex = 0;

function shuffle() {

    const randomIndex = Math.floor(Math.random() * sentences.length);
    const newSentence = sentences[randomIndex];
    
    const shuffleButton = document.getElementById('shuffleButton');
    shuffleButton.textContent = newSentence;
    ...
}
```
I had made the button so long so as to ensure that the viewers don't have to scroll up and down constantly just to see both the shuffle effect and the glitch effect and also because the terrible formatting irritated me as the creator so I know it would irritate many of the possible viewers as well.
```html
<button id="shuffleButton" onclick="shuffle()" style="width: 200%; font-size: 25px; text-align: auto; background-color: deeppink;">Click here or make a sound, a loud sound.</button>
```
This alongside the random lyrics and the other visual effects made for what I believe to be a very zany and chaotic piece of net art.
![Never Ending, It Is](/assignment_2/a2p8.png)

Like so, you see the final result of my project. If I had more time, will, and am not bogged down by the assignment of my other classes, I would like to add to the piece where alongside the random languages, the button also has random colours and fonts triggered each time by the button press and/or sound the microphone picks up. Alas, I have not done this, and from the amount of times my laptop has had issues the past two weeks I'd rather not push my luck. Perhaps another day, another time.