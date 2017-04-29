import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {ApolloQueryResult} from "apollo-client";
import {Observable} from "rxjs";

import {SearchQuery} from "../interfaces/search-query.interface";
import {SourceSentence} from "../models/source-sentence.models";
import {searchSourceSentencesQuery} from "../gql-queries/search-source-sentence.gql-query";
import {sourceSentenceQuery} from "../gql-queries/source-sentence.gql-query";

@Injectable()
export class SourceSentenceService {
    constructor(private apollo: Apollo) {
    }

    public search(searchQuery: SearchQuery): Observable<ApolloQueryResult<SourceSentence[]>> {
        return this.apollo.watchQuery<any>({
            query: searchSourceSentencesQuery,
            variables: {
                searchQuery: searchQuery
            }
        }).map(({data}) => (
            data.searchSourceSentences.map((sourceSentence) => new SourceSentence(sourceSentence))
        ));
    }

    public getSourceSentence(id: String): Observable<ApolloQueryResult<SourceSentence>> {
        return this.apollo.watchQuery<any>({
            query: sourceSentenceQuery,
            variables: {
                id: id
            }
        }).map(({data}) => data.sourceSentence);
    }
}
