import { Component, VERSION,  ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular ' + VERSION.major + ' Master Class';
  number1: any;
  number2: any;
  answer: any;
  height = 54;
  width = 54;

  operand = '+';

  @ViewChild('box3', { static: false }) public box3: ElementRef;
  @ViewChild('box2', { static: false }) public box2: ElementRef;
  @ViewChild('box1', { static: false }) public box1: ElementRef;

  calculate(){
    if (this.operand === '+'){
      this.answer = parseInt('10', this.number1) + parseInt('10', this.number2);
    } else if (this.operand === '-') {
      this.answer = parseInt('10', this.number1) - parseInt('10', this.number2);
    } else if (this.operand === '/') {
      this.answer = parseInt('10', this.number1) / parseInt('10', this.number2);
    } else if (this.operand === '*') {
      this.answer = parseInt('10', this.number1) * parseInt('10', this.number2);
    }
  }

  clear1(){
    this.box3.nativeElement.value = '';
  }

  clear2(){
    this.box3.nativeElement.value = '';
  }

  clear3(){
    this.box1.nativeElement.value = '';
    this.box2.nativeElement.value = '';
    this.box3.nativeElement.value = '';
  }

  changeOperand(exper){
    this.clear3();
    this.operand = exper;
  }
}

