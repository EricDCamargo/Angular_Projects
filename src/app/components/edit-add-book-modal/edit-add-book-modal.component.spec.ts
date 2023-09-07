import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddBookModalComponent } from './edit-add-book-modal.component';

describe('EditAddBookModalComponent', () => {
  let component: EditAddBookModalComponent;
  let fixture: ComponentFixture<EditAddBookModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddBookModalComponent]
    });
    fixture = TestBed.createComponent(EditAddBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
