
window.addEventListener('load', () => {
    console.log("load")
    window.scrollTo(20000, 20000)

})

setTimeout(() => {
    window.scrollTo(20000, 20000)
    
}, 1000);

const avatar = new Avatar(document.querySelector('.avatar'))

const trees = document.querySelectorAll(".wood")
const treeInner = new TreeInner(1000)
const inventar = new Inventar(document.querySelector('.inventar'))

treeInner.treeInner.forEach((elem) => {
    elem.addEventListener('click-tree', (event) => {
        console.log(event.target)
        if (avatar.distanceWithItem(event.target.item).x < 200 && avatar.distanceWithItem(event.target.item).y < 200) {
            let getItem = event.target.banch()
            inventar.plusWood()
            console.log(getItem)
        } else {
            
        }
    })
})

avatar.item.addEventListener('go', () => {

})


class Test extends EventTarget {
    constructor(test) {
        super()
        this.test = test
        setTimeout(() => {
            this.dispatchEvent(new CustomEvent("test-listener", {
                cancelable: true,
            }))
        }, 1000);
    }
}

const test = new Test(23)

console.log(test)

test.addEventListener('test-listener', () => {
    console.log("test event")
})

