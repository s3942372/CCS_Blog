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