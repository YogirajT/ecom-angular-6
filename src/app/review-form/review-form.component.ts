import { Component, OnInit } from '@angular/core';
import { ReviewFormModel } from './review-form';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  ratings: number[] = [ 1, 2, 3, 4, 5 ];
  reviewModel = new ReviewFormModel();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.reviewModel);
  }

}
