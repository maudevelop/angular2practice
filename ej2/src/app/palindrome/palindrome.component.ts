import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-palindrome',
  templateUrl: 'palindrome.component.html',
  styleUrls: ['palindrome.component.css']
})
export class PalindromeComponent implements OnInit {
  text;
  message;
  
  constructor() {
    
  }

  ngOnInit() {
  }

  checkWord(text){
      var text2 = text.replace(/[^A-Z0-9]/ig, "").toLowerCase();
      var checkPalindrome = text2.split('').reverse().join('');
      if(text2 === checkPalindrome){
        this.message = "It is a palindrome!"
      } else {
        this.message = null;
      }
  }

}
