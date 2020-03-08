export class Link {
    public id: number;
    public shortened: string;
    public clicks: number;
    public link: string;

    constructor(short: string, link: string) {
        this.id = +new Date();
        this.shortened = short
        this.clicks = 0
        this.link = link
    }
}