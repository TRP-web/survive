setTimeout(() => {
    window.scrollTo(20000, 20000)
}, 500);

class Avatar extends DocumentListener {
    constructor(item) {
        super(item)
    }
}

new Avatar(document.querySelector('.avatar'))

document.addEventListener('keypress', (event) => {
    console.log("test")
})