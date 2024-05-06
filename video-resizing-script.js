function adjustVideoSize() {
  var video1 = document.getElementById('clock-video-container');
  var video2 = document.getElementById('roads-background-div');
  var video3 = document.getElementById('attention-video-container');
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var viewportAspectRatio = viewportWidth / viewportHeight;
  var videoAspectRatio = 16 / 9; // YouTube's default aspect ratio
  if(viewportAspectRatio > videoAspectRatio) {
    // Screen is wider than the video, adjust video height
    video1.style.width = '100vw';
    video1.style.height = (viewportWidth / videoAspectRatio) + 'px';
    video2.style.width = '100vw';
    video2.style.height = (viewportWidth / videoAspectRatio) + 'px';
    video3.style.width = '100vw';
    video3.style.height = (viewportWidth / videoAspectRatio) + 'px';
  } else {
    // Screen is taller than the video, adjust video width
    video1.style.height = '100vh';
    video1.style.width = (viewportHeight * videoAspectRatio) + 'px';
    video2.style.height = '100vh';
    video2.style.width = (viewportHeight * videoAspectRatio) + 'px';
    video3.style.height = '100vh';
    video3.style.width = (viewportHeight * videoAspectRatio) + 'px';
  }
}
window.addEventListener('resize', adjustVideoSize);
window.addEventListener('load', adjustVideoSize);

