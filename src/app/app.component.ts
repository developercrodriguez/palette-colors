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
  color: String;

  constructor(private colorsService: ColorsService) {

  }

  ngOnInit() {
    //this.colors$ = this.colors$.loadColors();
    this.color= '1234';
    this.colorsService.loadColors('')
      .subscribe(response => {
        console.log(response);
      })
  }

  save(color:string){
   this.color = color;
   console.log(color);
   this.colors$ = this.colorsService.loadColors('');
    console.log(this.colors$);
  }

}
