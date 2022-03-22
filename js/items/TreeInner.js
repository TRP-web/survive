class TreeInner {
    constructor(items) {
        this.items = items
        this.treeInner = []
        this.items.forEach(elem => {
            this.treeInner.push(new Tree(elem))
            console.log(this.treeInner)
        })
    }

    getObjectWithId(id) {
        let result
        this.treeInner.forEach((elem) => {
            if (elem.id = id) {
                result = elem
            }
        })
        return result
    }
}