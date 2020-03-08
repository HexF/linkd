import { MemoryDatastore } from "./Datastore/MemoryDatastore.ts";

let config = {
    datastore: new MemoryDatastore(),
    url: 'http://localhost:1336'
}

if(config.url.endsWith('/'))
    config.url = config.url.slice(-1)


export default config