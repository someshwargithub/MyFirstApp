import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css',
})
export class DataDisplayComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];
  error:any='';
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      },
      error => {
        console.log(error);
        this.error=error.message;
        //this.errors = error
    }
    
    );
      
      
  }
}
