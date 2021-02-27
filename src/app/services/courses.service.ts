
import { Course } from './../model/course';
import { first, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { convertSnaps } from '../services/db-utils';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFirestore) { }

  loadAllCourses(): Observable<Course[]> {
    return this.db.collection(
      'courses', ref => ref.orderBy("seqNo")).snapshotChanges().pipe(map(snaps => {
      return snaps.map(snap => {
        return <Course> {
          id: snap.payload.doc.id,
          ...snap.payload.doc.data() as Course
        };
      });
    }),
    //end observable after first fetch
      first());
  }

  findCourseByUrl(courseUrl: string):Observable<Course> {
    return this.db.collection('courses', ref=> ref.where("url", "==", courseUrl)).snapshotChanges()
    .pipe(
      map(snaps => {
        const courses = convertSnaps<Course>(snaps);
        return courses.length == 1 ? courses[0]: undefined;
      }),
      first()
    )

  }
}
