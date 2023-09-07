import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [];
  apiUrl: string = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, newBook);
  }
  editBook(updatedBook: Book): Observable<Book> {
    const url = `${this.apiUrl}/${updatedBook.id}`;
    return this.http.put<Book>(url, updatedBook);
  }

  deleteBook(BookId: number): Observable<void> {
    const url = `${this.apiUrl}/${BookId}`;
    return this.http.delete<void>(url);
  }
}
