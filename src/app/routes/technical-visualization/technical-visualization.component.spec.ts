import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalVisualizationComponent } from './technical-visualization.component';

describe('TechnicalVisualizationComponent', () => {
  let component: TechnicalVisualizationComponent;
  let fixture: ComponentFixture<TechnicalVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
