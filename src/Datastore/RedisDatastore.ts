import { IDatastore } from "./IDatastore.ts";
import { Link } from "../Link.ts";

import {connect} from '../deps.ts'

export class RedisDatastore implements IDatastore {
    private redis: any
    private prefixes = {
        link: 'l',
        clicks: 'c'
    }

    private async mkLink(shortened: string): Promise<Link> {
        let link = await this.redis.get(this.prefixes.link + shortened)
        let clicks = await this.redis.get(this.prefixes.clicks + shortened)
        clicks = parseInt(clicks)
        return new Promise((resolve,reject)=>{
            
            if(link != null && clicks != null)
                resolve(new Link(shortened, link, clicks))
            else
                reject("Link not found - " + shortened)
        })
    }

    constructor(hostname:string = "127.0.0.1", port:number = 6379 ){
        connect({hostname,port}).then((redis)=>{
            this.redis = redis
        })
    }
    addLink(link: Link): Promise<void> {
        return new Promise(async (resolve, reject) =>{
            let existing = await this.redis.get(this.prefixes.link + link.shortened)
            if(existing) reject(`Conflicting link (shortened: ${existing.shortened})`)

            await Promise.all([
                this.redis.set(this.prefixes.clicks + link.shortened, link.clicks),
                this.redis.set(this.prefixes.link + link.shortened, link.link)
            ])
            resolve()
        })

    }
    getLinkByShortened(shortened: string): Promise<Link> {
        return this.mkLink(shortened)
        
    }
    getLinks(): Promise<Link[]> {
        return new Promise(async (resolve, reject) =>{
            let links = await this.redis.keys(this.prefixes.link + "*")
            
            let linkPromices = links.map((l:string) : Promise<Link>=> {
                return this.mkLink(l.slice(1))
            })
            
            let l: Link[] = await Promise.all(linkPromices)
            resolve(l)
        })
    }
    trackClick(link: Link): Promise<void> {
        return new Promise(async (resolve, reject) =>{
            await this.redis.set(this.prefixes.clicks + link.shortened, link.clicks+1)
            resolve()
        })
    }

    
}