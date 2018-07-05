import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(
        private http: Http
    ) {}

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(result => result.json());
    }

    getPostId(id: any) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).map(result => result.json());
    }
}
