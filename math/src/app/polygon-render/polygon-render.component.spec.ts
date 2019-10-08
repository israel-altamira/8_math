import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonRenderComponent } from './polygon-render.component';

describe('PolygonRenderComponent', () => {
  let component: PolygonRenderComponent;
  let fixture: ComponentFixture<PolygonRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
