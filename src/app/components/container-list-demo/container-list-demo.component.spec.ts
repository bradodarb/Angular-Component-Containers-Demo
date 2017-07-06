import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListDemoComponent } from './container-list-demo.component';

describe('ContainerListDemoComponent', () => {
  let component: ContainerListDemoComponent;
  let fixture: ComponentFixture<ContainerListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
