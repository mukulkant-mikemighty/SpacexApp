import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  http: any;
  page:any;
  year_list:any=[];
  year_list1:any=[];
  year_list2:any=[];
  mobile:boolean=false;
  tablet:boolean=false;
  desktop:boolean=false;

//@Output() submit =new EventEmitter();  
  

  flight_number:any;
  mission_name:any;
  mission_id:any;
  upcoming:any;
  launch_year:any;
  launch_date_unix:any;
  launch_date_utc:any;
  launch_date_local:any;
  is_tentative:any;
  tentative_max_precision:any;
  tbd:any;
  launch_window:any;
  rocket:any;
  ships:any;
  telemetry:any;
  launch_site:any;
  launch_success1:any;
  launch_failure_details:any;
  links:any;
  timeline:any;
  crew:any;
  landingSuccess:any;
  image_link:any;
  image_link_small:any;

  newArr = [];

  list:any=new Array();
  list1:any=new Array();
  list2:any=new Array();

  coll1:any;
  coll2:any;
  coll3:any;

  filter1:any;
  launch1:boolean;
  land_success1:string;
  
  collA:any;
  collB: any;


  constructor(
    public spacex: LinkService,
    // public body2: Body2Component,
  ) { 
    
  }

  ngOnInit() {

    this.spacex.hit1().subscribe((response)=>{
      this.page=[];
      this.page=response;
      this.display(this.page);
      this.year_list=this.year_list_1();
      


      console.log(this.list2);
      if (window.screen.width <700) { 
        this.mobile = true;
        this.tablet=false;
        this.desktop=false;
      }
      else if(window.screen.width>=700 && window.screen.width< 1024){
        this.mobile =false;
        this.tablet=true;
        this.desktop=false;
      }
      else{
        this.mobile = false;
        this.tablet=false;
        this.desktop=true;
        console.log("Hi there");
        console.log(this.year_list1);
        
      }
    })
    // this.body2.card_disp(this.list);
    
  }
  year_list_1(){
    let year_list=[];
    this.year_list1=[];
    this.year_list2=[];
    let year1= (new Date).getFullYear();
    for(let i=2002; i<=year1 ;i++ ){
      year_list.push(i);
      if(i%2==0){
        this.year_list1.push(i);
      }
      else{
        this.year_list2.push(i);
      }
    }
    return year_list;
  }
launch(launch:boolean){
  if(launch==true){
    if(this.launch1==true){this.launch1=undefined}
    else{
      this.launch1=true;
    }
    
  }
  else if(launch==false){
    if(this.launch1==false){this.launch1=undefined }
    else{this.launch1=false;}
  }
  else{
    this.launch1=undefined;
  }
  this.uriHit();
}
launch_year_filter(filter:number){
  if(this.filter1!=filter){
    this.filter1=filter;
  }
  else{
    this.filter1=undefined;
  }
  this.uriHit();
}
land_success(land_success:string){
  if(land_success=='y'||land_success=='Y'){
    if(this.land_success1=='y'){this.land_success1=undefined}
    else{this.land_success1='y';}
  }
  else if(land_success=='n'||land_success=='N'){
    if(this.land_success1=='n'){this.land_success1=undefined}
    else{this.land_success1='n';}
  }
  else{
    this.land_success1=undefined;
  }
this.uriHit();
}

uriHit(){
    
  // this.submit.emit(this.filter1,this.land_success1,this.launch1);    
  this.spacex.hit(this.filter1,this.launch1,this.land_success1).subscribe((response)=>{
    console.log("**************************************************************");
    console.log(response);
    console.log("--------------------------------------------------------------");
    this.page=[];
    this.page=response;
    // this.year_list=this.year_list_1();
    
    this.display(this.page);

    console.log(this.list2);
    if (window.screen.width <700) { 
      this.mobile = true;
      this.tablet=false;
      this.desktop=false;
    }
    else if(window.screen.width>=700 && window.screen.width< 1024){
      this.mobile =false;
      this.tablet=true;
      this.desktop=false;
    }
    else{
      this.mobile = false;
      this.tablet=false;
      this.desktop=true;
      console.log("Hi there");
      console.log(this.year_list1);
      
    }
    
    
  })


  }


display(page){
    this.page=page;
    for (let item1 of this.page){
      this.image_link=item1.links.missiion_patch;
      this.image_link_small=item1.links.missiion_patch_small;
      this.flight_number=item1.flight_number;
      this.mission_name=item1.mission_name;
      this.mission_id=item1.mission_id;
      this.launch_year=item1.launch_year;
      this.launch_success1=item1.launch_success;
      if(!isNullOrUndefined(item1.rocket.cores)&&(isDefined(item1.rocket.cores.land_success))){
        this.landingSuccess=item1.rocket.cores.land_success;
      }else{
        this.landingSuccess=null;
      }
      

      this.list.push(this.image_link, this.image_link_small,this.flight_number,this.mission_name,this.mission_id,this.launch_year,this.launch_success1,this.landingSuccess);

    


    }
    
    this.coll1=this.page.slice(0,this.list.length/3);
    this.coll2=this.page.slice(this.list.length/3,2*this.list.length/3);
    this.coll3=this.page.slice(2*this.list.length/3,);
    
    this.collA=this.page.slice(0,this.list.length/2);
    this.collB=this.page.slice(this.list.length/2,);

  }
  

}
