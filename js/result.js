setTimeout(() => {
    window.scrollTo(20000, 20000)
}, 500);

const avatar = new Avatar(document.querySelector('.avatar'))

const trees = document.querySelectorAll(".wood")
const treeInner = new TreeInner(trees)

trees.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        console.log(treeInner.getObjectWithId(event.target.id))
        let tree = treeInner.getObjectWithId(event.target.id)
        if (avatar.distanceWithItem(tree.item).x < 200 && avatar.distanceWithItem(tree.item).y < 200) {
            tree.banch()
        } else {

        }
        
    })
})

avatar.item.addEventListener('go', () => {

})
