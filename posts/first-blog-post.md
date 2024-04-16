---
title: Creative Coding Blog!
published_at: 2024-03-06
snippet: This is an excerpt of my first blog post and my first entry into the world of creative coding!
disable_html_sanitization: true
---

Alrighty let's get started!

<iframe src="https://editor.p5js.org/s3942372/full/RPKqRVLDE" width="100%" height="242px"></iframe>

![a picture of a computer with code](/week_1_homework/ccs_pfp.jpg)

Hello, world!

# Week 1 Homework

Honestly the worst part about this week was that first my laptop crashed, and then the wifi was down.

## Part 1
Started to try and make a grid - wasn't very sure if we're making a static grid or one that moves like the example sketch did.

First tried to just input multiple copies of the already existing line of squares - did not work, could only have 4 of them on screen in total, not to mention they start to fuse together as they grew in size, so I'll just try to make a static square instead. Pretty sure that's what we're supposed to do anyways.

![what is this mess of squares really](/week_1_homework/whatisthismess.png)

I then tried to create an x-axis (a row) and a y-axis (a column) thinking that if I'm able to get those I'll be able to fill out the rest of the grid. Not sure if I succeeded or not. Got both a row and column, but they are entire bars,rectangles, not individual squares making up a row and a column.

![success! but is it really?](/week_1_homework/getthatxvariabletoo.png)

Honestly I think I'm just messing around until something works.

Monday night right now and I haven't been able to work on this since last Wednesday. I should probably look up resources to make finding a solution easier but I'm stubborn and I want to see if I can somehow just manage to stumble upon the answer. I've now gotten rid of the lines of code meant to create the growing and shrinking of the squares so I can focus on just making a grid. I've also somehow managed to make everything a circle. Joy.

