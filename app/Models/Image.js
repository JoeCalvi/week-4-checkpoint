
export class Image {
    constructor(data) {
        this.img = data.largeImgUrl
        this.author = data.author
    }


    get ImageAuthorTemplate() {
        return /*html*/ `
        <p class="light selectable on-hover">Photo by ${this.author}</p>
        `
    }
}