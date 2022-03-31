class TreeInner {
    constructor(maxTree) {
        this.maxTree = maxTree
        this.treeInner = []
        for (let index = 1; index < this.maxTree; index++) {
            let newTree = document.createElement("img")
            newTree.className = "wood"
            document.querySelector('.container').prepend(newTree)
            this.treeInner.push(new Tree(newTree))
        }


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