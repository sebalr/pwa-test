import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Constants } from 'src/app/shared/constants';
import { Todo } from '../models/todo.model.';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor( private http: Http) { }

  public async getAllTodos(): Promise<Todo[]> {
    return this.http
      .get(`${Constants.apiURL}/todos`).pipe(
        map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      }),
      catchError(this.handleError('getTodos', []))
    ).toPromise();
  }

public async getAllPost(): Promise<Post[]> {
  return this.http
    .get(`${Constants.apiURL}/posts`).pipe(
      map(response => {
      const posts = response.json();
      return posts.map((post) => new Post(post));
    }),
    catchError(this.handleError('getPosts', []))
  ).toPromise();
}

public async getUser(id: number): Promise<Post> {
  return this.http
    .get(`${Constants.apiURL}/users/${id}`).pipe(
      map(response => {
      const post = response.json();
      return new Post(post);
    }),
    catchError(this.handleError('getUser', new Post()))
  ).toPromise();
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); 
    return of(result as T);
  };
}

}
