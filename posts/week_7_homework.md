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

# Part 2: Why does combination result in the Aesthetically Chaotic?
As stated before, for there to be 'effective complexity' there needs to be a measure of how much information is in the system. If there is too much or too little, the result in not understandable or boring to viewers. By combining ideas/libraries, the scale is tipped from there being just enough information (creating an effectively complex system) to there being a little too much information, and so the result becomes a bit less stable, less understandable, more... chaotic. What the viewers see is something that is now a bit more disordered than what was desired, and so appearance-wise, aesthetically, things are chaotic.