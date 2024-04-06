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

It's currently Tuesday, 10:00 P.M., and I just got off my shift at my part-time job an hour ago. I've decided to try and recreate Rafael Rozendaal's [Why Was He Sad](https://www.whywashesad.com/) and well, it was here that I've realised that I made a mistake. I am familiar with HTML, CSS and JavaScript on Visual Studio Code - I am not familar with P5. I also have a limited time, so the best I could do in the next two hours was just create several squares, have them move across the screen, and disappear when you click the screen. If I can work on this more this week I'll try to recreate it more accurately but so far it's pretty bad (to be fair I did try to recreate [Open This Window](https://www.openthiswindow.com/) first but the less said about that attempt the better - also pretty sure Rozendaal did not make this one using P5).

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

What it did allow me was time to think about what to do for the assignment, and I had ultimately decided on creating my response to Rafaël Rozendaal's work [Fatal to the Flesh](https://www.fataltotheflesh.com/). This work was created to give people an outlet. Accessible on any device, it allows users to take out their frustrations on this 'digital skin' rather than actually harming themselves. I wished to take this concept and play on the opposite. Rather than cutting the 'skin', I wanted people to 'heal' it.

It is now Thursday of the mid-term break and I can finally lift my arm, somewhat. My wrist is feeling better too.

I started off by attempting to create a workable prototype where I could draw lines onto a white canvas. As can be seen in the screenshot below, I created several functions where upon clicking, dragging and releasing the mouse, a line will be drawn. The direction and length of the line is also determined by the start point (where the mouse is clicked) and the end point (where the mouse is released).

![Try 1: Draw Lines](/assignment_1/a1p1.png)


_underline_

**bold**
