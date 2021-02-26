import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from 'app/model/course';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // angular fire way of calling db collection
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    /*
    this.db.collection('courses').snapshotChanges().subscribe(snaps=>{

      console.log(snaps);


      const courses: Course[] = snaps.map(snap => {

        return <Course> {
          id: snap.payload.doc.id,
          ...snap.payload.doc.data() as Course
        }
      })
      console.log(courses);

    });   */
  }
}
