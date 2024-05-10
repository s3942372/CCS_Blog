---
title: Week 7 Homework
published_at: 2024-04-30
snippet: Ascii-Cam x Week 5
disable_html_sanitization: true
---


# Part 1: Ascii-Cam x Week 5

<div id="ascii_div"></div>

<input type="file" id="file_input" accept="image/*">

<script type="module">

    const fileInput = document.getElementById('file_input');
    fileInput.addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                convertToAscii(img);
            };
            img.src = event.target.result;
        };

        reader.readAsDataURL(file);
    }

    function convertToAscii(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, img.width, img.height);

        const div = document.getElementById('ascii_div');
        div.innerText = '';

        const chars = "¶Ñ@%&∆∑∫#Wß¥$£√?!†§ºªµ¢çø∂æåπ*™≤≥≈∞~,.…_¬“‘˚`˙";

        let ascii_img = '';
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < imageData.data.length; i += 4) {
            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            const brightness = (r + g + b) / 3 / 255;
            const charIndex = Math.floor(brightness * (chars.length - 1));
            ascii_img += chars[charIndex];
            if ((i / 4 + 1) % canvas.width === 0) {
                ascii_img += '\n';
            }
        }

        div.innerText = ascii_img;
    }
</script>

# Part 1: Ascii-Cam x C2

<script src="/script/c2.min.js"></script>
<script src="/script/p5.min.js"></script>

<canvas id="c2"></canvas>

<div id="ascii_div"></div>

Code from [here](https://github.com/ren-yuan/c2.js/blob/main/examples/Delauney.js).

<script type="module">

//Created by Ren Yuan

const renderer = new c2.Renderer(document.getElementById('c2'));
resize();

renderer.background('#cccccc');
let random = new c2.Random();


class Agent extends c2.Point {
    constructor() {
        let x = random.next(renderer.width);
        let y = random.next(renderer.height);
        super(x, y);

        this.vx = random.next(-2, 2);
        this.vy = random.next(-2, 2);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
            this.x = 0;
            this.vx *= -1;
        } else if (this.x > renderer.width) {
            this.x = renderer.width;
            this.vx *= -1;
        }
        if (this.y < 0) {
            this.y = 0;
            this.vy *= -1;
        } else if (this.y > renderer.height) {
            this.y = renderer.height;
            this.vy *= -1;
        }
    }

    display() {
        renderer.stroke('#333333');
        renderer.lineWidth(5);
        renderer.point(this.x, this.y);
    }
}

let agents = new Array(20);
for (let i = 0; i < agents.length; i++) agents[i] = new Agent();


renderer.draw(() => {
    renderer.clear();

    let delaunay = new c2.Delaunay();
    delaunay.compute(agents);
    let vertices = delaunay.vertices;
    let edges = delaunay.edges;
    let triangles = delaunay.triangles;

    let maxArea = 0;
    let minArea = Number.POSITIVE_INFINITY;
    for (let i = 0; i < triangles.length; i++) {
        let area = triangles[i].area();
        if(area < minArea) minArea = area;
        if(area > maxArea) maxArea = area;
    }

    renderer.stroke('#333333');
    renderer.lineWidth(1);
    for (let i = 0; i < triangles.length; i++) {
        let t = c2.norm(triangles[i].area(), minArea, maxArea);
        let color = c2.Color.hsl(30*t, 30+30*t, 20+80*t);
        renderer.fill(color);
        renderer.triangle(triangles[i]);
    }

    for (let i = 0; i < agents.length; i++) {
        agents[i].display();
        agents[i].update();
    }
    
    const chars = "¶Ñ@%&∆∑∫#Wß¥$£√?!†§ºªµ¢çø∂æåπ*™≤≥≈∞~,.…_¬“‘˚`˙"
    
    const div = document.getElementById (`ascii_div`)
    div.style.fontFamily = `monospace`
    div.style.textAlign = `center`

    const w = renderer.canvas.width
    const h = renderer.canvas.height
    const pixels = renderer.context.getImageData (0, 0, w, h,).data

    let ascii_img = ``

    for (let y = 0; y < cnv.height; y += 2) {
        for (let x = 0; x < cnv.width; x++) {
            const i = (y * cnv.width + x) * 4
            const r = pixels[i]
            const g = pixels[i + 1]
            const b = pixels[i + 2]
            const br = (r * g * b / 16581376) ** 0.1
            const char_i = Math.floor (br * chars.length)
            ascii_img += chars[char_i]
        }
        ascii_img += `\n`
    }
    div.innerText = ascii_img
});

window.addEventListener('resize', resize);
function resize() {
    let parent = renderer.canvas.parentElement;
    renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9);
}

</script>

# Part 2: Why does combination result in the Aesthetically Chaotic?
As stated before, for there to be 'effective complexity' there needs to be a measure of how much information is in the system. If there is too much or too little, the result in not understandable or boring to viewers. By combining ideas/libraries, the scale is tipped from there being just enough information (creating an effectively complex system) to there being a little too much information, and so the result becomes a bit less stable, less understandable, more... chaotic. What the viewers see is something that is now a bit more disordered than what was desired, and so appearance-wise, aesthetically, things are chaotic.