import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  valor = '-';
  static count = 0;

  putValue() {
    if (this.valor === '-') {
      if (ButtonComponent.count % 2 === 0) {
        this.valor = 'X';
        ButtonComponent.count++;
      } else {
        this.valor = 'O';
        ButtonComponent.count++;
      }
    } else {
      alert('Impossível trocar!');
    }
  }
}
