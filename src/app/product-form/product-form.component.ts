import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  title: FormControl;
  price: FormControl;
  category: FormControl;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    private formBuilder: FormBuilder,
    private productService: ProductService
    ) {
      this.title = new FormControl('', [Validators.required]);
      this.price = new FormControl('', [Validators.required]);
      this.category = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: this.title,
      price: this.price,
      category: this.category
    });
  }

  get f() { return this.productForm.controls; }

  closeModal() {
    this.dialogRef.close();
  }

  submitProduct() {
    this.submitted = true;
    if (this.productForm.invalid) {
        alert('invalid data submitted');
        return;
    }
    console.log('submitted');
    console.log(this.productForm.value);
    this.productService.upsertProduct(this.productForm.value);
  }
}
