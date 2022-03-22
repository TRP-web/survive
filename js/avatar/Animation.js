class Animation extends Rotate {
    constructor(item) {
        super(item)
        this.item = item
        this.rightInterval = false
        this.leftInterval = false
        this.topInterval = false
        this.bottomInterval = false
        console.log(this)
        this.item.addEventListener('goLeftBottom', (event) => {
            this.bottom('remove')
            this.left('add')
        })
        this.item.addEventListener('goLeftTop', (event) => {
            this.top('remove')
            this.left('add')
        })
    }

    right(type) {
        if (type === "add" && this.whyIs()) {
            let animationNumber
            let animationArray = [
                'avatar-med/avatarGoRight1.png',
                "avatar-med/avatarRight.png",
                "avatar-med/avatarGoRight2.png",
                "avatar-med/avatarRight.png",
            ]
            this.rightInterval = setInterval(() => {
                animationNumber = this.generaitAnimationNumber(animationNumber, animationArray.length - 1)
                this.animationProgres(animationArray, animationNumber)
            }, 250);
        } else if (type === "remove" && this.rightInterval !== false) {
            clearInterval(this.rightInterval)
            this.rightInterval = false
            this.pushSrc(this.stopSrc)
        }
    }

    left(type) {
        if (type === "add" && this.whyIs()) {
            let animationNumber
            let animationArray = [
                "avatar-med/avatarGoLeft1.png",
                "avatar-med/avatarLeft.png",
                "avatar-med/avatarGoLeft2.png",
                "avatar-med/avatarLeft.png",

            ]
            this.leftInterval = setInterval(() => {
                animationNumber = this.generaitAnimationNumber(animationNumber, animationArray.length - 1)
                this.animationProgres(animationArray, animationNumber)
                console.log("test")
            }, 250);
        } else if (type === "remove" && this.leftInterval !== false) {
            clearInterval(this.leftInterval)
            this.leftInterval = false
            this.pushSrc(this.stopSrc)
        }
    }

    bottom(type) {
        if (type === "add" && this.whyIs()) {
            let animationNumber
            let animationArray = [
                'avatar-med/avatarGo1.png',
                "avatar-med/avatar.png",
                "avatar-med/avatarGo2.png",
                "avatar-med/avatar.png",
            ]
            this.bottomInterval = setInterval(() => {
                animationNumber = this.generaitAnimationNumber(animationNumber, animationArray.length - 1)
                this.animationProgres(animationArray, animationNumber)
            }, 250);
        } else if (type === "remove" && this.bottomInterval !== false) {
            clearInterval(this.bottomInterval)
            this.bottomInterval = false
            this.pushSrc(this.stopSrc)
        }
    }

    top(type) {
        if (type === "add" && this.whyIs()) {
            let animationNumber
            let animationArray = [
                'avatar-med/avatarGoBack1.png',
                "avatar-med/avatarBack.png",
                "avatar-med/avatarGoBack2.png",
                "avatar-med/avatarBack.png",

            ]
            this.bottomInterval = setInterval(() => {
                animationNumber = this.generaitAnimationNumber(animationNumber, animationArray.length - 1)
                this.animationProgres(animationArray, animationNumber)
            }, 250);
        } else if (type === "remove" && this.bottomInterval !== false) {
            clearInterval(this.bottomInterval)
            this.bottomInterval = false
            this.pushSrc(this.stopSrc)
        }
    }

    generaitAnimationNumber(befforNumber, max) {
        if (befforNumber === undefined) {
            return 0
        } else if (befforNumber !== undefined && befforNumber !== max) {
            return befforNumber + 1
        } else {
            return 0
        }
    }

    animationProgres(animationImgLinks, number) {
        let imgLink = animationImgLinks[number]
        this.pushSrc(imgLink)
    }

    whyIs(name) {
        if (this.rightInterval === false &&
            this.leftInterval === false &&
            this.topInterval === false &&
            this.bottomInterval === false) {
                return true
        } else {
            return false
        }
    }
}