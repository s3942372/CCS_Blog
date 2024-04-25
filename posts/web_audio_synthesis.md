---
title: Web Audio API Synthesis
published_at: 2024-04-24
snippet: I don't like turning on my microphone either
disable_html_sanitization: true
---


<div id='resume_audio'></div>

<script>
    // get and format div element
    const div_0  = document.getElementById ('resume_audio')
    div_0.width  = div_0.parentNode.scrollWidth
    div_0.style.height     = `${ div_0.width * 9 / 16 }px`
    div_0.style.textAlign  = 'center'
    div_0.style.lineHeight = div_0.style.height
    div_0.style.fontSize   = '36px'
    div_0.style.fontWeight = 'bold'
    div_0.style.fontStyle  = 'italic'
    div_0.style.color      = 'white'
    div_0.style.backgroundColor = 'hotpink'

    // get and suspend audio context
    const audio_context = new AudioContext ()
    audio_context.suspend ()

    // create string with context state
    const init_msg = `audio context is ${ audio_context.state }`

    // convert string to uppercase and pass to div element
    div_0.innerText = init_msg.toUpperCase ()

    // define an async click handler function 
    async function init_audio () {

        // wait for audio context to resume
        await audio_context.resume ()

        // then set background colour
        div_0.style.backgroundColor = 'limegreen'

        // create string with new context state
        const msg = `audio context is ${ audio_context.state }`

        // unitalicise text style
        div_0.style.fontStyle  = 'normal'

        // convert to uppercase and pass to div element
        div_0.innerText = msg.toUpperCase ()
    }

    // pass anonymous function to the .onclick property
    // of the div element
    div_0.onclick = _ => {

        // if audio context is not running
        if (audio_context.state != 'running') {
            
            // call the async init audio function
            init_audio ()
        }
    }
</script>
