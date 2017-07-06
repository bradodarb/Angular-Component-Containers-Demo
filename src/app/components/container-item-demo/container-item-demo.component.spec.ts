import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerItemDemoComponent } from './container-item-demo.component';

describe('ContainerItemDemoComponent', () => {
  let component: ContainerItemDemoComponent;
  let fixture: ComponentFixture<ContainerItemDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerItemDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerItemDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
