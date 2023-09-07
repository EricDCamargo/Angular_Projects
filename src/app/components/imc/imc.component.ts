import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent {
  weight: string = '';
  height: string = '';
  bmiValue: number = 0;
  description: string = '';
  infoVisible: boolean = false;
  valueAttention: boolean = true;

  calculateBMI() {
    const weightValue = parseFloat(this.weight);
    const heightValue = parseFloat(this.height);

    const bmi = (weightValue / (heightValue * heightValue)).toFixed(2);
    this.bmiValue = parseFloat(bmi);

    this.infoVisible = true;

    if (!isNaN(this.bmiValue)) {
      if (this.bmiValue < 18.5) {
        this.description = 'Cuidado! Você está abaixo do peso!';
      } else if (this.bmiValue >= 18.5 && this.bmiValue <= 25) {
        this.description = 'Você está no peso ideal!';
        this.valueAttention = false;
      } else if (this.bmiValue > 25 && this.bmiValue <= 30) {
        this.description = 'Cuidado! Você está com sobrepeso!';
      } else if (this.bmiValue > 30 && this.bmiValue <= 35) {
        this.description = 'Cuidado! Você está com obesidade moderada!';
      } else if (this.bmiValue > 35 && this.bmiValue <= 40) {
        this.description = 'Cuidado! Você está com obesidade severa!';
      } else {
        this.description = 'Cuidado! Você está com obesidade mórbida!';
      }
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.calculateBMI();
    }
  }
}
