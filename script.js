function playVideo(videoId) {
  const player = document.getElementById("videoPlayer");
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
}
