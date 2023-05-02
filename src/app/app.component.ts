import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  colors$ : Observable<String[]>;
  color: string;

  constructor(private colorsService: ColorsService) {
  }

  ngOnInit() {
    this.colorsService.loadColors(this.color)
      .subscribe(response => {
        this.colors$= response['colors'];
      })
  }

  save(color2:string){
   this.color = color2.replace('#', '');;
   this.colorsService.loadColors(this.color)
   .subscribe(response => {
     this.colors$= response['colors'];
   })
    
  }

}
