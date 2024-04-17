---
title: Week 5 Homework
published_at: 2024-04-16
snippet: glitch example
disable_html_sanitization: true
---

<canvas id="glitch_self_portrait"></canvas>

<script type="module">

   const cnv = document.getElementById (`glitch_self_portrait`)
   cnv.width = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16
   cnv.style.backgroundColor = `deeppink`

   const ctx = cnv.getContext (`2d`)

   let img_data

   const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)

   const img = new Image ()
   img.onload = () => {
      cnv.height = cnv.width * (img.height / img.width)
      draw (img)
      img_data = cnv.toDataURL ("image/jpeg")
      add_glitch ()
   }
   img.src = `/glitch_example/its_me.jpeg`

   const rand_int = max => Math.floor (Math.random () * max)

   const glitchify = (data, chunk_max, repeats) => {
      const chunk_size = rand_int (chunk_max / 4) * 4
      const i = rand_int (data.length - 24 - chunk_size) + 24
      const front = data.slice (0, i)
      const back = data.slice (i + chunk_size, data.length)
      const result = front + back
      return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
   }

   const glitch_arr = []

   const add_glitch = () => {
      const i = new Image ()
      i.onload = () => {
         glitch_arr.push (i)
         if (glitch_arr.length < 12) add_glitch ()
         else draw_frame ()
      }
      i.src = glitchify (img_data, 96, 6)
   }

   let is_glitching = false
   let glitch_i = 0

   const draw_frame = () => {
      if (is_glitching) draw (glitch_arr[glitch_i])
      else draw (img)

      const prob = is_glitching ? 0.05 : 0.02
      if (Math.random () < prob) {
         glitch_i = rand_int (glitch_arr.length)
         is_glitching = !is_glitching
      }

      requestAnimationFrame (draw_frame)
   }

</script>

```html
<canvas id="glitch_self_portrait"></canvas>

<script type="module">

   const cnv = document.getElementById (`glitch_self_portrait`)
   cnv.width = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16
   cnv.style.backgroundColor = `deeppink`

   const ctx = cnv.getContext (`2d`)

   let img_data

   const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)

   const img = new Image ()
   img.onload = () => {
      cnv.height = cnv.width * (img.height / img.width)
      draw (img)
      img_data = cnv.toDataURL ("image/jpeg")
      add_glitch ()
   }
   img.src = `/week_5/its_me.jpeg`

   const rand_int = max => Math.floor (Math.random () * max)

   const glitchify = (data, chunk_max, repeats) => {
      const chunk_size = rand_int (chunk_max / 4) * 4
      const i = rand_int (data.length - 24 - chunk_size) + 24
      const front = data.slice (0, i)
      const back = data.slice (i + chunk_size, data.length)
      const result = front + back
      return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
   }

   const glitch_arr = []

   const add_glitch = () => {
      const i = new Image ()
      i.onload = () => {
         glitch_arr.push (i)
         if (glitch_arr.length < 12) add_glitch ()
         else draw_frame ()
      }
      i.src = glitchify (img_data, 96, 6)
   }

   let is_glitching = false
   let glitch_i = 0

   const draw_frame = () => {
      if (is_glitching) draw (glitch_arr[glitch_i])
      else draw (img)

      const prob = is_glitching ? 0.05 : 0.02
      if (Math.random () < prob) {
         glitch_i = rand_int (glitch_arr.length)
         is_glitching = !is_glitching
      }

      requestAnimationFrame (draw_frame)
   }

</script>
```
<canvas id="pixel_sort"></canvas>

<script type="module">
   import { PixelSorter } from "/script/pixel_sort.js"

   const cnv  = document.getElementById (`pixel_sort`)
   cnv.width  = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16   

   const ctx = cnv.getContext (`2d`)
   const sorter = new PixelSorter (ctx)

   const img = new Image ()

   img.onload = () => {
      cnv.height = cnv.width * (img.height / img.width)
      ctx.drawImage (img, 0, 0, cnv.width, cnv.height)
      sorter.init ()
      draw_frame ()
   }

   img.src = `/week_5/young_me.jpeg`

   let frame_count = 0
   const draw_frame = () => {

      ctx.drawImage (img, 0, 0, cnv.width, cnv.height)

      let sig = Math.cos (frame_count * 2 * Math.PI / 500)

      const mid = {
         x: cnv.width / 2,
         y: cnv.height / 2
      }

      const dim = {
         x: Math.floor ((sig + 3) * (cnv.width / 6)) + 1,
         y: Math.floor ((sig + 1) * (cnv.height / 6)) + 1
      }

      const pos = {
         x: Math.floor (mid.x - (dim.x / 2)),
         y: Math.floor (mid.y - (dim.y / 2))
      }

      sorter.glitch (pos, dim)

      frame_count++
      requestAnimationFrame (draw_frame)
   }

</script>



# Week 5 Homework
Help.

SP unfortunately my laptop for whatever reason would not transfer the code over as a website currently so I'm doing this somewhat blind.

## Part 1: Glitch
So let's break up the code bit by bit as needed.

```html
<canvas id="glitch_self_portrait"></canvas>
```
This sets up the canvas element. It is here that the rest of the code takes effect, showing the glitch effect.

