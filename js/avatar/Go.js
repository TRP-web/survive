class Go extends Cordinate{
    constructor(item) {
        super(item)
        this.item = item
        this.item.style.left = `${window.outerWidth / 2 - this.item.offsetWidth / 2}px`
        this.item.style.top = `${window.outerHeight / 2 - this.item.offsetHeight / 2}px`
        this.goRightInterval = false
        this.goLeftInterval = false
        this.goTopInterval = false
        this.goBottomInterval = false

    }

    goRight(type) {
        if (type === "add" && this.goRightInterval === false) {
            this.goRightInterval = setInterval(() => {

                let number = Number(this.item.style.left.replace(/px/, '')) + 2
                if (number >= 0) {
                    let newLeft = `${number}px`
                    this.item.style.left = newLeft
                    window.scrollTo(Math.round(window.scrollX + 2), window.scrollY)
                }

                this.item.dispatchEvent(new CustomEvent("go", {
                    cancelable: true,
                }))

            }, 40);
        } else if (type === "remove" && this.goRightInterval !== false) {
            clearInterval(this.goRightInterval)
            this.goRightInterval = false
        }
    }

    goLeft(type) {
        if (type === "add" && this.goLeftInterval === false) {
            this.goLeftInterval = setInterval(() => {
                let number = Number(this.item.style.left.replace(/px/, '')) - 2
                if (number >= 0) {
                    let newLeft = `${number}px`
                    this.item.style.left = newLeft
                    window.scrollTo(Math.round(window.scrollX - 2), window.scrollY)
                }

                this.item.dispatchEvent(new CustomEvent("go", {
                    cancelable: true,
                }))

            }, 40);
        } else if (type === "remove" && this.goLeftInterval !== false) {
            clearInterval(this.goLeftInterval)
            this.goLeftInterval = false
        }

    }

    goTop(type) {
        if (type === "add" && this.goTopInterval === false) {
            this.goTopInterval = setInterval(() => {
                let number = Number(this.item.style.top.replace(/px/, '')) - 2
                if (number >= 0) {
                    let newTop = `${number}px`
                    this.item.style.top = newTop
                    window.scrollTo(window.scrollX, Math.round(window.scrollY - 2))
                }

                this.item.dispatchEvent(new CustomEvent("go", {
                    cancelable: true,
                }))

                if (this.top) {
                    this.top('add')
                }
            }, 40);
        } else if (type === "remove" && this.goTopInterval !== false) {
            clearInterval(this.goTopInterval)
            this.goTopInterval = false
        }

    }

    goBottom(type) {
        if (type === "add" && this.goBottomInterval === false) {
            this.goBottomInterval = setInterval(() => {
                let number = Number(this.item.style.top.replace(/px/, '')) + 2
                if (number >= 0) {
                    let newTop = `${number}px`
                    this.item.style.top = newTop
                    window.scrollTo(window.scrollX, Math.round(window.scrollY + 2))
                }

                this.item.dispatchEvent(new CustomEvent("go", {
                    cancelable: true,
                }))

                if (this.bottom) {
                    this.bottom('add')
                }
            }, 40);
        } else if (type === "remove" && this.goBottomInterval !== false) {
            clearInterval(this.goBottomInterval)
            this.goBottomInterval = false
        }

    }
}