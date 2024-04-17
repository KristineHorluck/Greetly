import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangedByYouComponent } from './arranged-by-you.component';

describe('ArrangedByYouComponent', () => {
  let component: ArrangedByYouComponent;
  let fixture: ComponentFixture<ArrangedByYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrangedByYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrangedByYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
