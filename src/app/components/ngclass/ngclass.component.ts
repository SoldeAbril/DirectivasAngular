import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  errorsh:boolean = false;

  productos =[
    {
      nombre:'Tv',
      cantidad: 100
    },
    {
      nombre:'Refri',
      cantidad: 500
    },
    {
      nombre:'Radio',
      cantidad: 70
    },
  ]
  

  constructor() { }

  ngOnInit() {
  }
}
 