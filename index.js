// Add an eventlisterner for the open-curtain button
// When clicked, move the img1 to the left and img2 to the right so they come off the screen

const loadAudio = () => {
  const audio = new Audio('song.mp3')
  audio.play()
}

window.addEventListener('load', function () {
  const openCurtainButton = document.getElementById('open-curtain')
  const openButton = document.getElementById('open-curtain')
  const img1 = document.getElementById('img1')
  const img2 = document.getElementById('img2')

  // On click , change the animation state to animate once
  openCurtainButton.addEventListener('click', function () {
    img1.style.animation = 'moveCurtainLeft 2s forwards'
    img2.style.animation = 'moveCurtainRight 2s forwards'
    // Hide the open button
    openButton.style.display = 'none'

    // Load the auto after the curtain is opened
    setTimeout(loadAudio, 100)
  })
})
