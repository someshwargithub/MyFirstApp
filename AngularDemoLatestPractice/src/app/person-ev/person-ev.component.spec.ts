import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEVComponent } from './person-ev.component';

describe('PersonEVComponent', () => {
  let component: PersonEVComponent;
  let fixture: ComponentFixture<PersonEVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonEVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonEVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
