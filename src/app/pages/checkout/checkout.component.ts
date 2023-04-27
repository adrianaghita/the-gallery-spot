import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      county: new FormControl('Sibiu', Validators.required),
      zipCode: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}
