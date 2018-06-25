import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { invalidNameValidator } from '../invalid-name.validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  /* contactForm = new FormGroup({
    email: new FormControl('', Validators.required),
    subject: new FormControl(),
    body: new FormControl()
  }); */

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', invalidNameValidator(/[0-9]/)],
      email: ['', [ Validators.required, Validators.email ]],
      subject: [''],
      body: ['', Validators.required]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get body() {
    return this.contactForm.get('body');
  }

}
