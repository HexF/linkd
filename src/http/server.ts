import Drash from "https://deno.land/x/drash@v0.35.0/mod.ts";
import { LinkResource } from './resources/LinkResource.ts'
import { JumpResource } from "./resources/JumpResource.ts";

export const server = new Drash.Http.Server({
    address: ":1336",
    resources: [LinkResource, JumpResource]
})
