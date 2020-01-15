import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSecondComponent } from './tab-second.component';

describe('TabSecondComponent', () => {
  let component: TabSecondComponent;
  let fixture: ComponentFixture<TabSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
