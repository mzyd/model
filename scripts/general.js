function addLoadEvent( func ) {

    var oldonload = window.onload;

    if ( typeof window.onload != 'function' ) {

        window.onload = func;

    } else {

        window.onload = function () {
            oldonload();
            func();
        };
    }
}

var scene, camera, renderer;

var controls;

var walls = new Array( 80 );

var elems = [];

var targets = { building: [] };

// storage 3d object
var objects = [];

var t = THREE;

var floorScale = 0.12;
var elemW = w() * 0.6 + "px";
var elemH = parseInt( elemW ) * floorScale + 'px';
var elemY = - ( window.innerHeight * 0.2 );
var floor = 1;
var timer;

addLoadEvent( setupThree );
addLoadEvent( initControls );
addLoadEvent( animate );
addLoadEvent( createBuilding );
addLoadEvent( setupEvent );

function setupEvent() {

    var doc = document;

    doc.getElementById( 'content' ).addEventListener( 'click', clickContent);

    doc.getElementById( 'tips' ).addEventListener( 'click', clickTips, true );
}

function clickTips( e ) {

    e.cancelBubble = true;

}

function clickContent( e ) {

    this.style.display = 'none';
}

function createBuilding() {

    for (var i = 0; i < walls.length; i += 4 ) {

        createElement();

        elemY += parseInt( elemH );

        floor++;
    }

    transform( targets.building, 0 );

}


function createElement() {

    var elemX, bg, element;
    var scaleOfOne  = 3.44;
    var heightOfOne = parseInt( elemW ) / scaleOfOne + 'px';

    element = createWall( elemH, bg );
    elemX   = parseInt( element.style.width ) * 0.5;

    for (var i = 0; i < 4; i++) {

        if ( floor == 1 ) {

            if ( i == 0 ) {
                bg = "url(images/front1.jpg)";
                element = createWall( heightOfOne, bg );
            }
            if ( i == 1 ) {
                bg = "url(images/back1.jpg)";
                element = createWall( heightOfOne, bg );
            }
            if ( i == 2 || i == 3 ) {
                bg = "url(images/side1.jpg)";
                element = createWall( heightOfOne, bg );
            }
        }

        // if ( floor != 1 &&  floor != 19 && i != 18 ) {
        if ( floor != 1 &&  floor != 20 && i != 19 ) {

            if ( i == 0 || i == 1 ) {
                bg = "url(images/front.jpg)";
                element = createWall( elemH, bg );
                // element.style.display = 'none';
            }
            if ( i == 2 || i == 3 ) {
                bg = "url(images/side.jpg)";
                element = createWall( elemH, bg );
            }
        }

        // if ( floor == 18 ) {
        if ( floor == 19 ) {

            if ( i == 0 || i == 1 ) {
                bg = "url(images/18f.jpg)";
                element = createWall( elemH, bg );
            }
            if ( i == 2 || i == 3 ) {
                bg = "url(images/18s.jpg)";
                element = createWall( elemH, bg );
            }
        }

        // if ( floor == 19 ) {
        if ( floor == 20 ) {

            element.innerHTML = '';

            if ( i == 0 || i == 1 ) {
                bg = "url(images/19f.png)";
                element = createWall( elemH, bg );
            }
            if ( i == 2 || i == 3 ) {
                bg = "url(images/19s.png)";
                element = createWall( elemH, bg );
            }
            // element.addEventListener( 'click', clickTop );
        }

        if ( floor != 20 ) {
            element.innerHTML = floor + ' F';
        }
        element.value     = floor;
        element.room      = plans[ floor - 1 ];

        elems.push( element );

        createObject3d( element );

        var object = new t.Object3D();

        switch(i) {

        case 0:
            object.position.set( 0, elemY, elemX );
            break;

        case 1:
            object.position.set( 0, elemY, -elemX );
            object.rotation.y = getDegree( 180 );
            break;

        case 2:
            object.position.set( -elemX, elemY, 0 );
            object.rotation.y = -( getDegree( 90 ) );
            break;

        case 3:
            object.position.set( elemX, elemY, 0 );
            object.rotation.y = getDegree( 90 );
            break;
        }

        if ( floor == 1 ) {
            object.position.y = elemY - ( parseInt( elemH ) * 0.7 );
        }

        targets.building.push( object );
    }
}

function createObject3d( element ) {

    var object = new t.CSS3DObject( element );
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add( object );

    objects.push( object );

}

function createWall( height, bg ) {

    var element = document.createElement( 'div' );
    element.className    = 'wall';
    element.style.width  = elemW;
    element.style.height = height;

    element.style.backgroundImage = bg;
    element.style.backgroundSize  = "100%, 100%";

    // element.onclick = clickCover;
    element.addEventListener( 'click', clickCover, true );

    return element;

}

function clickCover() {

    if ( !this.room ) return;

    var doc = document;
    var content = doc.getElementById( 'content' );
    content.style.width  = window.innerWidth + 'px';
    content.style.height = window.innerHeight + 'px';
    content.style.display = 'block';

    var elems = doc.getElementsByClassName( 'top-elem' );
    setupElemClick.call( this, elems, 0 );

    elems = doc.getElementsByClassName( 'left-elem' );
    setupElemClick.call( this, elems, 1 );

    elems = doc.getElementsByClassName( 'right-elem' );
    setupElemClick.call( this, elems, 2 );

    elems = doc.getElementsByClassName( 'bottom-elem' );
    setupElemClick.call( this, elems, 3 );

}

function setupElemClick( elems, planIndex ) {

    for ( i = 0; i < elems.length; i++ ) {

        var roomNum = this.room.plan[ planIndex ].backNum[i];

        elems[i].innerHTML = this.room.plan[ planIndex ].rooms[i];
        elems[i].roomNum = roomNum;
        elems[i].style.backgroundColor = this.room.plan[ planIndex ].color[i];
        elems[i].addEventListener( 'click', clickRoom, true );

    }
}

function clickRoom( e ) {

    e.cancelBubble = true;

    var roomNum = parseInt( this.roomNum );

    if ( !isNaN( roomNum ) ) {

        clearTimeout( timer );
        location.href = 'http://192.168.1.124:8080/building/index.html' + '#' + this.roomNum;
    } else {

        var tip = document.getElementById( 'tips' );
        tip.style.display = 'block';

        timer = setTimeout( function () {
            tip.style.display = 'none';

        }, 1000 );
    }
}

function initControls() {

    controls = new t.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 0.5;
    // Set the minDistance is 500, just do it.
    controls.minDistance = 500;
    controls.maxDistance = 10000;

    controls.addEventListener( 'change', render );

}

function transform( targets, duration ) {

    TWEEN.removeAll();

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = objects[ i ];
        var target = targets[ i ];

        new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z },
                 Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

        new TWEEN.Tween( object.rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },
                 Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();

}

function setupThree() {

    scene = new t.Scene();
    camera = new t.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 1, 5000 );
    camera.position.z = 1100;
    scene.add( camera );

    renderer = new t.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor = 0xf8f8f8;
    document.getElementById( 'container' ).appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    render();

}

function animate() {

    requestAnimationFrame( animate );

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render( scene, camera );

}

function w() {

    return window.innerWidth;

}

function h() {

    return window.innerHeight;

}

function getDegree( degree ) {

    return degree * Math.PI * 2 / 360;

}
