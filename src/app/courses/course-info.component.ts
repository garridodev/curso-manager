import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course = new Course();

  _course: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    // this.courseId = +this.route.snapshot.paramMap.get('id');
    this._course = this.courseService.retriveById(Number(this.route.snapshot.paramMap.get('id')));
    this.course = this._course;
  }

  save() {
    this.courseService.save(this.course);
    this.router.navigate(['/courses']);
  }
}