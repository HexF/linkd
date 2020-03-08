import { Link } from '../Link.ts'

export interface IDatastore {

    /**
     * Add a link to the datastore
     * @param link The Link Object to add
     */
    addLink(link: Link): Promise<void>

    /**
     * Get a link by its shortened version
     * @param shortened The shortned link of the link to get
     */
    getLinkByShortened(shortened: string): Promise<Link>

    /**
     * Get all the links in the datastore
     */
    getLinks(): Promise<Array<Link>>

    /**
     * Tracks a click on a link
     * @param link 
     */
    trackClick(link: Link): Promise<void>

}