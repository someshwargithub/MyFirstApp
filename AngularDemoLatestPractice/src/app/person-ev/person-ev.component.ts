import { Component,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-person-ev',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person-ev.component.html',
  styleUrl: './person-ev.component.css'
})
export class PersonEVComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';
  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }

}
