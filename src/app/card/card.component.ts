import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() iterObj1: any;
  constructor(
    public body: BodyComponent
  ) { }

  ngOnInit() {
  }

}
