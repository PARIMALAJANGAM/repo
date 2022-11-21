import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'FirstApp';
includeLetters = false;
includeNumbers = false;
includeSymbols = false;

password = '';

onChangeUseLetters()
{
this.includeLetters = !this.includeLetters;
}

onChangeUseNumbers()
{
  this.includeNumbers=!this.includeNumbers;
}

onChangeUseSymbols()
{
  this.includeSymbols=!this.includeSymbols;
}

onButtonClick(){
this.password = "my password";
  }

getName(){
  return 'Alex';
}

}
