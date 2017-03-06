import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {ApolloQueryResult} from "apollo-client";
import {Observable} from "rxjs";

import {search} from "../gql-queries";
import {SourceSentence} from "../models";

@Injectable()
export class SourceSentenceService {
  constructor(private apollo: Apollo) {
  }

  public search(searchQuery: string):Observable<ApolloQueryResult<SourceSentence[]>> {
    return this.apollo.watchQuery<any>({
      query: search,
       variables: {
         searchQuery: searchQuery
       }
    }).map(({data}) => data.searchSourceSentences);
  }
}
