import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalAnalysisComponent } from './technical-analysis.component';

describe('TechnicalAnalysisComponent', () => {
  let component: TechnicalAnalysisComponent;
  let fixture: ComponentFixture<TechnicalAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
