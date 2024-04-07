import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the correct greeting', () => {
    const name = 'Alice';
    component.name = name;
    fixture.detectChanges();
    //Unit Test Comments
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(`Hello, ${name}!`);
  });
});
