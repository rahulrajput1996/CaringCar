
container = document.getElementById("container");
// console.log(container)

container.addEventListener("dblclick", function fun() {
    let audio = document.createElement('audio');
    audio.setAttribute('src', './race sound.mp3');
    audio.loop = true;
    audio.play()
    container.addEventListener("click", function fun() {

        audio.pause()

    })
});






