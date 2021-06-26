import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SpaceX';

  constructor(
    private titleService: Title,
    private meta: Meta,
    
    ) {}

  ngOnInit() {
  	this.titleService.setTitle(this.title);
  	this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project, Space X, Space, space'});
    this.meta.addTag({name: 'description', content: 'Angular project'});
    this.meta.addTag({name: 'author', content: 'Mukul Kant'});
    var imgUrlPath= "../src/FFTB1.ico";
    this.meta.addTag({ name: 'og:image', content: imgUrlPath });
  }
  
}
