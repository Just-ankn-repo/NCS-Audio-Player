import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqVisualizerComponent } from './eq-visualizer.component';

describe('EqVisualizerComponent', () => {
  let component: EqVisualizerComponent;
  let fixture: ComponentFixture<EqVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
