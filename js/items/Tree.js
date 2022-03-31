class Tree extends Cordinate {
    constructor(item) {
        super(item)
        this.item = item
        this.item.src = `items/tree${Math.round(Math.random() * 1 + 1)}.png`
        this.item.style.left = `${Math.round(Math.random() * 10000)}px`
        this.item.style.top = `${Math.round(Math.random() * 10000)}px`
        // console.log(Math.round(this.getCordinat().y), Math.round(this.item.offsetHeight))
        this.id = `tree${Math.round(Math.random() * 10000000000000)}`
        this.item.id = this.id
        this.getItemId = 1
        window.addEventListener('load', () => {
        // console.log(Math.round(this.getCordinat().y), Math.round(this.item.offsetHeight))
            this.item.style.zIndex = `${Math.round(this.getCordinat().y) + Math.round(this.item.offsetHeight)}`
        })
        this.item.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent("click-tree", {
                cancelable: true,
            }))
        })
    }

    banch() {
        this.item.classList.add('banch')
        setTimeout(() => {
            this.item.classList.remove('banch')
        }, 250)
        return this.getItemId
    }
}