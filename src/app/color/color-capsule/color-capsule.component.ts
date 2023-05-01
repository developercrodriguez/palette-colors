import { Component, Input } from '@angular/core';
import { colorCode } from 'src/app/model/color';

@Component({
  selector: 'color-capsule',
  templateUrl: './color-capsule.component.html',
  styleUrls: ['./color-capsule.component.css']
})
export class ColorCapsuleComponent {
  @Input()
  colorText: colorCode;
}
