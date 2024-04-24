---
title: Week 6 Homework
published_at: 2024-04-22
snippet: 3D examples
disable_html_sanitization: true
---


# Part 1: Tunnel

<div id="wall_invisibility"></div>

Code heavily inspired by [this codepen](https://codepen.io/boytchev/pen/xxMZzJx).

<script type="module">
   import * as THREE from "/script/threejs/three.js"
   import { OrbitControls } from "/script/threejs/OrbitControls.js"

   console.clear( );

var scene = new THREE.Scene();
    scene.background = new THREE.Color( 'gainsboro' );

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight );
    camera.position.set( 0, 0, 7 );
    camera.lookAt( scene.position );

var renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( innerWidth, innerHeight );
    renderer.setAnimationLoop( animationLoop );
    document.body.appendChild( renderer.domElement );
			
window.addEventListener( "resize", (event) => {
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix( );
    renderer.setSize( innerWidth, innerHeight );
});

var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;

var light = new THREE.DirectionalLight( 'white', 3 );
    light.position.set( 1, 1, 1 );
    scene.add( light );


class Platon extends THREE.Mesh
{
	constructor( radius, level )
	{
		// main shape
		super(
			new THREE.TetrahedronGeometry( 1, 1 ),
			new THREE.MeshStandardMaterial( {
				color: new THREE.Color(2, 1, 0),
				metalness: 0.47,
				roughness: 0.53,
				flatShading: true
			} )
		);

		// first subshape
		var platon1 = new THREE.Mesh(
				new THREE.TetrahedronGeometry( 1, 3 ),
				new THREE.MeshStandardMaterial( {
						color: new THREE.Color(2, 2, 2),
						metalness: 0.47,
						roughness: 0.53,
						flatShading: true
				} )
			 );
			platon1.scale.setScalar( 0.809 );
	
		// second subshape
		var platon2 = new THREE.Mesh(
				new THREE.OctahedronGeometry( 1, 4 ),
				new THREE.MeshStandardMaterial( {
						color: new THREE.Color(0.5, 0, 0),
						metalness: 0.47,
						roughness: 0.53,
						flatShading: true
				} )
			 );
			platon2.scale.setScalar( 0.709 );
	
		this.add( platon1, platon2 );
	} // Platon.constructor
} // Platon


var platon = new Platon();
		platon.scale.setScalar( 0.75 );
		scene.add( platon );

// next comment

var geometry = new THREE.BoxGeometry( 1.8, 1.8, 0.1 ),
		material = new THREE.MeshLambertMaterial( {color:'royalblue', transparent: true} );

var wall1 = new THREE.Mesh( geometry, material.clone() );
		wall1.position.z = 1;

var wall2 = new THREE.Mesh( geometry, material.clone() );
		wall2.rotation.y = Math.PI;		
		wall2.position.z = -1;

var wall3 = new THREE.Mesh( geometry, material.clone() );
		wall3.rotation.y = Math.PI/2;		
		wall3.position.x = 1;

var wall4 = new THREE.Mesh( geometry, material.clone() );
		wall4.rotation.y = -Math.PI/2;		
		wall4.position.x = -1;

var wall5 = new THREE.Mesh( geometry, material.clone() );
		wall5.rotation.x = Math.PI/2;		
		wall5.position.y = -1;

var wall6 = new THREE.Mesh( geometry, material.clone() );
		wall6.rotation.x = -Math.PI/2;		
		wall6.position.y = 1;

var walls = [wall1, wall2, wall3, wall4, wall5, wall6];

		scene.add( ...walls );


var v = new THREE.Vector3( ),
		u = new THREE.Vector3( );

function animationLoop( t )
{
		platon.rotation.set( t/600, t/700, t/800 );
    controls.update( );

		for( var wall of walls )
		{
				wall.getWorldDirection( v );
				camera.getWorldDirection( u );
			
				wall.material.opacity = 2*v.dot(u); 		// soft
				//wall.visible = v.dot(u) > 0; 					// hard
		}
	
		light.position.copy( camera.position );
    renderer.render( scene, camera );
}

</script>


# Part 2: Analyser

<div id="Sound"></div>

<script src="/script/c2.min.js"></script>
<script src="/script/p5.min.js"></script>

Code from [here](https://github.com/ren-yuan/c2.js/blob/main/examples/Analyser.js).

<script>

console.dir(p5)

//Created by Ren Yuan

let color1;
let color2;
let color3;

let analyser;
let audioIn;

function mousePressed() {
    if(typeof audioIn === 'undefined'){
        audioIn = new c2.AudioIn(function(){
            analyser = new c2.Analyser();
            analyser.analyze(audioIn);
        });
    }
}

/*
let sound;

function mousePressed() {
    if(typeof sound === 'undefined'){
        sound = new c2.Sound("sound.mp3", function(){
            sound.loop();
            sound.play();
            analyser = new c2.Analyser();
            analyser.output();
            analyser.analyze(sound);
        });
    }
}
*/

function setup() {
    createCanvas(960, 540);
    colorMode(HSL, 100);
    textSize(16);
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);

    color1 = color(random(0, 8), random(30, 60), random(20, 100));
    color2 = color(random(0, 8), random(30, 60), random(20, 100));
    color3 = color(random(0, 8), random(30, 60), random(20, 100));
}

function draw() {
    background('#cccccc');

    if(typeof analyser === 'undefined'){
        noStroke();
        fill('#333333');
        text('click to turn on microphone', width/2, height/2);
        return;
    }

    let rms = analyser.level();
    let timeDomain = analyser.timeDomain();
    let freqDomain = analyser.freqDomain();

    stroke('#333333');
    strokeWeight(1);

    fill(color1);
    let r = rms * width;
    circle(width/2, 0, r);

    fill(color2);
    beginShape();
    for(let i=0; i<timeDomain.length; i++){
        let x = map(i, 0, timeDomain.length, 0, width);
        let y = height/2 + timeDomain[i] * height/2;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    fill(color3);
    beginShape();
    for(let i=0; i<freqDomain.length; i++){
        let x = map(i, 0, freqDomain.length, 0, width);
        let y = height - freqDomain[i] * height/2;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

</script>