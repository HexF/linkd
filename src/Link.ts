import config from "./config.ts";

export class Link {
    public shortened: string;
    public clicks: number;
    public link: string;

    constructor(short: string, link: string) {
        this.shortened = short
        this.clicks = 0
        this.link = link
    }

    get fullLink(): string {
        return [config.url, this.shortened].join('/')
    }
}