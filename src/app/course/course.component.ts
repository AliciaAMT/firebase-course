import { CoursesService } from './../services/courses.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Lesson} from '../model/lesson';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;
  lessons: Lesson[];
  displayedColumns = ['seqNo', 'description', 'duration'];

  dataSource:any;


  constructor(
    private route: ActivatedRoute,
    private CoursesService: CoursesService) {


  }

  ngOnInit() {

    this.course = this.route.snapshot.data['course'];

    this.CoursesService.findLessons(this.course.id).subscribe(lessons => this.lessons = lessons);

  }

  loadMore() {

  }


}
