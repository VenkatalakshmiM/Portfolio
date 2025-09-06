import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  contactForm: any;
  isSent:boolean = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
   this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
 }
  onSubmit():void {
    if(this.contactForm.invalid) {
      return;
    }
    else {
      this.isSent = true;
      this.contactForm.reset();
    }
  }
}
