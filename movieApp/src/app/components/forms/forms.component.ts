import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators, String]],
      password: ['', [Validators, String]],
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  };

}
