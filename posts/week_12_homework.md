---
title: Week 12 Homework
published_at: 2024-06-15
snippet: Doubles as the post for Assignment 3
disable_html_sanitization: true
---


# All About Assignment 3

For Assignment 3, we were to respond to Lauren Lee McCarthy's work ["I heard TALKING IS DANGEROUS"](https://lauren-mccarthy.com/I-heard-TALKING-IS-DANGEROUS) and to deploy "some javascript that engages with a Community of Practice you are a member of." We then had to create a video that shows the viewer our work.

Here is where I shall put any and all discussion about the work, just in case it isn't apparent in the video.

## Community of Practice

The Community of Practice (CoP) of this piece is a somewhat broad one, but in general I would say that it is students in their 3rd year of their bachelor's degrees - the ones who will soon go on intership and enter the workforce - and are socially avoidant. That is, they have trouble speaking with and are painfully shy around strangers. I have several friends who arre like this, and being an introvert who have no difficulties being loud and the center of attention (tooting my own horn here), I feel that something that could at least somewhat help them practice interacting with others (especially for something important like an interview) would help a bit. This is also coming from my experience during primary school when the vice principal came to interview both me and a classmate about why we wanted to join their private secondary girl's school and we spent the entire interview with just me answering the vice principal's questions and my classmate quietly crying out of what I presumed to be nerves off to the side. The vice principal did not acknowledge her, and I feel that maybe something like that could have been avoided if my classmate at least knew how to answer the questions, or had practice backing her and so she could default to those if she was nervous. 

After all, if you have prepared answers and responses to certain things, even when you're nervous you're not likely to forget those, I dont think. Of course, I could be completely wrong since I'm speaking as someone who does best ad-libbing and going with the flow.

