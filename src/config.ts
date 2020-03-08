import { MemoryDatastore } from "./Datastore/MemoryDatastore.ts";
import { RedisDatastore } from "./Datastore/RedisDatastore.ts";
import { IDatastore } from "./Datastore/IDatastore.ts"



let config = {
    url: 'http://localhost:1336',
    datastore: new MemoryDatastore()
}

let datastore = 'REDIS'

switch (datastore){
    case 'REDIS':
        config.datastore = new RedisDatastore()
        break
    default: 
    case 'MEMORY':
        config.datastore = new MemoryDatastore()
        break
}

if(config.url.endsWith('/'))
    config.url = config.url.slice(-1)


export default config