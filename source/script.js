const toggleButton = document.getElementsByClassName('toggle-button')[0]
const wrapperLinks = document.getElementsByClassName('wrapper-links')[0]

toggleButton.addEventListener('click', () => {
    wrapperLinks.classList.toggle('active')
})