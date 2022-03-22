class DocumentListener extends Animation {
    constructor(item) {
        super(item)
        this.item = item
        document.addEventListener('keydown', (event) => {
            this.item
            switch (event.key) {
                case "ArrowRight":
                    event.preventDefault()
                    this.goRight('add')
                    this.rotate('avatar-med/avatarRight.png')
                    this.right('add')
                    this.goListener()
                    break
                case "ArrowLeft":
                    event.preventDefault()
                    this.goLeft('add')
                    this.rotate('avatar-med/avatarLeft.png')
                    this.left('add')
                    this.goListener()
                    break
                case "ArrowUp":
                    event.preventDefault()
                    this.goTop('add')
                    this.rotate('avatar-med/avatarBack.png')
                    this.goListener()
                    break
                case "ArrowDown":
                    event.preventDefault()
                    this.goBottom('add')
                    this.rotate('avatar-med/avatar.png')
                    this.bottom('add')
                    console.log('down')
                    this.goListener()
                    break
            }
        })
        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case "ArrowRight":
                    this.goRight('remove')
                    this.right('remove')
                    break
                case "ArrowLeft":
                    this.goLeft('remove')
                    this.left('remove')
                    break
                case "ArrowUp":
                    this.goTop('remove')
                    this.top('remove')
                    break
                case "ArrowDown":
                    this.goBottom('remove')
                    this.bottom('remove')
                    break
            }
        })
    }

    goListener() {
        if (this.goLeftInterval !== false ||
            this.goRightInterval !== false ||
            this.goTopInterval !== false ||
            this.goBottomInterval !== false) {
            
        }
        if (this.goLeftInterval !== false && this.goBottomInterval !== false) {
            this.item.dispatchEvent(new CustomEvent("goLeftBottom", {
                cancelable: true,
                detail: [
                    this.goLeftInterval,
                    this.goRightInterval,
                    this.goTopInterval,
                    this.goBottomInterval,
                ]
            }))
        } else if (this.goLeftInterval !== false && this.goTopInterval !== false) {
            this.item.dispatchEvent(new CustomEvent("goLeftTop", {
                cancelable: true,
                detail: [
                    this.goLeftInterval,
                    this.goRightInterval,
                    this.goTopInterval,
                    this.goBottomInterval,
                ]
            }))
        }
    }
}