Adding onto this classmate, who in later years I've seen handle similar situations in the exact same way, I also have a good friend who struggles with English as a second language and ultimately decided that if people would not slow down in their English for her, she may as well never speak the language. Seeing how her only option would be then to find work in China since businesses and companies in English speaking countries would probably not accomodate for her, I thought that it would probably be nice if there was at least something that could prepare her somewhat. She struggles with forming responses in English on the fly, so if she's prepared already for some questions, she may not struggle as much. (You may think that I'm joking about the English thing but my recent interaction with her after not contacting each other for a long time was her telling me that she'd rather die than use an English social media platform and that she'd rather we talk to each other through a 3rd party).

## Mycelial Creativity

In what way can this simulator be expanded on? Well, it doesn't just have to be a simulator for interviews. People can have fun and take the base code and make it a simulator for all kinds of things. If we take it further, we can even potentially improve it to a point where it can help train people who find it hard to communicate with others with speaking. I feel that it can be a softer, safer way for some who have avoided others and locked themselves in their rooms for years, however I'm probably not the best person to speaking on this since I have the privilege of never finding communication difficult. I'm also speaking from a rather optimistic perspective; perhaps some may find it helpful, others not so much.

## Now, The Code

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style.css">
        <title>Interview Simulator</title>
    </head>
    <body>       
        <div class="container">
            <h1>Interview Simulator</h1>
            <div class="question" id="question">
                <h4>Hello, what's your name?</h4>
            </div>
            <textarea class="answer" id="answer" rows="4" cols="50" contenteditable></textarea><br> 
            <button onclick="nextQuestion()">Next Question</button>
            <div id="imageContainer">
                <img id="questionImage" src="hello.jpg" alt="Question Image">
            </div>
            <script src="script.js"></script>
        </div>
    </body>
</html>
```
![InterviewSimBase](/assignment_3/is5.png)
This set up the format of my simulator, where everything is roughly placed, and what is needed to function. This includes a button for users to move onto the next question as well as a text box for users to input questions.

My original simulator format looked very different, with a much less neat interface. Users would have primarily interacted by clicking on pre-set answers and the next button. This format was based on my ["PROJECT: BUDDY"](https://s3942372.github.io/im-2310/a3/) submission for Assignment 4 of the Interactive Media class I took during my year 1 semester 2 course. Ultimately I decided against keeping this format due to the clunky interface and the less responsive interface. My final version also resembles simulators that you can find online at random more.
![InterviewSimOG](/assignment_3/is1.png)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    background-image: url('successfulhires.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #8ab9ee;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.question {
    font-weight: bold;
    margin-bottom: 20px;
}
.answer {
    margin-bottom: 20px;
}
button {
    padding: 10px 20px;
    background-color: #1c242c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #144c8c;
}
#imageContainer {
    margin-top: 20px;
}
#imageContainer img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
```
![InterviewSimFinal](/assignment_3/is2.png)
For stylistic choices of the simulator, I looked up what would generally be considered corporate colours on Google and settled for a palette of blue, navy and white. The background outside of the body was initially also meant to be white, to ensure that focus remains on the interactive portion of the website, however I then made an exhaustion fueled decision to have the background be made of faces all looking at the user. The blue colour of the main body ensures that the interactive piece will stand out against all the faces regardless and I thought it would be funny to have them. Furthermore, the reasoning given for keeping the collage of faces be that these people are all people who had been successfully hired after having undergone training through the interview simulator. Having researched actual interview simulators made by businesses/companies using AI and having seen that they actually do kind of include pictures like this, I thus decided that yes, this reasoning is sound, and I can keep it.
![InterviewSimWhite](/assignment_3/is4.png)

Now onto the meat of the matter, the JavaScript.

```javascript
const questions = [
    "Tell me about yourself.",
    "What is your personal background?",
    "What is your work background?",
    "What do you know about our business?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why do you want to work for our company?",
    "What interests you about the position?",
    "How is your previous experience relevant?",
    "Why did you leave your previous job?",
    "Where do you see yourself in five years?",
    "Why should we hire you?",
    "Can you give an example of a time you demonstrated leadership?",
    "Tell me about a challenge or conflict you overcame at work.",
    "What is your preferred work or management style?",
    "How do you handle stress?",
    "How would you handle conflict in the workplace?",
    "Do you have any questions for us?",
    "Thank you for coming.",
    "Goodbye.",
    "",
];
const responses = [
    "Hello, I am Chris, and sometimes I am Christine. It depends on which browser you are currently using. I will be helping you practice for your interview today. Now why don't you tell me about yourself.",
    "That's great! Let's move on to the next question. What is your personal background?",
    "I see, and what is your work background?",
    "Experience is valuable. Tell me, what do you know about our business?",
    "I'll be taking note of that. What would you say are your strengths?",
    "Impressive! Keep it up. Now what are your weaknesses?",
    "Everyone has weaknesses. It's good that you're aware of yours. Right, Why do you want to work for our company?",
    "Interesting. Our company values align well with your goals. What interests you about the position?",
    "I see, I see. How is your previous experience relevant?",
    "Alright, that's certainly something. Why did you leave your previous job?",
    "Hmm, we'll take that into consideration. Where do you see yourself in five years?",
    "Ambitious goals! We appreciate your vision. Why should we hire you?",
    "You make a compelling case. Let's see what else you have to offer. Can you give an example of a time you demonstrated leadership?",
    "Oh my. That's certainly something. Now tell me about a challenge or conflict you overcame at work.",
    "Oh wow. That's amazing. How about this: what is your preferred work or management style?",
    "Hmm, we'll see how you fit in. This one's an important one now: how do you handle stress?",
    "Alright, leading on from that, how would you handle conflict in the workplace?",
    "Let me note that down. Now before we end the interview, do you have any questions for us?",
    "I'm afraid I can't answer that. Oh and just in case you were wondering, the people in the background are all of our previous hires who have established positions within our company. Apparently they all used something called 'Interview Simulator'. I heard it's really good, 10 out of 10 would recommend, 5 out of 5 stars, Gets you the job you want. You should try it out too if you haven't already. Just so you know.",
    "Thank you for coming. If we decide to hire you, you will recieve a response within a month time. Goodbye.",
    "Have a good day.",
];
const images = [
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
    "hello.jpg",
];
let currentQuestionIndex = 0;
function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        const answer = document.getElementById("answer").value.toLowerCase().trim();
        let response;
            if (answer.includes("strength") /*|| question.includes("strengths")*/ ) {
                response = "Your strength is noted.";
            } else if (answer.includes("weakness")) {
                response = "Acknowledged. It's good to be self-aware.";
            } else if (answer.includes("interested") || answer.includes("passion")) {
                response = "That's fantastic to hear!";
            } else if (answer.includes("Chinese") || answer.includes("family")) {
                response = "That's fantastic, we have to fill the quotas.";
            } else if (answer.includes("Indigenous") || answer.includes("family")) {
                response = "That's fantastic, we have to fill the quotas.";
            } else if (answer.includes("African") || answer.includes("family")) {
                response = "That's fantastic, we have to fill the quotas.";
            } else if (answer.includes("gay")) {
                response = "That's fantastic, we have to fill the quotas.";
            } else if (answer.includes("homosexual")) {
                response = "That's fantastic, we have to fill the quotas.";
            } else if (answer.includes("trans")) {
                response = "That's fantastic, we have to fill the quotas.";
            } else if (answer.includes("inexperienced")) {
                response = "That's unfortunate, we like people with experience in this field of work.";
            } else if (answer.includes("little") || answer.includes("experience")) {
                response = "Some more experience would have been ideal, but at least you have some.";
            } else if (answer.includes("some") || answer.includes("experience")) {
                response = "That's fine, you can always gain more with us.";
            } else if (answer.includes("lot") || answer.includes("experience")) {
                response = "That's fantastic, it's great to have people who know what they're doing!";
            } else if (answer.includes("salary")) {
                response = "You'll be getting the standard entry level salary, and if you do well we can discuss a raise.";
            } else if (answer.includes("nothing")) {
                response = "That's dissapointing. You should have done your work. Now I think that you're not interested, and that you won't give 100% in your work here.";
            } else if (answer.includes("research")) {
                response = "That's excellent! We always appreciate the ones who make sure to prepare for their interview.";
            } else if (answer.includes("collaboration")) {
                response = "That's excellent! We love a team player!";
            } else if (answer.includes("collaborate")) {
                response = "That's excellent! We love a team player!";
            } else if (answer.includes("collaborating")) {
                response = "That's excellent! We love a team player!";
            } else if (answer.includes("extrovert")) {
                response = "That's excellent! We love a team player!";
            } else if (answer.includes("solo")) {
                response = "Hmm, I'm afraid you may have to work with others as part of our team.";
            } else if (answer.includes("alone")) {
                response = "I see, that's unfortunate.";
            } else if (answer.includes("introvert")) {
                response = "That's alright, so long as you can work well with others when you need to.";
            } else if (answer.includes("bad")) {
                response = "That might pose a problem.";
            } else if (answer.includes("good")) {
                response = "That's great. We've been told that a workplace such as ours can be stressful for those unfamiliar or... unfitting...";
            } else {
                response = responses[currentQuestionIndex];
            }
            document.getElementById("question").innerText = question;
            document.getElementById("answer").value = "";
            document.getElementById("questionImage").src = images[currentQuestionIndex];
            currentQuestionIndex++;
            speak(response);
        } else {
            alert("Interview is over. Thank you!");
        }
}
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
```
SO here is where the important bits are. First, I found the most generic interview questions out there that basically every interviewer would ask and made it so that they would appear after one another in order. I then added responses that would be heard rather than seen by users to occur after the questions. This is because I was going off of Ngai's aesthetic category of interesting (which I briefly describe in my Week 9 Homework post). To summarise, 'interesting' is something that stands out from the mundane and expected. In my case, the 'interesting' would be the sudden generic voice robotically speaking to the users when what is expected would just be for another line/answer to be read then responded to. I also added variations depending on certain words the user may have typed in. I tried to add some self-awareness to some responses to have it more 'interesting', such as the line about filling quotas (a reality in many places) as well as the shameless plug about this simulator.

I had originally also tried to include a function where the microphone of the user's device can pick up words and covert speech to text instead of the user having to manually type everything in. Unfortunately, that did not work, and nothing I looked up could tell me how to make it work with just JavaScript. I'm still mostly satisfied with my final work though.

## What I Would Have Liked

Even more responses for one, and questions. More variations on possible answers, unfortunately I can't predict them all and can only do some for several important buzzwords. I would have also liked to implement the speech to text function, as well as a camera function or something for users to practice maintaining eye contact with.