```html
const cnv = document.getElementById(`glitch_self_portrait`);
cnv.width = cnv.parentNode.scrollWidth;
cnv.height = cnv.width * 9 / 16;
cnv.style.backgroundColor = `deeppink`;
```
This sets the width to match with that of the parent element, while the height is set to maintain the aspect ratio of 16:9 and the background is set to a deep pink colour.

```html
const ctx = cnv.getContext(`2d`);
```
Enables images to be drawn on the canvas by obtaining the 2D rendering context (information needed to render) of the canvas.

```html
let img_data
```
A variable declaration, though the value is undefined.

```html
const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)
```
Declares the function 'draw' and assigns it the parameter 'i'. The code to the right of the arrow determines that the image object is drawn onto the canvas starting from the top left corner ('0, 0' are the x and y coordinates) and cover the entire canvas area as determined by the canvas width and canvas height.

```html
const img = new Image ()
img.onload = () => {
    cnv.height = cnv.width * (img.height / img.width)
    draw (img)
    img_data = cnv.toDataURL ("image/jpeg")
    add_glitch ()
}
img.src = `/240405/pfp_glasses.jpg`
```
Creates a new image object (source is set to a JPEG image file). The canvas height and width is adjusted to the aspect ratio of the newly loaded image and draws it onto the canvas. The canvas content is the converted to a base64 encoded JPEG image before a glitch effect is added through a function.

```html
const rand_int = max => Math.floor (Math.random () * max)
```
A random integer is generated, with 'max' being the maximum value the integer can be.

```html
const glitchify = (data, chunk_max, repeats) => {
    const chunk_size = rand_int (chunk_max / 4) * 4
    const i = rand_int (data.length - 24 - chunk_size) + 24
    const front = data.slice (0, i)
    const back = data.slice (i + chunk_size, data.length)
    const result = front + back
    return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
}
```
A glitch effect is generated through the manipulation of the image data. Random chunks of image data is removed from the image repeatedly based on the parameters given. The 2nd line ensures that the chunk size is a multiple of 4, while the 3rd line ensures that a chunk can be removed to make the glitch effect. In the 4th line, 'front' is the part of the image data where the glitch effect will be applied and in the 5th line 'back' is what follows. 6th line is the combination of the previous two and is used to create the glitch effect. The last line determines whether or not to continue to apply the glitch effect until the desired number of repeats has been reached.

```html
 const glitch_arr = []
```
Stores the generated 'glitched' images  and adds to the array.

```html
const add_glitch = () => {
    const i = new Image ()
    i.onload = () => {
        glitch_arr.push (i)
        if (glitch_arr.length < 12) add_glitch ()
        else draw_frame ()
    }
    i.src = glitchify (img_data, 96, 6)
}
```
Sets up the function 'add_glitch' which creates and loads the glitched images onto the canvas using 'draw_frame'.

```html
let is_glitching = false
let glitch_i = 0
```
Tracks whether the glitch effect is currently active or not, and which glitched images should be displayed on the canvas.

```html
const draw_frame = () => {
    if (is_glitching) draw (glitch_arr[glitch_i])
    else draw (img)

    const prob = is_glitching ? 0.05 : 0.02
    if (Math.random () < prob) {
        glitch_i = rand_int (glitch_arr.length)
        is_glitching = !is_glitching
    }

    requestAnimationFrame (draw_frame)
}
```
Frames are repeatedly rendered on the canvas in a loop. If 'is_glitching' is set to 'true' then the glitched images from the array is displayed on the canvas and the probability of the glitch effect occuring is set to '0.05'. If it's set to 'false' then the original image is drawn on the canvas and the probability of the glitch effect occuring is set to '0.02'. A random number is then generated and if it is less than the probability the glitch effect is triggered. 'is_glitching' is then toggled to become the opposite; 'true' becomes 'false' and vice versa. Finally the last line creates a loop that repeatedly renders the frames on the canvas, making it appear as if the glitch is constantly happening.

## Part 2: Pixel Sort

## Part 4: Readings
I.
Glitch belongs most to Sianne Ngai's aesthetic category of 'interesting'. 'Interesting', to Ngai, is "some variation from a norm". 'Interesting' shifts, between "the familiar and the unfamiliar, identity and difference, continuity and break", and yet its variation can be big and small.

Glitches are unconventional and sometimes unpredictable manifestations, and can evoke a sense of curiosity and fascination. It can capture attention and provoke thought. It's unfamilar, and causes people to question "Why?". Compared to the other two ('Zany' and 'Cute'), glitch fits the aesthetic category of 'interesting' much more. It does not cause it's users to experience care or sadism, nor is it performative, provoking intimacy with the subject.

II.
I believe glitch increases effective complexity. As stated before, effective complexity is essentially comprised of both 'order' and 'disorder'. There needs to be a balance of both to have effective complexity. Too much 'order' and it's boring, too much 'disorder' and it's nonsensical. As such the more balanced, the more effectively complex a work is. Glitch (or at the very least the code that it's comprised of) is neither too 'ordered' or 'disorderd'. It is not consistently repeating the exact same information, nor is it giving out nonsensical information. It contains a balance of the two and produces a work that is visually interesting to the viewers.
