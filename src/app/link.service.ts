import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  filter1:any;
  launch1:boolean;
  land_success1:boolean;

  constructor(
    private http : HttpClient
  ) { }
  
  hit(filter?:number, launch?:boolean, land_success?:string) :Observable<any>{
    this.filter1=filter;
    this.launch1=launch;
    if(land_success=='y' || land_success =='Y'){
      this.land_success1=true;
    }
    else if(land_success=='n' || land_success =='N'){
      this.land_success1=false;
    }
    else{
      this.land_success1=undefined;
    }
    
    if ( (!isNullOrUndefined (this.filter1)) && (isNullOrUndefined (this.launch1)) && (isNullOrUndefined (this.land_success1))){
     console.log("1");
      return this.http.get('https://api.spaceXdata.com/v3/launches?&launch_year='+this.filter1);
      
    }
    else if( (!isNullOrUndefined (this.filter1)) && !(isNullOrUndefined(this.land_success1)) && (isNullOrUndefined (this.launch1))){
      console.log("2");
      return this.http.get('https://api.spaceXdata.com/v3/launches?&launch_success=true&land_success='+this.land_success1+'&launch_year='+this.filter1);
    }
    else if ((!isNullOrUndefined (this.filter1)) && !(isNullOrUndefined(this.launch1)) && (isNullOrUndefined (this.land_success1))){
      console.log("3");
      return this.http.get('https://api.spaceXdata.com/v3/launches?&launch_success='+this.launch1+'&launch_year='+this.filter1);
    }
    else if( (isNullOrUndefined (this.filter1)) && !(isNullOrUndefined(this.land_success1)) ){
      console.log("4");
      return this.http.get('https://api.spaceXdata.com/v3/launches?&launch_success=true&land_success='+this.land_success1);
    }
    else if ((isNullOrUndefined (this.filter1)) && !(isNullOrUndefined(this.launch1)) && (isNullOrUndefined (this.land_success1))){
      console.log("5");
      return this.http.get('https://api.spaceXdata.com/v3/launches?&launch_success='+this.launch1);
    }
    else if((isNullOrUndefined (this.filter1)) && (!isNullOrUndefined (this.launch1)) && (!isNullOrUndefined (this.land_success1))){
      console.log("6");
      return this.http.get('https://api.spaceXdata.com/v3/launches?&launch_success=true&land_success=true');
    }
    else if((isNullOrUndefined (this.filter1)) && (isNullOrUndefined (this.launch1)) && (isNullOrUndefined (this.land_success1))){
      return this.http.get('https://api.spaceXdata.com/v3/launches?');
    }
    else{
      console.log("7");
      console.log('https://api.spaceXdata.com/v3/launches?&launch_success='+this.launch1+'&land_success='+this.land_success1+'&launch_year='+this.filter1);
      return this.http.get('https://api.spaceXdata.com/v3/launches?&launch_success='+this.launch1+'&land_success='+this.land_success1+'&launch_year='+this.filter1);
    }
    
  }
  hit1() :Observable <any>{
    return this.http.get('https://api.spaceXdata.com/v3/launches?');
  }
}
