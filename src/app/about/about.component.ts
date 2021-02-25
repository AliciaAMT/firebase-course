import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // angular fire way of calling db collection
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('courses').valueChanges().subscribe(val=>console.log(val));
  }
}
