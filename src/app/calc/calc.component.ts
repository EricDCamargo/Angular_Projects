import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  calNumber: string = 'noValue';
  calValue: number = 0;
  funcT: any = 'NoFunction';
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(value: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(value);
    } else if (type == 'function') {
      this.onFunctionClick(value);
    }
  }

  onNumberClick(value: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + value;
    } else {
      this.calNumber = value;
    }
    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionClick(value: string) {
    if (value == 'c') {
      this.onClearButtonPress();
    } else if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = value;
    } else if (this.funcT != 'NoFunction') {
      this.secondNumber = this.calValue;
      this.valueCalculation(value);
    }
  }
  valueCalculation(value: string) {
    if (this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, value);
    }
    if (this.funcT == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, value);
    }
    if (this.funcT == '*') {
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(Total, value);
    }
    if (this.funcT == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(Total, value);
    }
  }
  totalAssignValues(Total: number, value: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = value;
    if (value == '=') {
      this.onEqualButtonPress();
    }
  }
  onEqualButtonPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
  onClearButtonPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
}
