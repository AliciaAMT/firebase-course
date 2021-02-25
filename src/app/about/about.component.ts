import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyCnjEuPzG9UE-W9VFRRX5s6cOdntjFb6R4",
  authDomain: "ngu-firebase-course.firebaseapp.com",
  projectId: "ngu-firebase-course",
  storageBucket: "ngu-firebase-course.appspot.com",
  messagingSenderId: "495378407371",
  appId: "1:495378407371:web:d05f6e0576f07d0263a04e"
};
//firebase
firebase.initializeApp(config);
const db = firebase.firestore();

//settings change probably not needed in current versions
//const settings = {timestampsInSnapshots:true};
//db.settings(settings);
//end settings change
//end firebase
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //call to database
    //db.doc('courses/550y95veTFMYnSMyoQxR')
    //  .get()
    //  .then(snap => console.log(snap.data()))
    //;

    //call collection and get array of docs data without id
    //db.collection('courses').get()
      //.then(snaps => {
        //console.log(snaps.docs.map(snap => snap.data()))
    //});

    //call collection and get array of doc id AND data
    //db.collection('courses').get()
      //.then(snaps => {
        //const courses : Course[] = snaps.docs.map(snap => {
          //return <Course>{
            //id: snap.id,
            //...snap.data()
          //}
        //});
        //console.log(courses);
      //});
  }
}
