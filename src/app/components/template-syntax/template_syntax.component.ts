import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './template_syntax.component.html',
  styleUrl: './template_syntax.component.scss'
})
export class TemplateSyntax {


  username: string;
  userImage: string; 
  isHighlighted:boolean; 
  items: string[]
  
  constructor(){
    this.username = 'Adhiraj';
    this.userImage = 'https://avatar.iran.liara.run/public/4'; 
    this.isHighlighted = false; 
    this.items = ["Pro wrestling, Metal Music, Software Development"]
  }
}
