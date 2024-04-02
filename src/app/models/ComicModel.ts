export class ComicModel {
    id: number | null 
    comicName: string | null 
    authorName: string | null 
    contents: string | null 
    price: number | null 
    sale: number | null 
    residualQuantity: number | null 
    imgComic: string | null 
    
    constructor() {
        this.id = null;
        this.comicName = null;
        this.authorName = null;
        this.contents = null;
        this.price = null;
        this.sale = null;
        this.residualQuantity = null;
        this.imgComic = null;
    }
}