import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from './person/person.component';
import {EmpComponent} from './emp/emp.component';
import {BindingTestComponent} from './binding-test/binding-test.component'
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {UserInputComponent} from "./user-input/user-input.component";
import {PersonEVComponent} from "./person-ev/person-ev.component";
import { MyEmpServiceComponent } from './my-emp-service/my-emp-service.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PersonComponent,EmpComponent,BindingTestComponent,HeaderComponent,UserComponent,UserInputComponent,CommonModule,PersonEVComponent,MyEmpServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title:string = 'This is my Header';
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  onPersonCreated(name: string) {
    this.persons.push(name);
  }

}
