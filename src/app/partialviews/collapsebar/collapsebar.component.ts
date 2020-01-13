import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsebar',
  templateUrl: './collapsebar.component.html',
  styleUrls: ['./collapsebar.component.css']
})
export class CollapsebarComponent implements OnInit {
  expanded = false;
  val :string;
 
  constructor() { }

  ngOnInit() {
  }

  expand(){
    this.expanded = !this.expanded;
    if(this.expanded){
      document.getElementById("sidebar").style.width = "300px";
      document.getElementById("cartbutton").style.color = "green";
    } else{
      document.getElementById("sidebar").style.width="0px";
      document.getElementById("cartbutton").style.color = "black";

    }
  }
 
  
}
