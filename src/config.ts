import { MemoryDatastore } from "./Datastore/MemoryDatastore.ts";

let config = {
    datastore: new MemoryDatastore()
}

export default config