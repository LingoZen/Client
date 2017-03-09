import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {ApolloQueryResult} from "apollo-client";
import {Observable} from "rxjs";

import {searchSentences} from "../gql-queries";
import {getSourceSentence} from "../gql-queries";
import {SourceSentence} from "../models";

@Injectable()
export class SourceSentenceService {
  constructor(private apollo: Apollo) {
  }

  public search(searchQuery: string): Observable<ApolloQueryResult<SourceSentence[]>> {
    return this.apollo.watchQuery<any>({
      query: searchSentences,
      variables: {
        searchQuery: searchQuery
      }
    }).map(({data}) => (
      data.searchSourceSentences.map((sourceSentence) => new SourceSentence(sourceSentence))
    ));
  }

  public getSourceSentence(id: String): Observable<ApolloQueryResult<SourceSentence>> {
    return this.apollo.watchQuery<any>({
      query: getSourceSentence,
      variables: {
        id: id
      }
    }).map(({data}) => data.sourceSentence);
  }
}
