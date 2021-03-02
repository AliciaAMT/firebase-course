import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';



@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // angular fire way of calling db collection
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    const courseRef = this.db.doc('/courses/YenWZJUiAuLAPu4pZhjw').snapshotChanges().subscribe(snap => {
      const course:any = snap.payload.data();
      console.log('course.relatedCourseRef', course.relatedCourseRef);
    });

    const ref = this.db.doc('/courses/UVZzdWsINGnKqSZ2CdPO').snapshotChanges().subscribe(doc => console.log("ref", doc.payload.ref))
  }
  save() {
    const firebaseCourseRef = this.db.doc('/courses/nt0tfECF9nAWnv5fwoJw').ref;

    const rxjsCourseRef = this.db.doc('/courses/UVZzdWsINGnKqSZ2CdPO').ref;

    const batch = this.db.firestore.batch();

    batch.update(firebaseCourseRef, {titles: {description: 'Firebase Course'}});
    batch.update(rxjsCourseRef, {titles: {description: 'Rxjs Course'}});
    const batch$ = of(batch.commit());
    batch$.subscribe();

  }
}
