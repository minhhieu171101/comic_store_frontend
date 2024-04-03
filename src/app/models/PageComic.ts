import {ComicModel} from "./ComicModel";

export class PageComic {
    content: ComicModel[] | undefined;
    totalPages: number;
    totalElements: number;
    numberElements: number;
    size: number;
    empty: boolean;

    constructor() {
        this.content = undefined;
        this.totalPages = 0;
        this.totalElements = 0;
        this.numberElements = 0;
        this.size = 0;
        this.empty = true;
    }
}