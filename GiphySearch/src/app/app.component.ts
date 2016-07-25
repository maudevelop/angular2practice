import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  http: Http;
  title = 'Welcome to GiphySearch!';
  giphies= [];



  constructor(http: Http) { 
    this.http = http; 
  }

  performSearch(searchTerm) {
    var apiLink = this.link + searchTerm; 
    this.http.request(apiLink)
      .subscribe((res: Response) => { 
        this.giphies = res.json().data;
        console.log(res.json()); 
      });
  }

}


