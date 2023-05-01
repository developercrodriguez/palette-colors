import { Component, EventEmitter, Output } from '@angular/core';
import { colorCode } from 'src/app/model/color';

@Component({
  selector: 'color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.css']
})
export class ColorInputComponent {
  color: colorCode;


  @Output('colorChanged')
  colorEmitter = new EventEmitter<String>();
  onSaveClicked(colorCode:string) {
    this.colorEmitter.emit(colorCode);
  }
}
