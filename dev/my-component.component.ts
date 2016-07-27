/**
 * Created by consultadd on 26/7/16.
 */
import {Component, OnInit} from "angular2/core";


@Component({
  selector: 'my-component',
  template: `
      Hi I'm <span [style.color]="inputElement.value==='yes' ? 'blue': ''">{{name}}</span> and this is my first angular2 component! and <br>
      <span [class.is-awesome]="inputElement.value==='yes'">this is so awesome!</span>
     
      <br><br>
      Is it Awesome?
      <input type="text" #inputElement (keyup)="0"/> 
      <br><br>
      <button [disabled]="inputElement.value!=='yes'">enabled if 'yes' is entered</button>
      
  `, // here in input tag we use # tag to create a local input element variable
    //we use event to trigger the event wghen vale is enetered in input tag
    // in span tag we use class buidin directive to attach css class property to the text if the variable value is yes
  styleUrls: ['src/css/mycomponent.css']//this will attach css to angular document

})

export class MyComponentComponent implements OnInit{
    name: string;
    ngOnInit(): any {
        this.name = 'Manish';
    }

}
