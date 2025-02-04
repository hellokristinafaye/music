var mySong = document.getElementById('mySong');
var icon = document.getElementById('icon');

icon.onclick = function () {
    // mySong.play();
    if (mySong.paused) {
        mySong.play();
        icon.src = "assets/images/pause.png";
    } else {
        mySong.pause();
        icon.src = "assets/images/play.png";
    }
};