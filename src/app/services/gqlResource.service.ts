import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {MutationOptions, WatchQueryOptions} from "apollo-client";

@Injectable()
export class GqlResource {
    constructor(private apollo: Apollo) {
    }

    async mutate(mutationOptions: MutationOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apollo.mutate(mutationOptions).subscribe(
                ({data}) => resolve(data),
                error => reject(error.graphQLErrors[0].data.code)
            );
        });
    }

    async query(queryOptions: WatchQueryOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apollo.query(queryOptions).subscribe(
                ({data}) => resolve(data),
                error => reject(error.graphQLErrors[0].data.code)
            );
        });
    }
}
