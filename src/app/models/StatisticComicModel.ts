export class StatisticComicModel {
    comicTypeName: string | null;
    totalSold: number;
    totalIncome: number;

    constructor() {
        this.comicTypeName = null;
        this.totalSold = 0;
        this.totalIncome = 0;
    }
}