class Cordinate {
    constructor(item) {
        // super(item)
        this.item = item
        this.x = this.item.getBoundingClientRect().left + window.pageXOffset
        this.y = this.item.getBoundingClientRect().top + window.pageYOffset
    }
    getCordinat() {
        return {
            x: this.item.getBoundingClientRect().left + window.pageXOffset + this.item.offsetWidth / 2,
            y: this.item.getBoundingClientRect().top + window.pageYOffset + this.item.offsetHeight / 2
        }
    }
    
    distanceWithItem(externalItem) {
        let distance
        let cordinateItem = this.getCordinatExternalItem(externalItem)
        distance = {
            x: Math.abs(this.getCordinat().x - cordinateItem.x),
            y: Math.abs(this.getCordinat().y - cordinateItem.y)
        }
        return distance
    }

    getCordinatExternalItem(externalItem) {
        return {
            x: externalItem.getBoundingClientRect().left + window.pageXOffset + externalItem.offsetWidth / 2,
            y: externalItem.getBoundingClientRect().top + window.pageYOffset + externalItem.offsetHeight / 2
        }
    }
}