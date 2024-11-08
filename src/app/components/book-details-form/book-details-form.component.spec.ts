import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsFormComponent } from './book-details-form.component';

describe('BookDetailsFormComponent', () => {
  let component: BookDetailsFormComponent;
  let fixture: ComponentFixture<BookDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
