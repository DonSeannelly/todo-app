import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoviewComponent } from './todoview.component';

describe('TodoviewComponent', () => {
  let component: TodoviewComponent;
  let fixture: ComponentFixture<TodoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
