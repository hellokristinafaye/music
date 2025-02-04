var mySong = document.getElementById('mySong');
var icon = document.getElementById('icon');

icon.onclick = function () {
    if (mySong.paused) {
        mySong.onplay();
        icon.src = "assets/images/pause.png";
    } else {
        mySong.pause();
        icon.src = "assets/images/play.png";
    }
};
