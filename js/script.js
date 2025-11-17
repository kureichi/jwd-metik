// Make intersection buat listen klo container ada di screen
const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry)

            // klo ada di screen, kasih class show buat nampilin
            entry.target.classList.add('show')
        } else {
            // klo gk ada di screen, remove class show
            entry.target.classList.remove('show')
        }
    })
}, {});

const containers = document.querySelectorAll('.container')

containers.forEach(container => obs.observe(container))
const footer = document.getElementById('footer')

obs.observe(document.getElementById('container-welcome'))
obs.observe(footer)

// Buat hover video, video bakalan play klo mouse nyentuh doang
const videos = document.querySelectorAll('.video')
videos.forEach(video => {
    video.pause()

    video.addEventListener('mouseenter', () => {
        video.play()
    })

    video.addEventListener('mouseleave', () => {
        video.pause()
    })
})