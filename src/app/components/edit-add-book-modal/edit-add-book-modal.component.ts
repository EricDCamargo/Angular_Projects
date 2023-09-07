import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/shared/models/books';

@Component({
  selector: 'app-edit-add-book-modal',
  templateUrl: './edit-add-book-modal.component.html',
  styleUrls: ['./edit-add-book-modal.component.css'],
})
export class EditAddBookModalComponent implements OnInit {
  @Output() submitRequested = new EventEmitter<{
    name: string;
    price: number;
  }>();
  @Output() closed = new EventEmitter<void>();
  @Input() selectedBook: Book | undefined;

  newBookName: string = '';
  newBookPrice: number = 0;

  ngOnInit() {
    if (this.selectedBook) {
      this.newBookName = this.selectedBook.name;
      this.newBookPrice = this.selectedBook.price;
    }
  }

  requestSubmit() {
    if (this.newBookName && this.newBookPrice > 0) {
      const newBookData = {
        name: this.newBookName,
        price: this.newBookPrice,
      };
      this.submitRequested.emit(newBookData);
      this.newBookName = '';
      this.newBookPrice = 0;
    }
  }
  close() {
    this.closed.emit();
  }
}
