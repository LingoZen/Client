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
                error => {
                    if (error.graphQLErrors[0] &&
                        error.graphQLErrors[0].data &&
                        error.graphQLErrors[0].data.code) {
                        return reject(error.graphQLErrors[0].data.code);
                    } else {
                        return reject(error);
                    }
                }
            );
        });
    }

    async query(queryOptions: WatchQueryOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apollo.query(queryOptions).subscribe(
                ({data}) => resolve(data),
                error => {
                    if (error.graphQLErrors[0] &&
                        error.graphQLErrors[0].data &&
                        error.graphQLErrors[0].data.code) {
                        return reject(error.graphQLErrors[0].data.code);
                    } else {
                        return reject(error);
                    }
                }
            );
        });
    }
}
