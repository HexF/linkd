import { Drash } from "../deps.ts";
import { LinkResource } from './resources/LinkResource.ts'
import { JumpResource } from "./resources/JumpResource.ts";

export const server = new Drash.Http.Server({
    address: ":1336",
    resources: [LinkResource, JumpResource]
})
