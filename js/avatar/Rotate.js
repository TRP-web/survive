class Rotate extends Go {
    constructor(item) {
        super(item)
        this.item = item
        this.stopSrc = 'avatar-med/avatar.png'
        this.item.src = 'avatar-med/avatar.png'
    }

    pushSrc(link) {
        this.item.src = link
    }

    rotate(link) {
        if (this.stopSrc !== link) {
            this.stopSrc = link
            this.pushSrc(this.stopSrc)
        }
    }
}