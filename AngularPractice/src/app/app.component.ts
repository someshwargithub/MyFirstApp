import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from './person/person.component';
import {EmpComponent} from './emp/emp.component';
import {BindingTestComponent} from './binding-test/binding-test.component'
import {HeaderComponent} from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PersonComponent,EmpComponent,BindingTestComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title:string = 'This is my Header';
}
