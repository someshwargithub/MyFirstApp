import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmpServiceComponent } from './my-emp-service.component';

describe('MyEmpServiceComponent', () => {
  let component: MyEmpServiceComponent;
  let fixture: ComponentFixture<MyEmpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEmpServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyEmpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
