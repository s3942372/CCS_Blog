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

<iframe src="https://editor.p5js.org/s3942372/full/I971ryDnE" width="100%" height="100%"></iframe>

# Week 2 Homework

## Help

_underline_

**bold**
