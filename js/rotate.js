(function(){
    'use strict';
    var picture = document.getElementById('picture');
    var deg = 0;
    function rotatePicture() {
        deg = deg + 2;
        picture.style.transform = 'rotateY(' + deg +  'deg)';
    }
    setInterval(rotatePicture, 20);
})();