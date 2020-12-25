import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  exportAs:'courselist'
})
export class CourseListComponent implements OnInit {
   courses=[{id:1,name:'Physics'},
            {id:2,name:'Chemistry'},
            {id:3,name:'Biology'}          
  ]
  constructor() { }

  ngOnInit(): void {
  }

  meth(){
    console.log('meth called')
  }

}
