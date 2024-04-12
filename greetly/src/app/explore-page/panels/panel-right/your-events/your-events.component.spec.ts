import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourEventsComponent } from './your-events.component';

describe('YourEventsComponent', () => {
  let component: YourEventsComponent;
  let fixture: ComponentFixture<YourEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
