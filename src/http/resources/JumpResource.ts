import { Drash } from '../../deps.ts'
import config from "../../config.ts";

export class JumpResource extends Drash.Http.Resource {
    static paths = ["/{:short}"]

    public async GET() {
        let short = this.request.getPathParam("short");
        let link = await config.datastore.getLinkByShortened(short)
        if (!link) throw new Drash.Exceptions.HttpException(404, "The requested resource was not found")
        config.datastore.trackClick(link)
        this.response.headers.set('Location', link.link)

        this.response.status_code = 307

        return this.response
    }
}