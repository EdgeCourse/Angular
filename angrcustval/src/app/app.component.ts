import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidateUrl } from './url.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      websiteUrl: ['', [Validators.required, ValidateUrl]]
    });
  }

  saveForm(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Username', form.value.userName);
    console.log('Website URL', form.value.websiteUrl);
  }
}

/*
the websiteUrl form control uses both the built-in Validators.required and the custom ValidateUrl validator
*/