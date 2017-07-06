import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListAndItemDemoComponent } from './container-list-and-item-demo.component';

describe('ContainerListAndItemDemoComponent', () => {
  let component: ContainerListAndItemDemoComponent;
  let fixture: ComponentFixture<ContainerListAndItemDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerListAndItemDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerListAndItemDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
