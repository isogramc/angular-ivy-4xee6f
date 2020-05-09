import { Component, VERSION,  ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Angular ' + VERSION.major + ' Master Class';
  number1: number;
  number2: number;
  answer: number;
  height = 54;
  width = 54;
  operand = '+';

  @ViewChild('box3', { static: false }) public box3: ElementRef;
  @ViewChild('box2', { static: false }) public box2: ElementRef;
  @ViewChild('box1', { static: false }) public box1: ElementRef;

ngOnInit(){
  this.resetFocus();
}
 
 resetFocus(){
   setTimeout(() => this.box1.nativeElement.focus(), 5);
 }

  calculate(){
    if (this.operand === '+'){
      this.answer = this.number1 + this.number2;
    } else if (this.operand === '-') {
      this.answer = this.number1 - this.number2;
    } else if (this.operand === '/') {
      this.answer = this.number1 / this.number2;
    } else if (this.operand === '*') {
      this.answer = this.number1 * this.number2;
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
    this.resetFocus;
  }
}

