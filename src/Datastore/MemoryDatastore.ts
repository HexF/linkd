import { IDatastore } from "./IDatastore.ts";
import { Link } from "../Link.ts";


export class MemoryDatastore implements IDatastore {
    static db: Link[] = new Array<Link>();

    addLink(link: Link): Promise<void> {
        return new Promise((resolve, reject) => {
            

            let existing = MemoryDatastore.db.find((v) => v.shortened == link.shortened)
            if (existing) reject(`Conflicting link (shortened: ${existing.shortened})`)

            MemoryDatastore.db.push(link)

            resolve()
        })
    }
    getLinkByShortened(shortened: string): Promise<Link> {
        return new Promise((resolve, reject) => {
            let link = MemoryDatastore.db.find((v) => v.shortened == shortened)
            if (link) resolve(link)
            else reject("Link not found")
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