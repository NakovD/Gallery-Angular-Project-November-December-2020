import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicsPageComponent } from './all-pics-page.component';

describe('AllPicsPageComponent', () => {
  let component: AllPicsPageComponent;
  let fixture: ComponentFixture<AllPicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