![trying again to section the squares off - they're circles now](/week_1_homework/whyareyoucircles.png)

Got the grid (kinda) format now. This was done by including the for loop determining the columns into the code of the for loop determining the rows. Everything is still circular though.

![why are you still circular](/week_1_homework/whyareyoustillcircles.png)

Was trying to figure out why the border is missing and then realised I had 'noStroke' in the 'function'. Got rid of that and the borders are now back. Yay.

![borders are back](/week_1_homework/atleastigottheborderback.png)

Finally got the grid as squares. It only took an hour of me staring at my laptop in confused frustration. Changed the code in line 12 from 'square (100 * x, 100 * y, 100, 100)' to 'rect (100 * x, 100 * y, 100, 100)' and it was fixed. it was actually frustratingly easy and simple in hindsight.

![it's a grid now](/week_1_homework/hellyeahididit.png)

Finished(?) product:

<div align="center">

<iframe src="https://editor.p5js.org/s3942372/full/I971ryDnE" width="100%" height="800px"></iframe>

</div>


## Part 2

To start, let me profess: I give up. 

It's currently Tuesday, 10:00 P.M., and I just got off my shift at my part-time job an hour ago. I've decided to try and recreate Rafael Rozendaal's ["Why Was He Sad"](https://www.whywashesad.com/) and well, it was here that I've realised that I made a mistake. I am familiar with HTML, CSS and JavaScript on Visual Studio Code - I am not familar with P5. I also have a limited time, so the best I could do in the next two hours was just create several squares, have them move across the screen, and disappear when you click the screen. If I can work on this more this week I'll try to recreate it more accurately but so far it's pretty bad (to be fair I did try to recreate ["Open This Window"](https://www.openthiswindow.com/) first but the less said about that attempt the better - also pretty sure Rozendaal did not make this one using P5).

Failed attempt numero uno - why can't I drag the square?????:

![gotta try again during the weekend](/week_1_homework/whycantidragyou.png)

Semi failed attempt numero dos - I wanna work on it more:

![gotta try again during the weekend](/week_1_homework/orderthemsquares.png)

By the way, is there a P5 version of 'mouseonHover' or something? I could not find it.

<iframe id="failed_clouds" src="https://editor.p5js.org/s3942372/full/sX--IYrCF" width="100%" height="800px"></iframe>

<script type="module">
    const iframe = document.getElementById ('failed_clouds')
    iframe.width = iframe.parentNode.scrollWidth
    iframe.height = iframe.parentNode.scrollWidth + 42
    </script>

Hooray the blog now isn't loading for some reason. Going on the website only has the default template appear. Whoo thisissogreat...

Update: 1:15 A.M. I fixed it.

# Week 2 Homework
*COULD NOT BE COMPLETED DUE TO WRIST PAIN

## Part 1

## Part 2

# Week 3 Homework
*COULD NOT BE COMPLETED DUE TO BACK, SHOULDER, NECK, ARM AND WRIST PAIN (clearly my condition is worsening)

## Part 1

## Part 2

# Assignment 1
To put it simply, 'Effective complexity' is a measure of the information - the complexity - within a system. For there to be an 'effective' amount of complexity, the information given cannot be too 'ordered' or 'disordered'. If it is too 'ordered', then the information is fairly lacking in variation and can be considered boring or disinteresting by other parties. Little to no information can be extracted as well as there is no variation in what is presented. Similarly, if it is too 'disorderd', then the information given is nonsensical, with no structure and no information that can be understood. As such, there needs to be a balance, a middlepoint between ordered and disordered in which people are then able to extract the maximum information they can. 

For Sianne Ngai, the aesthetic category of 'cute' is something that is intimate and domestic. It is about consumption and the relationship between a subject and an object, it is warm and fuzzy and its apparent vulnerability can be and is weaponised by invoking either the more caring side or the more sadistic side of a person. For example, the teddybear. Many children when given a teddybear choose to care for it like a child or a pet of their own. They dress it up and feed it, sleep with it, even going so far as to give it a makeshift family or have tea parties with it. Yet, there are also children who do not do this, instead they would beat up the teddybear, throw it around, and rip open it's body to expose its soft stuffing insides before emptying it out. By using the aesthetic of 'cute', artists can draw the response they wish from their audience.

For the assignment I was unable to start in time and had to request an extension due to having two sudden declines in my physical well-being (sorry about that). The first decline happened about mid week 3 and was my right wrist, which could not be put under pressure or bent without pain and had to be kept still for quite a while, while the second decline in health occurred on Tuesday of week 4, during which I started experiencing intense pain in my neck, shoulders, back and left arm (not to mention my wrist from week 3). This basically left me having to keep these areas immobile, and being unable to lift my arms meant I could not type very well and code out the assignment.

What it did allow me was time to think about what to do for the assignment, and I had ultimately decided on creating my response to Rafaël Rozendaal's work ["Fatal to the Flesh"](https://www.fataltotheflesh.com/). This work was created to give people an outlet. Accessible on any device, it allows users to take out their frustrations on this 'digital skin' rather than actually harming themselves. I wished to take this concept and play on the opposite. Rather than cutting the 'skin', I wanted people to 'heal' it (hence I named my response "Healing of the Flesh").

It is now Thursday of the mid-term break and I can finally lift my arm, somewhat. My wrist is feeling better too, which means I can fully start on this even though my typing speed is reduced by quite alot (I actually finished coding everything on Friday evening but had to go to my part-time on Saturday, so I ended up writing up these paragraphs here on Sunday, so sorry for the later submission).

I started off by attempting to create a workable prototype where I could draw lines onto a white canvas. As can be seen in the screenshot below, I created several functions where upon clicking, dragging and releasing the mouse, a line will be drawn. The direction and length of the line is also determined by the start point (where the mouse is clicked) and the end point (where the mouse is released).

![Try 1: Draw Lines](/assignment_1/a1p1.png)

Having succeeded in this, I then decided to try and create the same thing, only this time the lines are replaced by bandaids. I created a function that would determine the size of the bandaids based on the distance of the mouse being dragged. So the longer the distance, the bigger the size of the bandaid. I also tried to replicate the standard bandaid look - a rectangle bandage with curved edges and a smaller rectangle of padding at the center. However, upon testing out if the code worked, I found that for every little bit of distance dragged, another bandaid is produced, resulting in the image below:

![Try 2: Infinite Bandaid Glitch](/assignment_1/a1p2.png)

I soon found out it was because I had the line (drawBandaid(startX, startY, endX, endY)) written under the draw function as well as the mouseRelease function, and upon erasing it the code worked as I wanted.

After that I just had to finish polishing up the response. I changed the sizing of the bandaid's padding to be more similar to real bandaids and shifted the colour to be more flesh-toned like most bandaids are. I also changed the background of the response to be the exact same shade of red as the blood in Rafaël Rozendaal's "Fatal to the Flesh". As my piece is a response, I thought that having the same colour would be a good link back to the work. I had also orginally considered keeping the bandaids white so that there would be an inverse occuring, with "Fatal to the Flesh" being red on white and my "Healing of the Flesh" being white on red. I ultimately decided against it because then it may be harder for users to recognise the objects drawn as bandaids.

!["Healing of the Flesh" end result](/assignment_1/a1p3.png)

I also attempted to make "Fatal to the Flesh" the background for "Healing of the Flesh". Unfortunately my attempts to insert the URL did not work, which was probably for the best, as I did not know how I could keep the interactivity of both works. Methods recommended such as creating the background as a variable also did not work, much to my dismay. If my physical health was fine and I had the time, I also would have liked to try having bandaids of different sizes and shapes generated each time the mouse is clicked. Having a Hello Kitty bandaid would have been nice.

For "Healing of the Flesh", I had the entire background red as I wanted it to be considered a continuation of "Fatal to the Flesh". One of the first things I did in Rozendaal's work was to see if I could 'colour in' the white background, so my response takes place after that (red itself as a colour is also a good representation for pain and anger and frustration, as well as many of the other more potent emotions Rozendaal's users would be channeling when interacting with his work). The user has sliced so much that the entire piece has been sliced apart and dyed red. If "Fatal to the Flesh" is a representation of the frustration and upset of it's users, then I wanted my response to be the healing process. The user is trying help themselves by bandaiding the wound.

_However, I am a great fan of irony, and the response isn't really a healing process._

Bandaids are meant for smaller cuts and wounds like a splinter or paper cut, not for the type of harm "Fatal to the Flesh" represents. As the user covers the red up in "Healing of the Flesh" with the bandaids, it gets to a point where visually, it doesn't appear like they are trying to 'heal' anymore. Rather, it looks more like they are trying to cover everything up. I wanted to play with the idea of people who are hurt and try to cover up their pain, rather than the idea of recovering from the hurt. This is why I chose to have bandaids be the objects generated by the user. It is somewhat futile to try and use a bandaid to cover up the cut left by a razor blade after all. The wound is too big and too deep for a bandaid to help.

To make it so that the users would have a hard time covering the red up using the bandaids, I made it so that wherever the mouse is released, is where the center of each bandaid that's generated would appear. The mouse drag still determines the size of the bandaid, but the bandaid itself does not fully appear where you expect it to be, it's always just slightly off to make it harder for the users to visualise and for them to cover everything up neatly. There is always just a bit of red peaking through.

![Are you actually healing?](/assignment_1/a1p4.png)

If Rafaël Rozendaal's work "Fatal to the Flesh" is a type of 'cute' that calls on the users sadism, then I wanted mine to do the opposite and to appeal to one's more caring side. Although, rather than saying that the work in of itself is 'cute', it may be more accurate to say that the users are the ones who are made to be 'cute', with their attempts to visually cover up the pain. It is one of the more twisted sides of the aesthetic, the ones made apparent by helplessness and vulnerability, yet it is cute nonetheless.

(Or maybe I'm just writing nonsense while on painkillers.)

<iframe id="Healing of the Flesh" src="https://editor.p5js.org/s3942372/full/KfYp2kEdj" width="100%" height="800px"></iframe>

<script type="module">
    const iframe = document.getElementById ('heal_flesh')
    iframe.width = iframe.parentNode.scrollWidth
    iframe.height = iframe.parentNode.scrollWidth + 42
</script>

# Week 5 Homework
Help.

SP unfortunately my laptop for whatever reason would not transfer the code over as a website currently so I'm doing this somewhat blind.

## Part 1: Glitch
So let's break up the code bit by bit as needed.

```
<canvas id="glitch_self_portrait"></canvas>
```
This sets up the canvas element. It is here that the rest of the code takes effect, showing the glitch effect.

```
const cnv = document.getElementById(`glitch_self_portrait`);
cnv.width = cnv.parentNode.scrollWidth;
cnv.height = cnv.width * 9 / 16;
cnv.style.backgroundColor = `deeppink`;
```
This sets the width to match with that of the parent element, while the height is set to maintain the aspect ratio of 16:9 and the background is set to a deep pink colour.

```
const ctx = cnv.getContext(`2d`);
```
Enables images to be drawn on the canvas by obtaining the 2D rendering context (information needed to render) of the canvas.

```
let img_data
```
A variable declaration, though the value is undefined.

```
const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)
```
Declares the function 'draw' and assigns it the parameter 'i'. The code to the right of the arrow determines that the image object is drawn onto the canvas starting from the top left corner ('0, 0' are the x and y coordinates) and cover the entire canvas area as determined by the canvas width and canvas height.

```
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

```
const rand_int = max => Math.floor (Math.random () * max)
```
A random integer is generated, with 'max' being the maximum value the integer can be.

```
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

```
 const glitch_arr = []
```
Stores the generated 'glitched' images  and adds to the array.

```
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

```
let is_glitching = false
let glitch_i = 0
```
Tracks whether the glitch effect is currently active or not, and which glitched images should be displayed on the canvas.

```
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

## Part 3: Glitch Self-Portrait
I CAN"T GET IT TO WORK?!?!?!!?!?!

## Part 4: Readings
I.
Glitch belongs most to Sianne Ngai's aesthetic category of 'interesting'. 'Interesting', to Ngai, is "some variation from a norm". 'Interesting' shifts, between "the familiar and the unfamiliar, identity and difference, continuity and break", and yet its variation can be big and small.

Glitches are unconventional and sometimes unpredictable manifestations, and can evoke a sense of curiosity and fascination. It can capture attention and provoke thought. It's unfamilar, and causes people to question "Why?". Compared to the other two ('Zany' and 'Cute'), glitch fits the aesthetic category of 'interesting' much more. It does not cause it's users to experience care or sadism, nor is it performative, provoking intimacy with the subject.

II.
I believe glitch increases effective complexity. As stated before, effective complexity is essentially comprised of both 'order' and 'disorder'. There needs to be a balance of both to have effective complexity. Too much 'order' and it's boring, too much 'disorder' and it's nonsensical. As such the more balanced, the more effectively complex a work is. Glitch (or at the very least the code that it's comprised of) is neither too 'ordered' or 'disorderd'. It is not consistently repeating the exact same information, nor is it giving out nonsensical information. It contains a balance of the two and produces a work that is visually interesting to the viewers.





# Extra stuff to know when writing:

_underline_

**bold**


