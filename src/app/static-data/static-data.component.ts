import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-static-data',
  templateUrl: './static-data.component.html',
  styleUrls: ['./static-data.component.css']
})
export class StaticDataComponent implements OnInit {
  countries: any;
  customerForm: FormGroup;
  name: FormControl;
  country: FormControl;
  address: FormControl;
  bank: FormControl;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private http: HttpClient
  ) {
    this.name = new FormControl('', [Validators.required]);
    this.country = new FormControl('', [Validators.required]);
    this.address = new FormControl('', [Validators.required]);
    this.bank = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name: this.name,
      country: this.country,
      address: this.address,
      bank: this.bank,
    });
    this.getCountries();
  }

  getCountries() {
    this.http.get("https://restcountries.eu/rest/v2/all").subscribe((data) => {
      this.countries = data;
    });
  }

  addCustomer() {
    if (this.customerForm.invalid) {
        alert('invalid data submitted');
        return;
    }
    console.log(this.customerForm.value);
  }

}
