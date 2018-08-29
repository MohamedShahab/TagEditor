import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  box:any[];
  box2:any[];

  constructor() {
    this.box=[];
    
  }

  

  addbox() {
    var item = {
      
      }
     
    
    this.box.push(item);
    
  }

  addbox2() {
    document.getElementById("theFieldID").focus();
    document.getElementById('textbox2').style.display="none"
 
    document.getElementById('btn2').style.display="block"
    document.getElementById('theFieldID').style.display="none"
    
    
  }

  addtextbox() {
    document.getElementById('textbox2').style.display="block"
    
  }

  closebox(){
    this.box.pop();
      }
}
