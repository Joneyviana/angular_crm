import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCommandsComponent } from "./tab-commands.component";

describe('DetailsCommandsComponent', () => {
  let component: TabCommandsComponent;
  let fixture: ComponentFixture<TabCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
