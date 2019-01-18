import { BaseResourceModel } from '../../../shared/base-resource.model';

export class Site extends BaseResourceModel {
    constructor(
        public _id?: number,
        public title?: string,
        public episode_id?: number,
        public opening_crawl?: string,
        public director?: string,
        public producer?: string,
        public release_date?: Date,
        public species?: [],
        public starships?: [],
        public vehicles?: [],
        public characters?: [],
        public planets?: [],
        public url?: string,
        public created?: string,
        public edited?: string
    ) {
        super();
    }
}
