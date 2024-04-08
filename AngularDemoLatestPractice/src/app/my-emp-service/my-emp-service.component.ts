import { Component } from '@angular/core';
import {MyServiceService} from "../my-service.service";
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-my-emp-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-emp-service.component.html',
  styleUrl: './my-emp-service.component.css'
})
export class MyEmpServiceComponent {
  emp:any=[];

  constructor(private myService: MyServiceService) { 

    this.emp=myService.getEmployee();
  }
}
