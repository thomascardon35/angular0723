import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountelemComponent } from './countelem.component';

describe('CountelemComponent', () => {
  let component: CountelemComponent;
  let fixture: ComponentFixture<CountelemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountelemComponent]
    });
    fixture = TestBed.createComponent(CountelemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
