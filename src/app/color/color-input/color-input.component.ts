import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { colorCode } from 'src/app/model/color';

@Component({
  selector: 'color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.css']
})
export class ColorInputComponent implements OnInit{
  color: string;


  constructor() {
    this.color = "#000000";
  }
  ngOnInit(): void {
    this.color = "#000000";
  }


  @Output('colorChanged')
  colorEmitter = new EventEmitter<String>();
  onSaveClicked(colorCode:string) {
    this.colorEmitter.emit(colorCode);
  }

  @Output('modColor')
  coloChange = new EventEmitter<String>();
  onModify(colorCode:string) {
    this.color = colorCode;
  }
}
