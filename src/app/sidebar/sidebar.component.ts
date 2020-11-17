import { Component, Input, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor(
    public body: BodyComponent
  ) { }

  ngOnInit() {
  }

}
