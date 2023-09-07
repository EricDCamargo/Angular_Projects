import { Component } from '@angular/core';
import { Book } from 'src/shared/models/books';
import { BookService } from 'src/shared/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  isBookModalOpen = false;
  books: Book[] = [];
  selectedBook: Book | undefined = undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  addOrEditBook(data: { name: string; price: number }) {
    if (!data.name || data.price <= 0) {
      return;
    }
    const newBook: Book = {
      id: this.selectedBook?.id ?? this.generateNewId(),
      name: data.name,
      price: data.price,
    };
    const bookServiceMethod = this.selectedBook
      ? () => this.bookService.editBook(newBook)
      : () => this.bookService.addBook(newBook);

    bookServiceMethod().subscribe(() => {
      this.closeBookModal();
      this.getBooks();
    });
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book.id).subscribe(() => {
      const index = this.books.indexOf(book);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    });
  }
  generateNewId = () => {
    let newId = 1;
    while (this.books.some((item) => item.id === newId)) {
      newId++;
    }
    return newId;
  };

  openBookModal(book?: Book) {
    book && (this.selectedBook = book);
    this.isBookModalOpen = true;
  }

  closeBookModal() {
    this.isBookModalOpen = false;
    this.selectedBook = undefined;
  }
}
