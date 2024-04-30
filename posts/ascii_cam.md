---
title: Ascii Cam
published_at: 2024-04-24
snippet: I don't like turning on my camera
disable_html_sanitization: true
---


<div id="ascii_div"></div>

<script type="module">

   // git camera stream, with options object   
   const stream = await navigator.mediaDevices.getUserMedia ({ 
      audio: false,
      video: true,
      facingMode: `user`,
   })

   // get video tracks
   const videoTracks = await stream.getVideoTracks ()
   console.log (`Using video device: ${ videoTracks[0].label }`)

   // make video html element
   const video = document.createElement (`video`)

   // assign stream to video source
   video.srcObject = stream
   await video.play ()

   // make canvas html element
   const cnv = document.createElement (`canvas`)

   // small size
   cnv.width  = 64

   // with aspect ratio from video html element
   cnv.height = cnv.width * video.videoHeight / video.videoWidth

   // grab the ascii div from DOM
   const div = document.getElementById (`ascii_div`)

   // set font to be monospace
   div.style.fontFamily = `monospace`

   // center aligned
   div.style.textAlign = `center`

   // get canvas context
   const ctx = cnv.getContext (`2d`)

   // string of characters from dark - bright
   const chars = "¶Ñ@%&∆∑∫#Wß¥$£√?!†§ºªµ¢çø∂æåπ*™≤≥≈∞~,.…_¬“‘˚`˙"

   // defining a function for animation
   const draw_frame = async () => {

      // tranformation save point
      ctx.save ()

      // flip horizontally
      ctx.scale (-1, 1)

      // draw image from video onto wrong side
      ctx.drawImage (video, -cnv.width, 0, cnv.width, cnv.height)

      // flip back
      ctx.restore ()

      // get pixel data
      const pixels = await ctx.getImageData (0, 0, cnv.width, cnv.height).data

      // start empty ascii string
      let ascii_img = ``


      for (let y = 0; y < cnv.height; y += 2) {
         for (let x = 0; x < cnv.width; x++) {

            // get pixel position
            const i = (y * cnv.width + x) * 4

            // get rgb values
            const r = pixels[i]
            const g = pixels[i + 1]
            const b = pixels[i + 2]

            // calculate brightness
            const br = (r * g * b / 16581376) ** 0.1

            // use brightness to select character
            const char_i = Math.floor (br * chars.length)

            // add character to ascii string
            ascii_img += chars[char_i]
         }

         // new line 
         ascii_img += `\n`
      }

      // add ascii string to innerText of div
      div.innerText = ascii_img

      // wait and then call next frame
      requestAnimationFrame (draw_frame)
   }

   // start recursive animation
   draw_frame ()
</script>

```html
<script type="module">

    // Get camera stream, with options object
    const stream = await navigator.mediaDevices.getUserMedia ({ 
        audio: false,
        video: true,
        facingMode: `user`,
    })

    // Get video tracks
    const videoTracks = await stream.getVideoTracks ()
    console.log (`Using video device: ${ videoTracks[0].label }`)

    // Make video html element
    const video = document.createElement (`video`)

    // Assign stream to video source
    video.srcObject = stream
    await video.play ()

    // Make canvas html element
    const cnv = document.createElement (`canvas`)

    // Small size
    cnv.width  = 64

    // With aspect ratio from video element
    cnv.height = cnv.width * video.videoHeight / video.videoWidth

    // grab the ascii div from DOM
    const div = document.getElementById (`ascii_div`)

    // Set font to be monospace
    div.style.fontFamily = `monospace`

    // Center aligned
    div.style.textAlign = `center`

    // Get canvas context
    const ctx = cnv.getContext (`2d`)

    // String of characters from darkest to brightest
    const chars = "¶Ñ@%&∆∑∫#Wß¥$£√?!†§ºªµ¢çø∂æåπ*™≤≥≈∞~,.…_¬“‘˚`˙"

    // Defining a function for animation
    const draw_frame = async () => {

        // Transformation save point
        ctx.save ()

        // Flip horizontally
        ctx.scale (-1, 1)

        // Draw image from video onto wrong side
        ctx.drawImage (video, -cnv.width, 0, cnv.width, cnv.height)

        // Flip back
        ctx.restore ()

        // Get pixel data
        const pixels = await ctx.getImageData (0, 0, cnv.width, cnv.height).data

        // Start empty string
        let ascii_img = ``


        for (let y = 0; y < cnv.height; y += 2) {
            for (let x = 0; x < cnv.width; x++) {

                // Get pixel position
                const i = (y * cnv.width + x) * 4

                // Get RGB values
                const r = pixels[i]
                const g = pixels[i + 1]
                const b = pixels[i + 2]

                // Calculate brightness
                const br = (r * g * b / 16581376) ** 0.1

                // Use brightness to slect character
                const char_i = Math.floor (br * chars.length)

                // Add character to ascii string
                ascii_img += chars[char_i]
            }

            // New line
            ascii_img += `\n`
        }

        // Add ascii string to innerText of div
        div.innerText = ascii_img

        // Wait and then call next frame
        requestAnimationFrame (draw_frame)
    }

    Start recursive animation
    draw_frame ()
</script>
```