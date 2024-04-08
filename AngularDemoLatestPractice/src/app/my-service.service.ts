import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  getEmployee(): any[] {
    return [
        { code: "e001", name: 'Tom', gender: 'Male', anualSalary: 5500, dateofBirth: '6/25/1988' },
        { code: "e002", name: 'Sam', gender: 'Male', anualSalary: 6700, dateofBirth: '11/23/1980' },
        { code: "e003", name: 'Ravi', gender: 'Male', anualSalary: 8900, dateofBirth: '11/11/1980' },
        { code: "e004", name: 'Kaveri', gender: 'Female', anualSalary: 9000, dateofBirth: '9/6/1991' },
        { code: "e005", name: 'Kumari', gender: 'Female', anualSalary: 9870, dateofBirth: '10/6/1991' }
    ];
}

}
