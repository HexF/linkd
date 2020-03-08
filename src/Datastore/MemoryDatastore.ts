import { IDatastore } from "./IDatastore.ts";
import { Link } from "../Link.ts";


export class MemoryDatastore implements IDatastore {
    static db: Link[] = new Array<Link>();

    addLink(link: Link): Promise<void> {
        return new Promise((resolve, reject) => {
            MemoryDatastore.db.push(link)
            resolve()
        })
    }
    getLinkByShortened(shortened: string): Promise<Link> {
        return new Promise((resolve, reject) => {
            resolve(MemoryDatastore.db.find((v) => v.shortened == shortened))
        })
    }
    getLinkById(id: number): Promise<Link> {
        return new Promise((resolve, reject) => {
            resolve(MemoryDatastore.db.find((v) => v.id == id))
        })
    }
    getLinks(): Promise<Array<Link>> {
        return new Promise((resolve, reject) => {
            resolve(MemoryDatastore.db)
        })
    }

    trackClick(link: Link): Promise<void> {
        return new Promise((resolve, reject) => {
            link.clicks++;
            resolve()
        })
    }


}