class Inventar {
    constructor(htmlInner) {
        this.htmlInner = htmlInner
        this._wood = 0
        this._stoun = 0
        this.reloadItems()        
    }
    
    reloadItems () {
        this.htmlInner.innerHTML = `
            <div class="item">
                wood: ${this._wood}
            </div>
            <div class="item">
                stoun: ${this._stoun}
            </div>
        `
    }

    plusWood() {
        this._wood++
        this.reloadItems()
    }
}