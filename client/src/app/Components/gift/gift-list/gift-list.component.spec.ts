import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListComponent } from './gift-list.component';

describe('GiftManagementComponent', () => {
  let component: GiftListComponent;
  let fixture: ComponentFixture<GiftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
