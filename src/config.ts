import { MemoryDatastore } from "./Datastore/MemoryDatastore.ts";
import { RedisDatastore } from "./Datastore/RedisDatastore.ts";


let env = Deno.env()

let config = {
    url: env['LINKD_URL'] || 'http://localhost:1336',
    datastore: new MemoryDatastore()
}

let datastore = env['LINKD_STORAGEPROVIDER'] || 'MEMORY'

switch (datastore){
    case 'REDIS':
        config.datastore = new RedisDatastore(env['LINKD_REDIS_HOSTNAME'] || "localhost", parseInt(env['LINKD_REDIS_PORT'] || "6379"))
        break
    default: 
    case 'MEMORY':
        config.datastore = new MemoryDatastore()
        break
}

if(config.url.endsWith('/'))
    config.url = config.url.slice(0,-1)


export default config