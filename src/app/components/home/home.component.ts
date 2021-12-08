import { Component, OnInit } from '@angular/core';
import studentsData from '../../../assets/students.json';
interface Student { 
    id: any;  
    first_name: any;  
    last_name: any; 
    gpa_points: any; 
    major: any; 
    credit_hrs: any; 
    }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: Student[] = studentsData; 
  constructor() { }
  ngOnInit(): void {
  }

}
