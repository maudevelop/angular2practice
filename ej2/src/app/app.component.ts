import { Component } from '@angular/core';
import { PalindromeComponent } from './palindrome/palindrome.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PalindromeComponent]
})
export class AppComponent {
  title = 'Palindrome Checker. Type a word';
}
