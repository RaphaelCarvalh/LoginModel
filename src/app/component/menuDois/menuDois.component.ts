import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menuDois',
  templateUrl: './menuDois.component.html',
  styleUrls: ['./menuDois.component.scss']
})
export class menuDoisComponent {
  
  title = 'showtime';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000'
      }
    }else
    {
        this.navbg = {}
    }
  }

}
