class Tree extends Cordinate {
    constructor(item) {
        super(item)
        this.item = item
        this.item.src = `items/tree${Math.round(Math.random() * 1 + 1)}.png`
        this.id = `tree${Math.round(Math.random() * 10000000000000)}`
        this.item.id = this.id
        this.getItemId = 1
    }

    banch() {
        this.item.classList.add('banch')
        setTimeout(() => {
        this.item.classList.remove('banch')
            
        }, 250)
    }
}