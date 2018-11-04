import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDvitR0n2p6LQ89mcwS1kbgRIJoRT92Qag",
      authDomain: "ng-recipe-book-330c9.firebaseapp.com",
    })
  }
}
