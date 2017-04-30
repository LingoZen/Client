import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import * as assert from "assert";

import {SearchQuery} from "../interfaces/search-query.interface";
import {SourceSentence} from "../models/source-sentence.models";
import {sourceSentenceQuery} from "../gql-queries/source-sentence.gql-query";
import {GqlResource} from "./gqlResource.service";
import {searchSourceSentencesQuery} from "../gql-queries/search-source-sentence.gql-query";

@Injectable()
export class SourceSentenceService extends GqlResource {
    constructor(apollo: Apollo) {
        super(apollo)
    }

    async search({searchString, language}: SearchQuery): Promise<SourceSentence[]> {
        assert(searchString);
        assert(language);

        let queryResponse = await this.query({
            query: searchSourceSentencesQuery,
            variables: {
                searchString: searchString,
                languageId: language.id
            }
        });

        return queryResponse.searchSourceSentences.map(sourceSentence => new SourceSentence(sourceSentence));
    }

    async getSourceSentence(id: String): Promise<SourceSentence> {
        assert(id);

        let queryResponse = await this.query({
            query: sourceSentenceQuery,
            variables: {id: id}
        });

        return new SourceSentence(queryResponse.sourceSentence);
    }
}
