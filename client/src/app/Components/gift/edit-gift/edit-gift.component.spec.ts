import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGiftComponent } from './edit-gift.component';

describe('EditGiftComponent', () => {
  let component: EditGiftComponent;
  let fixture: ComponentFixture<EditGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
