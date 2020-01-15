import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabThridComponent } from './tab-thrid.component';

describe('TabThridComponent', () => {
  let component: TabThridComponent;
  let fixture: ComponentFixture<TabThridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabThridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabThridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
