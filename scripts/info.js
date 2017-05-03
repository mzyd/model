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

addLoadEvent( setupEvent );
addLoadEvent( fillRoomNums );

function fillRoomNums() {

    var urls = window.location.href.split( '#' );
    var roomNum = urls[ urls.length - 1 ];

    // Don't display the local address when there is no parameter
    if ( urls.length > 1 ) {
        document.getElementById( 'target-ipt' ).value = roomNum;
    }
}

function setupEvent() {

    var doc = document;
    var btn = doc.getElementById( 'select-btn' );
    btn.addEventListener( 'click', enterBuilding );

}


function enterBuilding( e ) {

    var doc = document;
    var ipt = doc.getElementById( 'target-ipt' );

    window.location.assign( "building.html" );

}
