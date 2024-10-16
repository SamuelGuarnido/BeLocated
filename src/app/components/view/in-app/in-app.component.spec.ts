import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InAppComponent } from './in-app.component';

describe('InAppComponent', () => {
  let component: InAppComponent;
  let fixture: ComponentFixture<InAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
